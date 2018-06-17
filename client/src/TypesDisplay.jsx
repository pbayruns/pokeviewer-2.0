import React from 'react';

import TypeIcon from 'TypeIcon';
import { Row } from 'layout';

export default function TypesDisplay(props) {
    let { types, centered } = props;
    return <Row centered>
        {
            types.map(
                (type, i) => {
                    return <TypeIcon key={i} type={type} />;
                }
            )
        }
    </Row>
}