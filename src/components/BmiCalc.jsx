// BmiCalc.jsx
import React, { useState, useEffect, forwardRef } from "react";
import "../index.css";
import DisplayImg from "./DisplayImg";

const BmiCalc = forwardRef(({ weight, height, age, gender, display }, ref) => {
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  const [displayBmi, setDisplayBmi] = useState(false);

  useEffect(() => {
    const calculateBmi = () => {
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
  }, [weight, height, age, gender, display]);

  useEffect(() => {
    if (displayBmi && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [displayBmi, ref]);

  return (
    <div ref={ref}>
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
});

export default BmiCalc;
