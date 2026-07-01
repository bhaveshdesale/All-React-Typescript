interface ButtonProps {
  onClick: () => void;
}

function Button({
  onClick,
}: ButtonProps) {
  return (
    <button onClick={onClick}>
      Search
    </button>
  );
}

export default Button;

