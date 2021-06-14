import React, { ReactElement } from 'react';
import styles from './signin.module.scss';
import { TextField, Button } from '@material-ui/core';
import { Redirect, Route, Switch, Link } from 'react-router-dom';
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

const Signin = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={styles.loginTitle}>
                <h3>Register Your Email ID.</h3>
            </div>
            <div className={styles.loginBox}>
                <TextField id="standard-basic" label="Name" />
                <TextField id="standard-basic" label="Employee ID" />
                <TextField id="standard-basic" label="Email ID" />
                <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" />
                <Button onClick={() => {}} variant="contained" className={classes.button}>
                    Register
                </Button>
                <p>
                    Already Registered?{' '}
                    <span>
                        {' '}
                        <Link to={ROUTES.AUTH}>Login Now</Link>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Signin;
