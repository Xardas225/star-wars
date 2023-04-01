// Components
import HomePage from '@containers/HomePage';
import PeoplePage from '@containers/PeoplePage';
import VehiclesPage from "@containers/VehiclesPage"; 

export const routes = [
    {
        path: '/',
        exact: true,
        element: <HomePage/>
    },
    {
        path: '/vehicles',
        exact: true,
        element: <VehiclesPage/>
    },
    {
        path: '/people',
        exact: true,
        element: <PeoplePage/>
    }
]