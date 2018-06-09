import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes.js';
import Button from '@material-ui/core/Button';
import Sitebar from '../Sitebar';

export default class NotFoundPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Sitebar />
                <div className="row row-spaced justify-content-center text-center">
                    <h1 className="no-select">404 - Page Not Found</h1>
                </div>
                <div className="row justify-content-center">
                    <Button component={Link} to={ROUTES.LANDING.URL} label="Back to home" />
                </div>
            </React.Fragment>
        );
    }
}