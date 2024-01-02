import React, { useState, useRef } from "react";
import "./index.css";
import CaloriesCalc from "./components/CaloriesCalc";
import BmiCalc from "./components/BmiCalc";
import ReloadBtn from "./components/ReloadBtn";

const genderOptions = [
  { value: "", label: "--Choose an option--" },
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];
const activityOptions = [
  { value: "", label: "--Choose an option--" },
  { value: "inactive", label: "Inactive" },
  { value: "somewhat active", label: "Somewhat active" },
  { value: "active", label: "Active" },
  { value: "very active", label: "Very active" },
];

const initialValidationErrors = {
  weight: false,
  height: false,
  age: false,
  gender: false,
  activity: false,
};

export default function App() {
  const [formData, setFormData] = useState({
    weight: "",
    height: "",
    age: "",
    gender: "",
    activity: "",
  });

  const [displayBmiCalc, setDisplayBmiCalc] = useState(false);
  const [displayCaloriesCalc, setDisplayCaloriesCalc] = useState(false);
  const [validationErrors, setValidationErrors] = useState(
    initialValidationErrors
  );
  const bmiCalcRef = useRef(null);

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
    setValidationErrors({
      ...validationErrors,
      [field]: false,
    });
  };

  const validateInputs = () => {
    const errors = {
      weight:
        formData.weight.trim() === "" ||
        formData.weight < 40 ||
        formData.weight > 230,
      height:
        formData.height.trim() === "" ||
        formData.height < 50 ||
        formData.height > 250,
      age: formData.age === "" || formData.age < 15 || formData.age > 120,
      gender: formData.gender !== "Male" && formData.gender !== "Female",
    };

    setValidationErrors(errors);
    return !Object.values(errors).some((error) => error);
  };

  const handleButtonClick = () => {
    if (!validateInputs()) {
      return;
    }

    setDisplayBmiCalc(true);
    setDisplayCaloriesCalc(true);

    if (bmiCalcRef.current) {
      bmiCalcRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app">
      <div className="main-container">
        <h1>BMI Calculator</h1>
        <p className="paragraphs-style">
          Use the app to estimate the number of daily calories your body needs
          to maintain your current weight and what is the value of your BMI.
        </p>
        <form>
          <div
            className={`input-container ${validationErrors.age ? "error" : ""}`}
          >
            <div className="label-info-container">
              <label htmlFor="age">Age</label>
              <p
                className={`input-info ${
                  validationErrors.age ? "error-info" : ""
                }`}
              >
                (Valid range: 15 - 120)
              </p>
            </div>
            <input
              id="age"
              type="number"
              value={formData.age}
              onChange={(e) => handleInputChange("age", e.target.value)}
              className={validationErrors.age ? "error-border" : ""}
            />
          </div>

          <div
            className={`input-container ${
              validationErrors.weight ? "error" : ""
            }`}
          >
            <div className="label-info-container">
              <label htmlFor="weight">Weight</label>
              <p
                className={`input-info ${
                  validationErrors.weight ? "error-info" : ""
                }`}
              >
                (Valid range: 40 - 230)
              </p>
            </div>
            <input
              id="weight"
              type="number"
              value={formData.weight}
              onChange={(e) => handleInputChange("weight", e.target.value)}
              className={validationErrors.weight ? "error-border" : ""}
            />
          </div>

          <div
            className={`input-container ${
              validationErrors.height ? "error" : ""
            }`}
          >
            <div className="label-info-container">
              <label htmlFor="height">Height</label>
              <p
                className={`input-info ${
                  validationErrors.height ? "error-info" : ""
                }`}
              >
                (Valid range: 50 - 250)
              </p>
            </div>
            <input
              id="height"
              type="number"
              value={formData.height}
              onChange={(e) => handleInputChange("height", e.target.value)}
              className={validationErrors.height ? "error-border" : ""}
            />
          </div>

          <div
            className={`input-container ${
              validationErrors.gender ? "error" : ""
            }`}
          >
            <div className="label-info-container">
              <label htmlFor="gender">Gender</label>
              <p
                className={`input-info ${
                  validationErrors.gender ? "error-info" : ""
                }`}
              >
                (Select your gender)
              </p>
            </div>
            <select
              id="gender"
              value={formData.gender}
              onChange={(e) => handleInputChange("gender", e.target.value)}
              className={validationErrors.gender ? "error-border" : ""}
            >
              {genderOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  disabled={option.value === ""}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="activity">Activity level</label>
            <select
              id="activity"
              type="text"
              value={formData.activity}
              onChange={(e) => handleInputChange("activity", e.target.value)}
              className={validationErrors.activity ? "error-border" : ""}
            >
              <option disabled value="">
                --Choose an option--
              </option>
              <option value="inactive">Inactive</option>
              <option value="somewhat active">Somewhat active</option>
              <option value="active">Active</option>
              <option value="very active">Very active</option>
            </select>
          </div>
        </form>
        <button className="btn" onClick={handleButtonClick}>
          Submit
        </button>
        <ReloadBtn />
        {displayBmiCalc && (
          <BmiCalc
            ref={bmiCalcRef}
            weight={formData.weight}
            height={formData.height}
            age={formData.age}
            gender={formData.gender}
            display={displayBmiCalc}
          />
        )}

        {displayCaloriesCalc && (
          <CaloriesCalc
            weight={formData.weight}
            height={formData.height}
            age={formData.age}
            gender={formData.gender}
            activity={formData.activity}
          />
        )}
      </div>
    </div>
  );
}
