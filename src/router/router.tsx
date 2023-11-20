import { createBrowserRouter } from "react-router-dom";

import Authentication from "../pages/authentication/authentication.component";
import AppLayout from "../layouts/app-layout/app-layout.component";
import Board from "../pages/board/board.component";
import Contacts from "../pages/contacts/contacts.component";
import Error from "../pages/error/error.component";
import Help from "../pages/help/help.component";
import LegalNotice from "../pages/legal-notice/legal-notice.component";
import PrivacyPolicy from "../pages/privacy-policy/privacy-policy.component";
import Summary from "../pages/summary/summary.component";
import Task from "../pages/task/task.component";

const appRoutes = [
  {
    path: "/",
    element: <Authentication />,
    errorElement: <Error />,
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: "/summary",
        element: <Summary />,
      },
      {
        path: "/board",
        element: <Board />,
      },
      {
        path: "/task",
        element: <Task />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/legal-notice",
        element: <LegalNotice />,
      },
    ],
  },
];

export const router = createBrowserRouter(appRoutes);
