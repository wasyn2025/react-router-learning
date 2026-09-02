import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardEmployeePage from "./components/DashboardEmployeePage";
import DashboardHomePage from "./components/DashboardHomePage";

const router = createBrowserRouter([
    { index: true, Component: Home },
    { path: '/login', Component: Login },
    {
        path: '/dashboard/:username?',
        Component: DashboardLayout,
        children: [
            { index: true, Component: DashboardHomePage },
            { path: 'employee/:username?', Component: DashboardEmployeePage }
        ]
    }
]);

export default router;