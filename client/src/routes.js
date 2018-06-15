import { LandingPage, NotFoundPage, PokemonListPage, PokemonDetailPage, TypeListPage } from 'pages';

//Constants for pages to be used across any page that has routes or redirects
const ROUTES = {
    LANDING: {
        URL: '/',
        DISPLAY_NAME: 'Landing Page',
        COMPONENT: LandingPage,
        IS_EXACT: true,
        IS_NAV: false
    },    
    POKEMON_DETAIL: {
        URL: '/pokemon/:id',
        BASE_URL: '/pokemon/',
        DISPLAY_NAME: 'Pokemon Detail',
        COMPONENT: PokemonDetailPage,
        IS_EXACT: false,
        IS_NAV: false
    },
    POKEMON_LIST: {
        URL: '/pokemon-list/',
        DISPLAY_NAME: 'Pokemon List',
        COMPONENT: PokemonListPage,
        IS_EXACT: true,
        IS_NAV: false
    },
    ABILITY_DETAIL: {
        URL: '/ability/:id',
        BASE_URL: '/ability/',
        DISPLAY_NAME: 'Ability Detail',
        COMPONENT: PokemonDetailPage,
        IS_EXACT: false,
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

export default ROUTES;