import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from './routes';


export default function TypeIcon(props) {
    let { type } = props;
    return <Link to={ROUTES.TYPES.URL + type.id} className={"type-display type-" + type.identifier}>{type.identifier.toUpperCase()}</Link>
}