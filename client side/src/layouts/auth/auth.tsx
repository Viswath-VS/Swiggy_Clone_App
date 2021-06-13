import React, { ReactElement } from 'react';
import styles from './auth.module.scss';
import Navbar from 'components/navbar/navbar';
import { TextField, Button } from '@material-ui/core';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ROUTES } from 'config/routes';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            backgroundColor: '#f9802d',
            color: '#fff',
            '&:hover': {
                color: '#212529',
            },
        },
    }),
);

const Auth = () => {
    const classes = useStyles();
    return (
        <div className={styles.authWrapper}>
            <Navbar />
            <div className={styles.authCoreContainer}>
                <div className={styles.loginContainer}>
                    <div className={styles.loginTitle}>
                        <h3>Login with Your Registered Email.</h3>
                    </div>
                    <div className={styles.loginBox}>
                        <TextField id="standard-basic" label="Email ID" />
                        <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" />
                        <Button onClick={() => {}} variant="contained" className={classes.button}>
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
