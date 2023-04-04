// Components
import HomePage from '@containers/HomePage';
import PeoplePage from '@containers/PeoplePage';
import VehiclesPage from "@containers/VehiclesPage"; 
import NotFoundPage from "@containers/NotFoundPage";
import PersonPage from '@containers/PersonPage/PersonPage';

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
    },
    {
        path: '/people/:id',
        exact: true,
        element: <PersonPage/>
    },
    {
        path: '*',
        exact: false,
        element: <NotFoundPage/>
    }
]