export default function Button({ buttonType, children, handleOnClick }) {
  return (
    <button
      className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
}
