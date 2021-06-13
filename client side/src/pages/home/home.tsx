import React, { ReactElement } from 'react';
import styles from './home.module.scss';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'config/routes';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
            backgroundColor: '#f9802d',
            color: '#fff',
            '&:hover': {
                color: '#212529',
            },
        },
    }),
);

const Home = () => {
    const classes = useStyles();
    const history = useHistory();
    const handleClick = () => {
        history.push(ROUTES.APPOINTMENT);
    };
    return (
        <div className={styles.homeContainer}>
            <div className={styles.companyQuote}>
                <h1>When We Said We Care For Our Employees, We Meant It!</h1>
            </div>
            <div className={styles.vaccineQuote}>
                <h2>Book Your Appointment For Free Vaccination.</h2>
            </div>
            <div className={styles.BookNowContainer}>
                <h3>Pick Your Slot Now,</h3>
                <Button onClick={handleClick} variant="contained" className={classes.button} endIcon={<ArrowForwardIosIcon />}>
                    Book Now
                </Button>
            </div>
        </div>
    );
};

export default Home;
