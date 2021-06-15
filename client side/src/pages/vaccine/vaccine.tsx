import React, { ReactElement, useState } from 'react';
import styles from './vaccine.module.scss';
import Conformation from 'pages/confirmation/confirmation';
import { ROUTES } from 'config/routes';
import { Route, Switch, useHistory } from 'react-router-dom';
import { IconButton, Button, FormControl, InputLabel, Select, MenuItem, Table, TableBody, TableHead, TableRow, TableCell } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { vaccineCenterData, vaccineDatas } from 'requests/datarequest';
import { updateVaccine } from 'store/models/vaccinecenter';
import { useAppDispatch, useAppSelector } from 'config/hooks';
import { updateAuthState } from 'store/models/userinfo';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            minWidth: 150,
            justifySelf: 'center',
            marginTop: '15px',
            flexWrap: 'wrap',
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        table: {
            flexWrap: 'wrap',
        },
        button: {
            backgroundColor: '#f9802d',
            color: '#fff',
            '&:hover': {
                color: '#212529',
            },
        },
    }),
);
const Vaccine = (): ReactElement => {
    // actoin helpers
    const dispatch = useAppDispatch();
    const vaccineData = useAppSelector((state) => state.vaccine);

    const history = useHistory();
    const classes = useStyles();
    const [date, setDate] = useState('');
    const [timeSlot, settimeSlot] = useState('');
    const [selected, setselected] = useState<Boolean>(false);
    const [vaccine, setvaccine] = useState('');

    // event handlers
    const handleDate = (event: React.ChangeEvent<{ value: any }>) => {
        setDate(event.target.value);
    };
    const handleSlot = (event: React.ChangeEvent<{ value: any }>) => {
        settimeSlot(event.target.value);
    };
    const handleVaccine = (event: React.ChangeEvent<{ value: any }>) => {
        setvaccine(event.target.value);
    };

    // search button event
    const handleSearch = async () => {
        try {
            const { data, status } = await vaccineCenterData(date, timeSlot, vaccine);
            if (status) {
                dispatch(updateVaccine(data));
                console.log(vaccineData);
            }
        } catch (error) {
            console.log(error.message);
        }
        setselected(true);
    };

    // const vaccineDetails = async () => {
    //     const { data } = await vaccineDatas();
    //     console.log(data);
    // };

    const handleSelectCenter = async (e: any) => {
        let state = localStorage['user-info'];
        let vaccineState = localStorage['vaccine-info'];
        let appState;

        if (state) {
            appState = JSON.parse(state);
        }
        let num = 0;
        let vaccineInfo = JSON.parse(vaccineState);
        appState.centerName = vaccineInfo[num].Vaccination_Center;
        appState.date = date;
        appState.timeSlot = timeSlot;
        appState.vaccine = vaccine;
        dispatch(updateAuthState(appState));
        history.push(ROUTES.APPOINTMENT_CONFORMATION);
    };

    // useEffect(() => {
    //     vaccineDetails();
    // }, []);
    return (
        <div className={styles.homeContainer}>
            <Switch>
                <Route path={ROUTES.APPOINTMENT_CONFORMATION}>
                    <Conformation />
                </Route>
                <Route path={ROUTES.APPOINTMENT}>
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
                            <div className={styles.slotItems}>
                                <p>Location: Trichy, Tamil Nadu.</p>
                            </div>
                            <div className={styles.slotItemsOptions}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Available Dates</InputLabel>
                                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={date} onChange={handleDate}>
                                        <MenuItem value="24-Jun-2021">24-Jun-2021</MenuItem>
                                        <MenuItem value="25-Jun-2021">25-Jun-2021</MenuItem>
                                        <MenuItem value="26-Jun-2021">26-Jun-2021</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Select Timeslot</InputLabel>
                                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={timeSlot} onChange={handleSlot}>
                                        <MenuItem value="9am - 11am">9am - 11am</MenuItem>
                                        <MenuItem value="2pm - 4pm">2pm - 4pm</MenuItem>
                                        <MenuItem value="5pm - 7pm">5pm - 7pm</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Select Vaccine</InputLabel>
                                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={vaccine} onChange={handleVaccine}>
                                        <MenuItem value="covidShield">covidShield</MenuItem>
                                        <MenuItem value="covaxin">covaxin</MenuItem>
                                    </Select>
                                </FormControl>
                                <Button onClick={handleSearch} variant="contained" className={classes.button}>
                                    Search
                                </Button>
                            </div>
                            {selected ? (
                                <div>
                                    <div className={styles.slotItemsCenter}>
                                        <p>Select a Vaccination Center</p>
                                    </div>
                                    <div className={styles.hospitalLists}>
                                        <Table className={classes.table} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="right">ID</TableCell>
                                                    <TableCell align="right">Vaccination Center</TableCell>
                                                    <TableCell align="right">Doses Remaining</TableCell>
                                                    <TableCell align="right">Select Center</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {vaccineData.map((obj, index) => {
                                                    return (
                                                        <TableRow key={index}>
                                                            <TableCell align="left">{obj._id}</TableCell>
                                                            <TableCell align="left">{obj.Vaccination_Center}</TableCell>
                                                            <TableCell align="left">{obj.Doses_Remaining}</TableCell>
                                                            <TableCell align="left">
                                                                <IconButton key={obj._id} value={obj._id} onClick={(e) => handleSelectCenter(e)}>
                                                                    <CheckCircleSharpIcon />
                                                                </IconButton>
                                                            </TableCell>
                                                        </TableRow>
                                                    );
                                                })}
                                            </TableBody>
                                        </Table>
                                    </div>
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                    </div>
                </Route>
            </Switch>
        </div>
    );
};

export default Vaccine;
