import React, { useState } from "react";
import "../index.css";
import DisplayImg from "./DisplayImg";

export default function BmiCalc({ weight, height, age, gender, display }) {
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  const [displayBmi, setDisplayBmi] = useState(false);

  const calculateBmi = () => {
    if (
      weight.trim() === "" ||
      height === "" ||
      age === "" ||
      age > 115 ||
      gender === ""
    ) {
      alert("Your inputs are incorrect");
      return;
    }

    let heightInMeters = height / 100;
    let calculatedBmi = weight / (heightInMeters * heightInMeters);
    let roundedBmi = calculatedBmi.toFixed(0);

    setBmi(roundedBmi);
    setDisplayBmi(true);

    if (calculatedBmi < 25) {
      setMessage("You are underweight");
    } else if (calculatedBmi >= 25 && calculatedBmi < 30) {
      setMessage("You are a healthy weight");
    } else {
      setMessage("You are overweight");
    }
  };

  // Call calculateBmi on component mount
  React.useEffect(() => {
    calculateBmi();
  }, []);

  return (
    <div>
      {display && (
        <div className="center">
          {displayBmi && (
            <>
              <h3>Your BMI is: {bmi} </h3>
              <p className="paragraphs-style">{message}</p>
              {bmi === "0" ? null : <DisplayImg bmi={bmi} gender={gender} />}
            </>
          )}
        </div>
      )}
    </div>
  );
}
