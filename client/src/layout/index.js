import React from 'react';

const Container = (props) => {
    const { type, centered, wrap, className, padded, bottom } = props;
    let classes = (className || "") + " " + type + " ";
    classes += (centered ? "centered " : "");
    classes += (wrap ? "wrap " : "");
    classes += (padded ? "padded " : "");
    classes += (bottom ? "bottom " : "");

    return (
        <div  {...props} className={classes}>{props.children}</div>
    );
}

const Row = (props) => {
    return (
        <Container type="row" {...props}>{props.children}</Container>
    );
}

const Col = (props) => {
    return (
        <Container type="col" {...props}>{props.children}</Container>
    );
}

export { Row, Col, Container };