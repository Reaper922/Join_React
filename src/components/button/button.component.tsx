import styles from "./button.module.scss";

type ButtonProps = {
  style: "primary" | "secondary";
  type?: "button" | "submit";
  onClick?: () => void;
  children: React.ReactNode;
};

const Button = ({ type, style, onClick, children }: ButtonProps) => {
  const typeStyling = style === "primary" ? styles.primary : styles.secondary;

  return (
    <button
      className={[styles.button, typeStyling].join(" ")}
      type={type ? type : "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
