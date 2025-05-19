import React, { useState } from 'react'
import "./Hubby.css"

interface HubbyProps {
    onNext?: () => void;
}

interface Hobby {
    name: string;
}

const Hubby: React.FC<HubbyProps> = ({ onNext }) => {

    const [selectedHubbies, setSelectedHubbies] = useState<Hobby[]>([]);
    const [activeStep, setActiveStep] = useState<number>(0);
    const [skipped, setSkipped] = useState<Set<number>>(new Set());

    const isStepOptional = (step: number): boolean => {
        return step === 1;
    };

    const isStepSkipped = (step: number): boolean => {
        return skipped.has(step);
    };

    const handleNext = (): void => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = (): void => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = (): void => {
        if (!isStepOptional(activeStep)) {
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = (): void => {
        setActiveStep(0);
    };

    const hobbies: Hobby[] = [
        { name: 'josh1' },
        { name: 'josh2' },
        { name: 'josh3' },
        { name: 'josh3' },
        { name: 'josh4' },
        { name: 'josh5' },
        { name: 'josh6' },
        { name: 'josh7' },
        { name: 'josh8' },
        { name: 'josh9' },
        { name: 'josh10' },
        { name: 'josh11' },
        { name: 'josh12' },
        { name: 'josh13' },
        { name: 'josh14' },
        { name: 'josh15' },
        { name: 'josh1' },
        { name: 'josh2' },
        { name: 'josh3' },
        { name: 'josh3' },
        { name: 'josh4' },
        { name: 'josh5' },
        { name: 'josh6' },
        { name: 'josh7' },
        { name: 'josh8' },
        { name: 'josh9' },
        { name: 'josh10' },
        { name: 'josh11' },
        { name: 'josh12' },
        { name: 'josh13' },
        { name: 'josh14' },
        { name: 'josh15' },
        { name: 'josh1' },
        { name: 'josh2' },
        { name: 'josh3' },
        { name: 'josh3' },
        { name: 'josh4' },
        { name: 'josh5' },
        { name: 'josh6' },
        { name: 'josh7' },
        { name: 'josh8' },
        { name: 'josh9' },
        { name: 'josh10' },
        { name: 'josh11' },
        { name: 'josh12' },
        { name: 'josh13' },
        { name: 'josh14' },
        { name: 'josh15' },
        { name: 'josh1' },
        { name: 'josh2' },
        { name: 'josh3' },
        { name: 'josh3' },
        { name: 'josh4' },
        { name: 'josh5' },
        { name: 'josh6' },
        { name: 'josh7' },
        { name: 'josh8' },
        { name: 'josh9' },
        { name: 'josh10' },
        { name: 'josh11' },
        { name: 'josh12' },
        { name: 'josh13' },
        { name: 'josh14' },
        { name: 'josh15' },
        { name: 'josh1' },
        { name: 'josh2' },
        { name: 'josh3' },
        { name: 'josh3' },
        { name: 'josh4' },
        { name: 'josh5' },
        { name: 'josh6' },
        { name: 'josh7' },
        { name: 'josh8' },
        { name: 'josh9' },
        { name: 'josh10' },
        { name: 'josh11' },
        { name: 'josh12' },
        { name: 'josh13' },
        { name: 'josh14' },
        { name: 'josh15' }, 
        { name: 'josh1' },
        { name: 'josh2' },
        { name: 'josh3' },
        { name: 'josh3' },
        { name: 'josh4' },
        { name: 'josh5' },
        { name: 'josh6' },
        { name: 'josh7' },
        { name: 'josh8' },
        { name: 'josh9' },
        { name: 'josh10' },
        { name: 'josh11' },
        { name: 'josh12' },
        { name: 'josh13' },
        { name: 'josh14' },
        { name: 'josh15' },
        { name: 'josh1' },
        { name: 'josh2' },
        { name: 'josh3' },
        { name: 'josh3' },
        { name: 'josh4' },
        { name: 'josh5' },
        { name: 'josh6' },
        { name: 'josh7' },
        { name: 'josh8' },
        { name: 'josh9' },
        { name: 'josh10' },
        { name: 'josh11' },
        { name: 'josh12' },
        { name: 'josh13' },
        { name: 'josh14' },
        { name: 'josh15' }, 
        { name: 'josh1' },
        { name: 'josh2' },
        { name: 'josh3' },
        { name: 'josh3' },
        { name: 'josh4' },
        { name: 'josh5' },
        { name: 'josh6' },
        { name: 'josh7' },
        { name: 'josh8' },
        { name: 'josh9' },
        { name: 'josh10' },
        { name: 'josh11' },
        { name: 'josh12' },
        { name: 'josh13' },
        { name: 'josh14' },
        { name: 'josh15' }, 
        { name: 'josh1' },
        { name: 'josh2' },
        { name: 'josh3' },
        { name: 'josh3' },
        { name: 'josh4' },
        { name: 'josh5' },
        { name: 'josh6' },
        { name: 'josh7' },
        { name: 'josh8' },
        { name: 'josh9' },
        { name: 'josh10' },
        { name: 'josh11' },
        { name: 'josh12' },
        { name: 'josh13' },
        { name: 'josh14' },
        { name: 'josh15' },
    ];

    const toggleSelection = (hubby: Hobby): void => {
       
        const isSelected = selectedHubbies?.some((selected) => selected.name === hubby.name);
        if (isSelected) {
            setSelectedHubbies(selectedHubbies.filter((selected) => selected.name !== hubby.name));
        } else {
            setSelectedHubbies([...selectedHubbies, hubby]);
        }
    };

    return (
        <div
            className='hubby_content'
        >
            <h2>Interests</h2>
            <p>Share your interests with others to find like-minded people</p>

            <div className='choosen_content'>
                {hobbies?.map((hubby, index) => (
                    <div
                        key={index}
                        className={selectedHubbies.some((selected) => selected.name === hubby.name) ? 'hubby-button selected' : 'hubby-button'}
                        onClick={() => toggleSelection(hubby)}
                    >
                        {hubby.name}
                    </div>
                ))}
                {/* <div>
                    <h3>Selected Hubbies:</h3>
                    <ul>
                        {selectedHubbies.map((selected, index) => (
                            <li key={index}>{selected.name}</li>
                        ))}
                    </ul>
                </div> */}
            </div>
            <button onClick={onNext}>Continue</button>
        </div>
    )
}

export default Hubby;