import React, { ReactElement } from 'react';
import styles from './navbar.module.scss';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SwiggyLogo from 'images/Swiggy.svg';
import { unAuthenticateUser } from 'requests/authrequest';
import { useAppSelector } from 'config/hooks';

const Navbar = (): ReactElement => {
    const authState = useAppSelector((state) => state.user.isAuthenticated);

    return (
        <div className={styles.navBarWrapper}>
            <div className={styles.navBarLogo}>
                <img src={SwiggyLogo} alt="" />
            </div>
            {authState ? (
                <div className={styles.logoutContainer} onClick={unAuthenticateUser}>
                    <p>LogOut</p>
                    <ExitToAppIcon />
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

export default Navbar;
