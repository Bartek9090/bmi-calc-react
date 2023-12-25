import React, { useState, useEffect } from "react";
import "../index.css";

export default function CaloriesCalc({
  weight,
  height,
  age,
  gender,
  activity,
}) {
  const [bmr, setBmr] = useState(0);
  const [calories, setCalories] = useState(0);

  useEffect(() => {
    calculateBMR(weight, height, age, gender);
    dailyCaloriesUses(bmr, activity);
  }, [weight, height, age, gender, activity]);

  function dailyCaloriesUses(bmr, activity) {
    let caloriesMultiplier;

    switch (activity) {
      case "inactive":
        caloriesMultiplier = 1.2;
        break;
      case "somewhat active":
        caloriesMultiplier = 1.375;
        break;
      case "active":
        caloriesMultiplier = 1.55;
        break;
      case "very active":
        caloriesMultiplier = 1.725;
        break;
      default:
        caloriesMultiplier = 1.2; // Default to inactive if the activity is not recognized
    }

    setCalories((bmr * caloriesMultiplier).toFixed(0));
  }

  function calculateBMR(weight, height, age, gender) {
    let calculatedBmr;

    if (gender === "male") {
      calculatedBmr = 66 + 6.3 * weight + 12.9 * height - 6.8 * age;
    } else {
      calculatedBmr = 655 + 4.3 * weight + 4.7 * height - 4.7 * age;
    }

    setBmr(calculatedBmr.toFixed(2));
  }

  const renderActivityContainer = (label, multiplier) => {
    return (
      <div
        className={`calories__container ${activity === label ? "active" : ""}`}
      >
        <p className="calorie">Calories amount</p>
        <h4>{(bmr * multiplier).toFixed(0)} kcal</h4>
        <p>Activities level:</p>
        <p>{label}</p>
      </div>
    );
  };

  return (
    <div className="center">
      <h3>See how your daily calorie needs depend on your activity level:</h3>
      <div className="calories__container__main">
        {renderActivityContainer("inactive", 1.2)}
        {renderActivityContainer("somewhat active", 1.375)}
        {renderActivityContainer("active", 1.55)}
        {renderActivityContainer("very active", 1.725)}
      </div>
    </div>
  );
}
