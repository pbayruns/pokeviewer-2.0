
import LandingPage from './Pages/LandingPage';
import NotFoundPage from './Pages/NotFoundPage';


//Constants for pages to be used across any page that has routes or redirects
export const ROUTES = {
    LANDING: {
        URL: '/',
        DISPLAY_NAME: 'Landing Page',
        COMPONENT: LandingPage,
        IS_EXACT: true,
        IS_NAV: false
    },
    NOT_FOUND: {
        URL: '*',
        DISPLAY_NAME: 'File Not Found',
        COMPONENT: NotFoundPage,
        IS_EXACT: true,
        IS_NAV: false
    }
}