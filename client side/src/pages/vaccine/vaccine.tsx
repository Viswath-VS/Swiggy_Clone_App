import React, { ReactElement } from 'react';
import styles from './vaccine.module.scss';
import Conformation from 'pages/confirmation/confirmation';
import { ROUTES } from 'config/routes';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { IconButton, Button, FormControl, InputLabel, Select, MenuItem, Table, TableBody, TableHead, TableRow, TableCell } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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
    const history = useHistory();
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
        setAge(event.target.value);
    };
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
                                <Button onClick={() => {}} variant="contained" className={classes.button}>
                                    Search
                                </Button>
                            </div>
                            <div className={styles.slotItemsCenter}>
                                <p>Select a Vaccination Center</p>
                            </div>
                            <div className={styles.hospitalLists}>
                                {/* <div className={styles.hospitalListItems}>
                            <p>Cantonement Office</p>
                            <IconButton>
                                <CheckCircleSharpIcon />
                            </IconButton>
                        </div> */}
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
                                        <TableRow>
                                            <TableCell align="left">2</TableCell>
                                            <TableCell align="left">Kauvery Hosipital</TableCell>
                                            <TableCell align="left">12</TableCell>
                                            <TableCell align="left">
                                                <IconButton>
                                                    <CheckCircleSharpIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left">3</TableCell>
                                            <TableCell align="left">Kauvery Hosipital</TableCell>
                                            <TableCell align="left">12</TableCell>
                                            <TableCell align="left">
                                                <IconButton
                                                    onClick={() => {
                                                        history.push(ROUTES.APPOINTMENT_CONFORMATION);
                                                    }}
                                                >
                                                    <CheckCircleSharpIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </Route>
            </Switch>
        </div>
    );
};

export default Vaccine;
