import { Outlet } from "react-router-dom";

import Header from "../../components/header/header.component";
import Sidenav from "../../components/sidenav/sidenav.component";

import styles from "./app-layout.module.scss";

const AppLayout = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidenav />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AppLayout;
