import { Link } from "react-router-dom";

// import Logo from "@assets/icons/summary.svg?react";

import styles from "./nav-link.module.scss";

type navLinkProps = {
  name: string;
  path: string;
  icon?: string;
};

const NavLink = ({ name, path, icon }: navLinkProps) => {
  return (
    <Link to={path} className={styles.navLink} draggable="false">
      {icon && <img src={icon} alt={`${name} Icon`} draggable="false" />}
      <span>{name}</span>
    </Link>
  );
};

export default NavLink;
