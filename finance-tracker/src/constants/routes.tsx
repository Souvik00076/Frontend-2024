import { Login, SignUp } from "../components/auth";
import { AuthContainer, DashboardContainer } from "../pages";

export const routes = [
  {
    path: "auth",
    element: <AuthContainer />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/",
    element: <DashboardContainer />,
  },
];

//localhost:3000/auth
//localhost:3000/auth/login
//localhost:3000/auth/sign-up
