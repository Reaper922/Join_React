import React from "react";

import { Link } from "react-router-dom";

import styles from "./nav-link.module.scss";

type NavLinkProps = {
  name: string;
  path: string;
  active: boolean;
  children?: React.ReactNode;
};

const NavLink = ({ name, path, active, children }: NavLinkProps) => {
  return (
    <>
      <Link
        to={path}
        className={[styles.navLink, active && styles.active].join(" ")}
        draggable="false"
      >
        {children &&
          React.Children.map(children, (child) =>
            child
              ? React.cloneElement(child as React.ReactElement, {
                  className: styles.svg,
                })
              : null
          )}
        <span>{name}</span>
      </Link>
    </>
  );
};

export default NavLink;
