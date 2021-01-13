import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
interface LayoutProps {
    children?: JSX.Element | any;
}

function Layout({ children }: LayoutProps): JSX.Element {
    return (
        <div>
            <Header />
            <Main children={children} />
        </div>
    );
}

export default withRouter(Layout);
