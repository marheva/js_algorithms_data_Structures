import React from 'react';

interface MainProps {
    children?: JSX.Element;
}

function Main({ children }: MainProps): JSX.Element {
    return <div>{!!children && children}</div>;
}

export default Main;
