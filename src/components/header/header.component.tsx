import helpIcon from "@assets/icons/help.svg";
import logo from "@assets/img/logo.svg";
import ProfileIcon from "../profile-icon/profile-icon.component";

import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.mainHeader}>
      <img src={logo} alt="Logo" className={styles.logo} draggable="false" />
      <div className={styles.headerContainer}>
        <span>Kanban Project Management Tool</span>
        <img src={helpIcon} alt="Help" draggable="false" />
        <ProfileIcon />
      </div>
    </header>
  );
};

export default Header;
