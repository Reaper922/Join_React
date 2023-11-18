import NavLink from "../nav-link/nav-link.component";

import styles from "./sidenav.module.scss";

const navigationLinks = [
  {
    name: "Summary",
    path: "/summary",
    icon: "./src/assets/icons/summary.svg",
  },
  {
    name: "Board",
    path: "/board",
    icon: "./src/assets/icons/board.svg",
  },
  {
    name: "Add Task",
    path: "/task",
    icon: "./src/assets/icons/task.svg",
  },
  {
    name: "Contacts",
    path: "/contacts",
    icon: "./src/assets/icons/contacts.svg",
  },
  {
    name: "Privacy Policy",
    path: "/privacy-policy",
    // icon: "./src/assets/icons/info.svg",
  },
  {
    name: "Legal Notice",
    path: "/legal-notice",
    // icon: "./src/assets/icons/info.svg",
  },
];

const Sidenav = () => {
  return (
    <section className={styles.sidenav}>
      <nav className={styles.navigation}>
        <ul>
          {navigationLinks.map(({ name, path, icon }) => {
            return (
              <li key={name}>
                <NavLink name={name} path={path} icon={icon} />
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default Sidenav;
