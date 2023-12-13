export default function DisplayImg({ bmi, gender }) {
  let imgSrc;
  // play with img and gender
  if (gender === "Female") {
    if (bmi < 1) {
      imgSrc = null;
    } else {
      if (bmi < 25) {
        imgSrc = require("../assets/img/underweight-women.webp");
      } else if (bmi >= 25 && bmi < 30) {
        imgSrc = require("../assets/img/healthy-women.webp");
      } else {
        imgSrc = require("../assets/img/overweight-women.webp");
      }
    }
  } else {
    if (bmi < 1) {
      imgSrc = null;
    } else {
      if (bmi < 25) {
        imgSrc = require("../assets/img/underweight-man-no-sentence.webp");
      } else if (bmi >= 25 && bmi < 30) {
        imgSrc = require("../assets/img/healthy-man.webp");
      } else {
        imgSrc = require("../assets/img/overweight-man.webp");
      }
    }
  }
  return (
    <div className="center__img">
      <img src={imgSrc} alt="icon of people"></img>
    </div>
  );
}
