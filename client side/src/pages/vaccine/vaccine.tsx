import React, { ReactElement } from 'react';
import styles from './vaccine.module.scss';
import { ROUTES } from 'config/routes';
import { useHistory } from 'react-router-dom';
import { IconButton, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 150,
            justifySelf: 'center',
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);
const Vaccine = (): ReactElement => {
    const history = useHistory();
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
        setAge(event.target.value);
    };
    return (
        <div className={styles.homeContainer}>
            <div className={styles.vaccineContainer}>
                <div className={styles.titleContainer}>
                    <IconButton
                        onClick={() => {
                            history.push(ROUTES.HOME);
                        }}
                        aria-label="back"
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <h3> Book Your Vaccination Appointment</h3>
                </div>
                <div className={styles.slotContainer}>
                    {/* <div className={styles.nameTitle}>
                        <h3> J.S. Krishna</h3>
                    </div> */}
                    <div className={styles.slotItems}>
                        <p>Location: Trichy, Tamil Nadu.</p>
                    </div>
                    <div className={styles.slotItemsOptions}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Available Dates</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} onChange={handleChange}>
                                <MenuItem>30 may 2021</MenuItem>
                                <MenuItem>20 may 2021</MenuItem>
                                <MenuItem>10 may 2021</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Select Timeslot</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} onChange={handleChange}>
                                <MenuItem>9 am - 11 am</MenuItem>
                                <MenuItem>2pm - 4pm</MenuItem>
                                <MenuItem>6pm - 8pm</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Select Vaccine</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} onChange={handleChange}>
                                <MenuItem>Cowid Shield</MenuItem>
                                <MenuItem>Covaxin</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vaccine;
