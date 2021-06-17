import React, { ReactElement, useState } from 'react';
import styles from './signin.module.scss';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ROUTES } from 'config/routes';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useAppDispatch } from 'config/hooks';
import { updateAuthState } from 'store/models/userinfo';
import { registerUsers } from 'requests/authrequest';

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

const Signin = (): ReactElement => {
    // Action Helper
    const dispatch = useAppDispatch();

    const classes = useStyles();
    const [userNameOrEmail, setUserNameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setname] = useState('');
    const [employeeID, setemployeeID] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);

    // function to register new employee.
    const handleRegister = async () => {
        // if (isDisabled) return; // restrict on consecutive form submition via pressing enter

        // setIsDisabled(true);
        try {
            const email = userNameOrEmail;
            const employee_id = employeeID;
            const authResponse = await registerUsers({ name, employee_id, email, password });
            const userDetail = authResponse && authResponse.data;
            if (authResponse.status) {
                dispatch(
                    updateAuthState({
                        ...userDetail,
                    }),
                );
            } else {
                // account not found or some other error
                throw new Error(authResponse.error);
            }
        } catch (error) {
            console.log(error.message);
        }
        // setIsDisabled(false);
    };

    
    return (
        <div>
            <div className={styles.loginTitle}>
                <h3>Register Your Email ID.</h3>
            </div>
            <div className={styles.loginBox}>
                <TextField
                    id="standard-basic 1"
                    label="Name"
                    onChange={(e) => {
                        setname(e.target.value);
                    }}
                />
                <TextField
                    id="standard-basic 2"
                    label="Employee ID"
                    onChange={(e) => {
                        setemployeeID(e.target.value);
                    }}
                />
                <TextField
                    id="standard-basic 3"
                    label="Email ID"
                    onChange={(e) => {
                        setUserNameOrEmail(e.target.value);
                    }}
                />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    type="password"
                    autoComplete="current-password"
                />
                {isDisabled ? (
                    <Button onClick={handleRegister} variant="contained" disabled className={classes.button}>
                        Register
                    </Button>
                ) : (
                    <Button onClick={handleRegister} variant="contained" className={classes.button}>
                        Register
                    </Button>
                )}
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
