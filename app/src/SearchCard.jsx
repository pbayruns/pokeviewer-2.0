import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Autocomplete from './Autocomplete';


export default class SimpleCard extends React.Component {

    render() {
        return (
            <Card>
                <CardContent>
                    <Autocomplete/>
                </CardContent>
                <CardActions>
                    Howdy
                </CardActions>
            </Card>
        )
    }
}