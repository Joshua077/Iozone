import React, { useState } from "react";
import "./Signup.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AppleIcon from "@mui/icons-material/Apple";
import { useNavigate, Link } from "react-router-dom";
import { VerificationCodeInput } from "./component/VerificationCodeInput";
import { useSignUp, useAuth, useClerk } from "@clerk/clerk-react";


export default function SignUp() {
  const { signUp } = useSignUp();
  const { getToken } = useAuth();
  const { setActive } = useClerk();

  const navigate = useNavigate();

  const genderOptions = ["man", "woman", "others"];

  const handleSubmit = async () => {
    try {
      const token = await getToken({ template: "integration_api" }); // Make sure this matches your backend setup
      if (!token)
        throw new Error("No token found. Ensure user session is active.");

      const response = await fetch(
        "https://staging.zanzino.com/api/v1/profile/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const err = await response.json();
        console.error("Backend error:", err);
        throw new Error("Profile onboarding failed");
      }

      const result = await response.json();
      console.log("Profile created:", result);
      setCurrentStep(6); // Show completion
    } catch (err) {
      console.error(err);
      alert("Signup failed. Please check your code or token.");
    }
  };

  const handlePhoneSubmit = async () => {
    if (!signUp) {
      alert("Sign up is not ready yet.");
      return;
    }

    try {
      await signUp.create({ phoneNumber: formData.phone });
      await signUp.preparePhoneNumberVerification({ strategy: "phone_code" });
      nextStep();
    } catch (err) {
      console.error("Phone verification error:", err);
      alert("Failed to send verification code.");
    }
  };


  const handleCodeVerification = async () => {
    if (!signUp) {
      alert("Sign up is not ready yet.");
      return;
    }

    try {
      const result = await signUp.attemptPhoneNumberVerification({
        code: formData.verificationCode,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        nextStep();
      } else {
        alert("Verification not complete.");
      }
    } catch (err) {
      console.error("Verification failed:", err);
      alert("Invalid verification code.");
    }
  };



  const handleBoarding = () => {
    navigate("/onboard");
  };
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    phone: "",
    verificationCode: "",
    name: "",
    email: "",
    dob: "",
    gender: "",
    about: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAboutChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /*Akele's test */
  const handleVerificationComplete = () => {
    nextStep();
  };

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                columnGap: "11px",
                color: "#BC72FB",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <FavoriteIcon />
              <h2
                style={{
                  fontWeight: "900",
                  fontSize: "30px",
                }}
              >
                IOZONE
              </h2>
            </div>
            <div style={{ marginTop: "30px", marginBottom: "30px" }}>
              <h2
                style={{
                  fontWeight: "900",
                  fontSize: "24px",
                }}
              >
                Welcome! Create Your Account
              </h2>
              <p style={{ marginTop: "18px" }}>
                Already have an account? <Link to='/login' className="logbtn" >Log in</Link>
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  columnGap: "11px",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "0.4px solid #938F96",
                  width: "335px",
                  height: "45px",
                  borderRadius: "8px",
                  marginTop: "20px",
                  cursor: "pointer",
                }}
                onClick={handleBoarding}
              >
                <p
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                  }}
                >
                  Continue with Google
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  columnGap: "11px",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "0.4px solid #938F96",
                  width: "335px",
                  height: "45px",
                  borderRadius: "8px",
                  marginTop: "20px",
                  cursor: "pointer",
                }}
                onClick={handleBoarding}
              >
                <AppleIcon />
                <p
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                  }}
                >
                  Continue with Apple
                </p>
              </div>
            </div>
            <p style={{ marginTop: "20px", marginBottom: "20px" }}>
              Or sign up with phone number
            </p>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="inputField"
              style={{
                width: "335px",
                padding: "15px",
                borderRadius: "8px",
                border: "none",
              }}
            />
            <button
              className="nextBtn"
              disabled={!formData.phone}
              onClick={handlePhoneSubmit}
              style={{
                backgroundImage: formData.phone
                  ? "none"
                  : "linear-gradient(to right, #D5CAED, #EEC8E4)",
                backgroundColor: formData.phone ? "#181A87" : undefined,
                color: formData.phone ? "#FFFFFF" : "#B0A7C0",
                width: "335px",
                padding: "15px",
                borderRadius: "8px",
                border: "none",
                marginTop: "15px",
              }}
            >
              Continue
            </button>
            <div style={{ marginTop: "20%" }}>
              <p>
                By Signing up, you agree to our{" "}
                <span style={{ color: "#BC72FB" }}>Terms </span>, see how we use
                your data in our{" "}
                <span style={{ color: "#BC72FB" }}>privacy policy.</span>
              </p>
            </div>
          </div>
        );
      case 2:
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                columnGap: "11px",
                color: "#BC72FB",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <FavoriteIcon />
              <h2
                style={{
                  fontWeight: "900",
                  fontSize: "30px",
                }}
              >
                IOZONE
              </h2>
            </div>

            <h3
              style={{
                margin: "20px 0",
              }}
            >
              Enter Verification Code
            </h3>
            <p
              style={{
                padding: "0px 150px",
                marginBottom: "20px",
              }}
            >
              We have sent a code to your number (234) 999-9999-999, enter your
              six (6) to verify your mobile. Change number
            </p>
            <VerificationCodeInput
              length={6}
              onVerified={handleVerificationComplete}
            />

            <button
              className="nextBtn"
              disabled={!formData.verificationCode}
              onClick={handleCodeVerification}
              style={{
                backgroundColor: "#181A87",
                color: formData.phone ? "#FFFFFF" : "#B0A7C0",
                width: "335px",
                padding: "15px",
                borderRadius: "8px",
                border: "none",
                marginTop: "35px",
              }}
            >
              Continue
            </button>
          </div>
        );
      case 3:
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                columnGap: "11px",
                color: "#BC72FB",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <FavoriteIcon />
              <h2
                style={{
                  fontWeight: "900",
                  fontSize: "30px",
                }}
              >
                IOZONE
              </h2>
            </div>
            <h3
              style={{
                margin: "20px 0",
                textAlign: "center",
              }}
            >
              Tell Us About Yourself
            </h3>
            <p
              style={{
                padding: "0px 150px",
                marginBottom: "20px",
              }}
            >
              Just a few steps and you will be ready to connect with potential
              matches. Please enter correct information
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Name"
                className="inputField"
                style={{
                  width: "335px",
                  padding: "15px",
                  borderRadius: "8px",
                  border: "1px solid #757575",
                  backgroundColor: "#E8E8E826",
                }}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="inputField"
                style={{
                  width: "335px",
                  padding: "15px",
                  borderRadius: "8px",
                  border: "1px solid #757575",
                  backgroundColor: "#E8E8E826",
                }}
              />
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="inputField"
                style={{
                  width: "335px",
                  padding: "15px",
                  borderRadius: "8px",
                  border: "1px solid #757575",
                  backgroundColor: "#E8E8E826",
                }}
              />
            </div>
            <button
              className="nextBtn"
              onClick={nextStep}
              style={{
                backgroundColor: "#181A87",
                color: formData.phone ? "#FFFFFF" : "#B0A7C0",
                width: "335px",
                padding: "15px",
                borderRadius: "8px",
                border: "none",
                marginTop: "15px",
              }}
            >
              Continue
            </button>
          </div>
        );
      case 4:
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                columnGap: "11px",
                color: "#BC72FB",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <FavoriteIcon />
              <h2
                style={{
                  fontWeight: "900",
                  fontSize: "30px",
                }}
              >
                IOZONE
              </h2>
            </div>
            <h3
              style={{
                margin: "20px 0",
                textAlign: "center",
              }}
            >
              Tell Us About Yourself
            </h3>
            <p
              style={{
                padding: "0px 150px",
                marginBottom: "20px",
              }}
            >
              Just a few steps and you will be ready to connect with potential
              matches. Please enter correct information
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                alignItems: "center",
              }}
            >
              <select
                name="gender"
                value={formData.gender}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
                style={{
                  width: "335px",
                  padding: "15px",
                  borderRadius: "8px",
                  border: "1px solid #757575",
                  backgroundColor: "#E8E8E826",
                  fontSize: "16px",
                  color: "#757575",
                }}
              >
                <option value="">I am a</option>
                <option value="man">Man</option>
                <option value="woman">Woman</option>
                <option value="others">Others</option>
              </select>
              <select
                style={{
                  width: "335px",
                  padding: "15px",
                  borderRadius: "8px",
                  border: "1px solid #757575",
                  backgroundColor: "#E8E8E826",
                  fontSize: "16px",
                  color: "#757575",
                }}
              >
                <option value="">I am looking for</option>
                <option value="relationship">Relationship</option>
                <option value="friends">Friends</option>
                <option value="fun">Fun</option>
              </select>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter University"
                className="inputField"
                style={{
                  width: "335px",
                  padding: "15px 0",
                  borderRadius: "8px",
                  border: "1px solid #757575",
                  backgroundColor: "#E8E8E826",
                }}
              />
            </div>
            <button
              className="nextBtn"
              onClick={nextStep}
              style={{
                backgroundColor: "#181A87",
                color: formData.phone ? "#FFFFFF" : "#B0A7C0",
                width: "335px",
                padding: "15px",
                borderRadius: "8px",
                border: "none",
                marginTop: "15px",
              }}
            >
              Continue
            </button>
          </div>
        );
      case 5:
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                columnGap: "11px",
                color: "#BC72FB",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <FavoriteIcon />
              <h2
                style={{
                  fontWeight: "900",
                  fontSize: "30px",
                }}
              >
                IOZONE
              </h2>
            </div>
            <h3
              style={{
                margin: "20px 0",
                textAlign: "center",
              }}
            >
              Tell Us About Yourself
            </h3>
            <p
              style={{
                padding: "0px 150px",
                marginBottom: "20px",
              }}
            >
              Say something cool about yourself
            </p>

            <textarea
              name="about"
              value={formData.about}
              onChange={handleAboutChange}
              placeholder="About me"
              className="inputField"
              style={{
                width: "335px",
                height: "140px",
                padding: "15px",
                borderRadius: "8px",
                border: "1px solid #757575",
                backgroundColor: "#E8E8E826",
                resize: "none", // optional: prevent resizing
                fontSize: "16px",
                lineHeight: "1.5",
              }}
            />

            <button
              className="nextBtn"
              onClick={handleSubmit}
              style={{
                backgroundColor: "#181A87",
                color: formData.phone ? "#FFFFFF" : "#B0A7C0",
                width: "335px",
                padding: "15px",
                borderRadius: "8px",
                border: "none",
                marginTop: "15px",
              }}
            >
              Submit
            </button>
          </div>
        );
      default:
        return (
          <>
            <h3>Signup Complete!</h3>
            <button className="nextBtn" onClick={() => navigate("/dashboard")}>
              Go to Dashboard
            </button>
          </>
        );
    }
  };

  return (
    <div className="signUp_container">
      <div className="signUp_content">
        <div style={{ marginTop: "40px" }}>
          {renderStep()}
          {currentStep > 1 && currentStep < 5 && (
            <button
              className="backBtn"
              onClick={prevStep}
              style={{ marginTop: "10px" }}
            >
              Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
}