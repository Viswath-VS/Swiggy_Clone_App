import React, { ReactElement } from 'react';
import styles from './confirmation.module.scss';
import { ROUTES } from 'config/routes';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { IconButton, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
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
const Conformation = () => {
    const history = useHistory();
    const classes = useStyles();
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
                    <h3>J.S Krishna</h3>
                    <p>Employee ID: 647562</p>
                </div>
                <div className={styles.slotItems}>
                    <p>Vaccination Center: Kauvery Hospital</p>
                </div>
                <div className={styles.slotItems}>
                    <p>Vaccine Name: Covid Shield</p>
                </div>
                <div className={styles.slotItems}>
                    <p>Time Slot: 9am - 11am</p>
                </div>
                <div className={styles.slotItems}>
                    <p> Date: 15-Jun-2021</p>
                </div>
                <div style={{ alignSelf: 'flex-end' }} className={styles.slotItems}>
                    <Button onClick={() => {}} variant="contained" className={classes.button}>
                        Confirm Now
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Conformation;
