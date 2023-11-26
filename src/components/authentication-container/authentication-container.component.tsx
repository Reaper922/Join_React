import styles from "./authentication-container.module.scss";

type AuthContainerProps = {
  children: React.ReactNode;
};

const AuthenticationContainer = ({ children }: AuthContainerProps) => {
  return <div className={styles.authContainer}>{children}</div>;
};

export default AuthenticationContainer;
