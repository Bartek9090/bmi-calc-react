import "../index.css";

export default function ReloadBtn() {
  let reload = () => {
    window.location.reload();
  };

  return (
    <button className="btn" onClick={reload}>
      Clear
    </button>
  );
}
