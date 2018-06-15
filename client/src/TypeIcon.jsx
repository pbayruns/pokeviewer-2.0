import React from 'react';
import { Link } from 'react-router-dom';

import routes from 'routes';


export default function TypeIcon(props) {
    let { type } = props;
    return <Link to={routes.TYPES.URL + type.id} className={"type-display type-" + type.identifier}>{type.identifier.toUpperCase()}</Link>
}