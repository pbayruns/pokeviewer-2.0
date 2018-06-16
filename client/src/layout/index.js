import React from 'react';

const Container = (props) => {
    return (
        <div className="container" { ...props }>{props.children}</div>
    );
}

const Row = (props) => {
    const { centered, wrap } = props;
    let classes = "row ";
    classes += (centered ? "centered " : "");
    classes += (wrap ? "wrap " : "");

    return (
        <div className={classes} {...props}>{props.children}</div>
    );
}

const Col = (props) => {
    return (
        <div className="col" {...props}>{props.children}</div>
    );
}

export { Row, Col, Container };