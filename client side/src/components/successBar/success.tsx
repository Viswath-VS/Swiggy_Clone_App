import React, { ReactElement, useState } from 'react';
import styles from './successBar.module.scss';
import { green } from '@material-ui/core/colors';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { useAppSelector } from 'config/hooks';

const Success = () => {
    const authState = useAppSelector((state) => state.user);
    return (
        <div className={styles.successBarContainer}>
            <CheckCircleOutlineIcon style={{ color: green[500], fontSize: 50 }} />
            <div className={styles.successBarMsg}>
                <h3>Hey {authState.name}, You've Successfully Booked your Appointment.</h3>
                <div className={styles.appointmentDetail}>
                    <h4>Appointment Details</h4>
                    <div className={styles.appointmentTabs}>
                        <p>Vaccination Center: {authState.centerName}</p>
                        <p> Date: {authState.date}</p>
                        <p>Time Slot: {authState.timeSlot}</p>
                        <p>Vaccine Name: {authState.vaccine}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Success;
