import CreatePage from "../pages/CreatePage";
import HomePage from "../pages/HomePage";

const routes = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/create',
        element: <CreatePage />,
    },
]
export default routes;