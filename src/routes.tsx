import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import GamesPage from "./pages/GamesPage";
import CustomersPage from "./pages/CustomersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <GamesPage />,
      },
      {
        path: "customers",
        element: <CustomersPage />,
      },
    ],
  },
]);

export default router;
