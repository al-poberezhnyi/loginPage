import React from 'react';
import { Link, NavLink } from 'react-router';

import styles from './Header.module.scss';

function Header () {
    return (
        <header className={styles.mainHeader}>
            <div>LOGO</div>
            <nav className={styles.menu}>
                <NavLink to='/'>Home</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Projects</NavLink>
                <NavLink>Contacts</NavLink>
            </nav>
            <Link to='/login'>Sign up</Link>
        </header>
    );
}

export default Header;
