import { Link } from "react-router-dom";

import helpIcon from "@assets/icons/help.svg";
import Logo from "@assets/img/logo.svg?react";
import ProfileIcon from "../profile-icon/profile-icon.component";

import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.mainHeader}>
      <Logo className={styles.logo} />
      {/* <img src={logo} alt="Logo" className={styles.logo} draggable="false" /> */}
      <div className={styles.headerContainer}>
        <span>Kanban Project Management Tool</span>
        <Link to={"/help"} draggable="false">
          <img src={helpIcon} alt="Help" draggable="false" />
        </Link>
        <Link to={"/"} draggable="false">
          <ProfileIcon />
        </Link>
      </div>
    </header>
  );
};

export default Header;
