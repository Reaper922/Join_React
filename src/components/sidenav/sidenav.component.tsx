import { useLocation } from "react-router-dom";
import NavLink from "../nav-link/nav-link.component";

import SummaryIcon from "@assets/icons/summary.svg?react";
import BoardIcon from "@assets/icons/board.svg?react";
import TaskIcon from "@assets/icons/task.svg?react";
import ContactsIcon from "@assets/icons/contacts.svg?react";

import styles from "./sidenav.module.scss";

const navigationLinks = [
  {
    name: "Summary",
    path: "/summary",
    icon: <SummaryIcon />,
  },
  {
    name: "Board",
    path: "/board",
    icon: <BoardIcon />,
  },
  {
    name: "Add Task",
    path: "/task",
    icon: <TaskIcon />,
  },
  {
    name: "Contacts",
    path: "/contacts",
    icon: <ContactsIcon />,
  },
  {
    name: "Privacy Policy",
    path: "/privacy-policy",
  },
  {
    name: "Legal Notice",
    path: "/legal-notice",
  },
];

const Sidenav = () => {
  const location = useLocation();

  return (
    <section className={styles.sidenav}>
      <nav className={styles.navigation}>
        <ul>
          {navigationLinks.map(({ name, path, icon }) => {
            const isActive = path === location.pathname;

            return (
              <li key={name}>
                <NavLink name={name} path={path} active={isActive}>
                  {icon}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default Sidenav;
