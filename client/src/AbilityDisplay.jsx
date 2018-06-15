import React from 'react';
import { Link } from 'react-router-dom';

import routes from 'routes';


export default function AbilityDisplay(props) {
    let { ability } = props;
    return (
        <li class="list-group-item justify-content-between">
            <Link to={routes.ABILITY_DETAIL.BASE_URL + ability.id}>
                {ability.identifier}
            </Link>
            {
                !ability.is_hidden && <span class="badge badge-default badge-pill">Hidden</span>

            }
        </li >
    );
}