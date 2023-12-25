export default function DisplayImg({ bmi, gender }) {
  let imgSrc;
  if (bmi >= 20 && bmi < 25) {
    imgSrc =
      gender === "Female"
        ? require("../assets/img/healthy-women.webp")
        : require("../assets/img/healthy-man.webp");
  } else if (bmi >= 25.1) {
    imgSrc =
      gender === "Female"
        ? require("../assets/img/overweight-women.webp")
        : require("../assets/img/overweight-man.webp");
  } else if (bmi > 1) {
    imgSrc =
      gender === "Female"
        ? require("../assets/img/underweight-women.webp")
        : require("../assets/img/underweight-man-no-sentence.webp");
  }
  return (
    <div className="center__img">
      <img src={imgSrc} alt="icon of people"></img>
    </div>
  );
}
