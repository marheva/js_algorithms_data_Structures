import React from 'react';
import { withRouter } from 'react-router-dom';
import AppMenu from '../AppMenu/AppMenu';

interface HeaderMenuProps {
    history: { location: { pathname: string }; push: (arg0: string) => void };
}
export interface MenuItem {
    title: string | JSX.Element;
    linkTo: string;
    disabled: boolean;
    render: boolean;
}

const TITLE: { [arg: string]: string } = {
    HOME: 'Home',
    BIG_O: 'BigO',
    PROBLEM_APPROACH: 'Problem solving approach',
    PROBLEM_PATTERNS: 'Problem solving patterns',
    RECURSION: 'Recursion',
    SEARCH: 'Search',
};

function AppHeader({ history }: HeaderMenuProps) {
    const appMenuItems: MenuItem[] = [
        {
            title: TITLE.BIG_O,
            linkTo: '/bigo',
            disabled: false,
            render: true,
        },
        {
            title: TITLE.PROBLEM_APPROACH,
            linkTo: '/problemApproach',
            disabled: false,
            render: true,
        },
        {
            title: TITLE.PROBLEM_PATTERNS,
            linkTo: '/problemPatterns',
            disabled: false,
            render: true,
        },
        {
            title: TITLE.RECURSION,
            linkTo: '/recursion',
            disabled: false,
            render: true,
        },
    ];

    return (
        <div>
            <div>
                <AppMenu history={history} menuItems={appMenuItems} />
            </div>
        </div>
    );
}

export default withRouter(AppHeader);
