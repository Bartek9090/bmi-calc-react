import { useState } from "react";
import "./index.css";
import CaloriesCalc from "./components/CaloriesCalc";
import BmiCalc from "./components/BmiCalc";
import ReloadBtn from "./components/ReloadBtn";

export default function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [activity, setActivity] = useState("");

  const [displayBmiCalc, setDisplayBmiCalc] = useState(false);
  const [displayCaloriesCalc, setDisplayCaloriesCalc] = useState(false);

  const handleButtonClick = () => {
    setDisplayBmiCalc(true);
    setDisplayCaloriesCalc(true);
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
          <div>
            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="weight">Weight</label>
            <input
              id="weight"
              type="number"
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="height">Height</label>
            <input
              id="height"
              type="number"
              value={height}
              onChange={(e) => {
                setHeight(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              type="text"
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <option disabled={false} value="">
                --Choose and option--
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <label htmlFor="activity">Activity level</label>
            <select
              id="activity"
              type="text"
              value={activity}
              onChange={(e) => {
                setActivity(e.target.value);
              }}
            >
              <option disabled={false} value="">
                --Choose and option--
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
            weight={weight}
            height={height}
            age={age}
            gender={gender}
            display={displayBmiCalc}
          />
        )}

        {displayCaloriesCalc && (
          <CaloriesCalc
            weight={weight}
            height={height}
            age={age}
            gender={gender}
            activity={activity}
            display={displayCaloriesCalc}
          />
        )}
      </div>
    </div>
  );
}
