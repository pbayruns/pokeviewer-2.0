import React from 'react';
import { Link } from 'react-router-dom';
import routes from 'routes';
import Button from '@material-ui/core/Button';
import Sitebar from 'Sitebar';

import { Row } from 'layout';

export default class NotFoundPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Sitebar />
                <Row>
                    <h1 className="no-select">404 - Page Not Found</h1>
                </Row>
                <Row>
                    <Button component={Link} to={routes.LANDING.URL} label="Back to home" />
                </Row>
            </React.Fragment>
        );
    }
}