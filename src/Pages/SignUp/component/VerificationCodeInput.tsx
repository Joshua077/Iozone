import React, { useRef, useState } from "react";
import { useSignUp, useAuth } from "@clerk/clerk-react";

export function VerificationCodeInput({
  length = 6,
  onVerified,
}: {
  length?: number;
  onVerified?: () => void;
}) {
  const { signUp } = useSignUp();
  // const { setActive } = useAuth();

  const [values, setValues] = useState<string[]>(Array(length).fill(""));
  const [loading, setLoading] = useState(false);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleVerificationChange = async (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newValues = [...values];
    newValues[index] = value.slice(-1);
    setValues(newValues);

    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    const code = newValues.join("");
    if (code.length === length && !newValues.includes("")) {
      try {
        setLoading(true);
        const result = await signUp?.attemptVerification({
          code,
          strategy: "email_code", // ✅ REQUIRED
        });

        if (result?.status === "complete") {
          await (signUp as any)?.setActive?.({
            session: result.createdSessionId,
          }); // ✅ Use signUp.setActive
          onVerified?.();
        } else {
          alert("Verification failed. Try again.");
        }
      } catch (error) {
        console.error("Verification error:", error);
        alert("Invalid verification code.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
      {values.map((value, index) => (
        <input
          key={index}
          ref={(el) => (inputsRef.current[index] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={value}
          onChange={(e) => handleVerificationChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          disabled={loading}
          style={{
            width: "40px",
            height: "50px",
            fontSize: "24px",
            textAlign: "center",
            borderRadius: "8px",
            border: "1px solid #ccc",
            backgroundColor: loading ? "#f2f2f2" : "white",
          }}
        />
      ))}
    </div>
  );
}