import React, { ReactElement, useState } from 'react';
import styles from './auth.module.scss';
import Navbar from 'components/navbar/navbar';
import Signin from 'pages/signin/signin';
import { TextField, Button } from '@material-ui/core';
import { Redirect, Route, Switch, Link } from 'react-router-dom';
import { ROUTES } from 'config/routes';
import axiosConfig from 'config/axiosconfig';
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
    const [userNameOrEmail, setUserNameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    // function to login.
    const handleLogin = () => {};

    return (
        <div className={styles.authWrapper}>
            <Navbar />
            <div className={styles.authCoreContainer}>
                <div className={styles.loginContainer}>
                    <Switch>
                        <Route path={ROUTES.AUTH_SIGN_IN}>
                            <Signin />
                        </Route>
                        <Route path={ROUTES.AUTH}>
                            <div className={styles.loginTitle}>
                                <h3>Login with Your Registered Email.</h3>
                            </div>
                            <div className={styles.loginBox}>
                                <TextField
                                    id="standard-basic"
                                    label="Email ID"
                                    onChange={(e) => {
                                        setUserNameOrEmail(e.target.value);
                                    }}
                                />
                                <TextField
                                    id="standard-password-input"
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                />
                                <Button onClick={handleLogin} variant="contained" className={classes.button}>
                                    Login
                                </Button>
                                <p>
                                    New employee?{' '}
                                    <span>
                                        {' '}
                                        <Link to={ROUTES.AUTH_SIGN_IN}>Register Now</Link>
                                    </span>
                                </p>
                            </div>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Auth;
