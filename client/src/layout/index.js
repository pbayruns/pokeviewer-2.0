import React from 'react';

const Container = (props) => {
    return (
        <div className="container" { ...props }>{props.children}</div>
    );
}

const Row = (props) => {
    const { centered, wrap, className } = props;
    let classes = className + " row ";
    classes += (centered ? "centered " : "");
    classes += (wrap ? "wrap " : "");

    return (
        <div  {...props} className={classes}>{props.children}</div>
    );
}

const Col = (props) => {
    const { centered, wrap, className } = props;
    let classes = className + " col ";
    classes += (centered ? "centered " : "");
    classes += (wrap ? "wrap " : "");
    return (
        <div  {...props} className={classes}>{props.children}</div>
    );
}

export { Row, Col, Container };