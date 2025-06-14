import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const nextStep = () => {
    if (step < messages.length) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <>
      <button
        className="close"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        {isOpen ? `x` : "+"}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#034694", color: "white" }}
              onClick={() => prevStep()}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#034694", color: "white" }}
              onClick={() => nextStep()}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
