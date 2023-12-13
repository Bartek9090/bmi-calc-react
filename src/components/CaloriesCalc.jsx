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
    let calculatedCalories;
    if (activity === "inactive") {
      calculatedCalories = bmr * 1.2;
    } else if (activity === "somewhat active") {
      calculatedCalories = bmr * 1.375;
    } else if (activity === "active") {
      calculatedCalories = bmr * 1.55;
    } else {
      calculatedCalories = bmr * 1.725;
    }
    setCalories(calculatedCalories.toFixed(0));
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

  return (
    <>
      <div className="center">
        <h3>See how your daily calorie needs depend on your activity level:</h3>
        <div className="calories__container__main">
          <div
            className={`calories__container ${
              activity === "inactive" ? "active" : ""
            }`}
          >
            <p className="calorie">Calories amount</p>
            <h4>{(bmr * 1.2).toFixed(0)} kcal</h4>
            <p>Activities level:</p>
            <p>Inactive</p>
          </div>
          <div
            className={`calories__container ${
              activity === "somewhat active" ? "active" : ""
            }`}
          >
            <p className="calorie">Calories amount</p>
            <h4>{(bmr * 1.375).toFixed(0)} kcal</h4>
            <p>Activities level:</p>
            <p>Somewhat Active</p>
          </div>
          <div
            className={`calories__container ${
              activity === "active" ? "active" : ""
            }`}
          >
            <p className="calorie">Calories amount</p>
            <h4>{(bmr * 1.55).toFixed(0)} kcal</h4>
            <p>Activities level:</p>
            <p>Active</p>
          </div>
          <div
            className={`calories__container ${
              activity === "very active" ? "active" : ""
            }`}
          >
            <p className="calorie">Calories amount</p>
            <h4>{(bmr * 1.725).toFixed(0)} kcal</h4>
            <p>Activities level:</p>
            <p>VeryActive</p>
          </div>
        </div>
      </div>
    </>
  );
}
