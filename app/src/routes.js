
import LandingPage from './Pages/LandingPage';
import NotFoundPage from './Pages/NotFoundPage';
import PokemonListPage from './Pages/PokemonListPage';
import PokemonDetailPage from './Pages/PokemonListPage';
import TypeListPage from './Pages/TypeListPage';

//Constants for pages to be used across any page that has routes or redirects
export const ROUTES = {
    LANDING: {
        URL: '/',
        DISPLAY_NAME: 'Landing Page',
        COMPONENT: LandingPage,
        IS_EXACT: true,
        IS_NAV: false
    },
    POKEMON_LIST: {
        URL: '/pokemon/',
        DISPLAY_NAME: 'Pokemon List',
        COMPONENT: PokemonListPage,
        IS_EXACT: true,
        IS_NAV: false
    },
    POKEMON_DETAIL: {
        URL: '/pokemon/:id',
        DISPLAY_NAME: 'Pokemon Detail',
        COMPONENT: PokemonDetailPage,
        IS_EXACT: true,
        IS_NAV: false
    },
    TYPES: {
        URL: '/type/',
        DISPLAY_NAME: 'Type List',
        COMPONENT: TypeListPage,
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