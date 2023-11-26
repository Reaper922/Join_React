import styles from "./button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className={[styles.button, styles.primary].join(" ")}>
      {children}
    </button>
  );
};

export default Button;
