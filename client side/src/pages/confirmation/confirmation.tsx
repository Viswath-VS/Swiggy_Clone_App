import React, { ReactElement } from 'react';
import styles from './confirmation.module.scss';
import { ROUTES } from 'config/routes';
import { Redirect, useHistory } from 'react-router-dom';
import { IconButton, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useAppDispatch, useAppSelector } from 'config/hooks';
import { confirmSubmition } from 'requests/datarequest';
import { updateAuthState } from 'store/models/userinfo';

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
const Conformation = (): ReactElement => {
    const dispatch = useAppDispatch();
    const authState = useAppSelector((state) => state.user);

    const history = useHistory();
    const classes = useStyles();

    // Submition conformation.
    const handleConfirmation = async () => {
      try {
        const {data, status, error} = await confirmSubmition (authState); 
        if(status){
            dispatch(updateAuthState(data));
            console.log('success');
            
            history.push(ROUTES.DASHBOARD);
        }
      } catch (error) {
          console.log(error);   
      }  


    };
    return (
        <div className={styles.vaccineContainer}>
            <div className={styles.titleContainer}>
                <IconButton
                    onClick={() => {
                        history.push(ROUTES.APPOINTMENT);
                    }}
                    aria-label="back"
                >
                    <ArrowBackIcon />
                </IconButton>
                <h3> Appointment Confirmation</h3>
            </div>

            <div className={styles.slotContainer}>
                <div className={styles.slotItems}>
                    <h3>{authState.name}</h3>
                    <p>Employee ID:{authState.employeeID}</p>
                </div>
                <div className={styles.slotItems}>
                    <p>Vaccination Center: {authState.centerName}</p>
                </div>
                <div className={styles.slotItems}>
                    <p> Date:{authState.date}</p>
                </div>
                <div className={styles.slotItems}>
                    <p>Time Slot:{authState.timeSlot}</p>
                </div>
                <div className={styles.slotItems}>
                    <p>Vaccine Name: {authState.vaccine}</p>
                </div>
                <div style={{ alignSelf: 'flex-end' }} className={styles.slotItems}>
                    <Button onClick={handleConfirmation} variant="contained" className={classes.button}>
                        Confirm Now
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Conformation;
