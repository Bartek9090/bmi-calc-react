import React, { useState, useEffect } from "react";
import "../index.css";
import DisplayImg from "./DisplayImg";

export default function BmiCalc({ weight, height, age, gender, display }) {
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  const [displayBmi, setDisplayBmi] = useState(false);

  useEffect(() => {
    const calculateBmi = () => {
      if (
        weight.trim() === "" ||
        weight <= 40 ||
        weight > 230 ||
        height.trim() === "" ||
        height <= 50 ||
        height > 250 ||
        age === "" ||
        age <= 15 ||
        age > 150 ||
        gender === ""
      ) {
        alert("Please provide valid inputs.");
        return;
      }

      const heightInMeters = height / 100;
      const calculatedBmi = weight / (heightInMeters * heightInMeters);
      const roundedBmi = Math.round(calculatedBmi);

      setBmi(roundedBmi);
      setDisplayBmi(true);

      if (calculatedBmi < 20) {
        setMessage("You are underweight");
      } else if (calculatedBmi >= 20 && calculatedBmi < 25) {
        setMessage("You are a healthy weight");
      } else {
        setMessage("You are overweight");
      }
    };

    calculateBmi();
  }, [weight, height, age, gender]);

  return (
    <div>
      {display && (
        <div className="center">
          {displayBmi && (
            <>
              <h3>Your BMI is: {bmi} </h3>
              <p className="paragraphs-style">{message}</p>
              {bmi !== 0 && <DisplayImg bmi={bmi} gender={gender} />}
            </>
          )}
        </div>
      )}
    </div>
  );
}
