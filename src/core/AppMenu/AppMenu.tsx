import React from 'react';
import { Link } from 'react-router-dom';
import isActiveMenuItem from '../Header/helpers/isActiveMenuItem';

interface AppMenuProps {
    history: { location: { pathname: string }; push: (arg0: string) => void };
    menuItems: any;
}

function AppMenu({ menuItems, history }: AppMenuProps) {
    return (
        <ul>
            {menuItems?.map(
                (item: any) =>
                    item.render && (
                        <li key={item.linkTo}>
                            <Link
                                style={{
                                    color: isActiveMenuItem(
                                        history,
                                        item.linkTo
                                    )
                                        ? 'red'
                                        : 'blue',
                                }}
                                to={item.linkTo}
                            >
                                {item.title}
                            </Link>
                        </li>
                    )
            )}
        </ul>
    );
}

export default AppMenu;
