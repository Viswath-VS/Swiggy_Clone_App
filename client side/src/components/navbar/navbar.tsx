import React, { useState } from 'react';
import styles from './navbar.module.scss';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import SwiggyLogo from 'images/Swiggy.svg';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         root: {
//             flexGrow: 1,
//             backgroundColor: '#fcfcfc',
//         },
//         menuButton: {
//             marginRight: theme.spacing(2),
//             // width: '70%',
//             // height: '70%',
//         },
//         title: {
//             flexGrow: 1,
//         },
//     }),
// );

const Navbar = () => {
    return (
        <div className={styles.navBarWrapper}>
            <div className={styles.navBarLogo}>
                <img src={SwiggyLogo} alt="" />
            </div>
        </div>
    );
};

export default Navbar;
