import React from 'react';

const Container = (props) => {
    return (
        <div className="container" { ...props }>{props.children}</div>
    );
}

const Row = (props) => {
    return (
        <div className="row" {...props}>{props.children}</div>
    );
}

const Col = (props) => {
    return (
        <div className="col" {...props}>{props.children}</div>
    );
}

export { Row, Col, Container };