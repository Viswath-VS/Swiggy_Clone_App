import React, { ReactElement, useState } from 'react';
import styles from './successBar.module.scss';
import { green } from '@material-ui/core/colors';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { useAppSelector } from 'config/hooks';

const Success = () => {
    const name = useAppSelector((state) => state.user.name);
    return (
        <div className={styles.successBarContainer}>
            <CheckCircleOutlineIcon style={{ color: green[500],  fontSize: 50 }}/>
            <div className={styles.successBarMsg}>
                <h3>Hey {name}, You've Successfully Booked your Appointment.</h3>
            </div>
        </div>
    );
};

export default Success;
