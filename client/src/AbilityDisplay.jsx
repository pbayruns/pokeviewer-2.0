import React from 'react';
import { Link } from 'react-router-dom';

import routes from 'routes';
import { Button, ListItem, ListItemText } from '@material-ui/core';

export default function AbilityDisplay(props) {
    let { ability } = props;
    return (
        <React.Fragment>
            <Button component={Link} to={routes.ABILITY_DETAIL.BASE_URL + ability.id} >
                <span className="capitalize bold">{ability.identifier}</span>
            </Button>
            {ability.is_hidden ? '(Hidden)' : null}
        </React.Fragment>
    );
}