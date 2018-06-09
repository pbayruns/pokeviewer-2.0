import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes.js';
import Button from '@material-ui/core/Button';
import Sitebar from '../Sitebar';

export default function LandingPage(props) {

    return (
        <React.Fragment>
            <Sitebar />
            <h1>Welcome to Pokeviewer</h1>
        </React.Fragment>
    );
}