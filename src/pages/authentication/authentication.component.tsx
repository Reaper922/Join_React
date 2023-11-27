import { useState } from "react";

import AuthenticationContainer from "../../components/authentication-container/authentication-container.component";
import LoginForm from "../../components/login-form/login-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up.component";

import { formState } from "../../types/formState.type";

import styles from "./authentication.module.scss";

type AuthComponentType = {
  [key in formState]: JSX.Element;
};

const Authentication = () => {
  const [formState, setFormState] = useState<formState>("login");

  const authComponentMap: AuthComponentType = {
    login: <LoginForm />,
    signup: <SignUpForm />,
    password: <h1>Password</h1>,
  };

  return (
    <div className={styles.container}>
      <AuthenticationContainer>
        {authComponentMap[formState]}
      </AuthenticationContainer>
    </div>
  );
};

export default Authentication;
