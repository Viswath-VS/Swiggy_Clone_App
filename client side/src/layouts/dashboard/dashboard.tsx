import React, { ReactElement } from 'react';
import styles from './dashboard.module.scss';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ROUTES } from 'config/routes';
import Navbar from 'components/navbar/navbar';
import Home from 'pages/home/home';
import Footer from 'components/footer/footer';
import Vaccine from 'pages/vaccine/vaccine';

const DashBoard = () => {
    return (
        <div className={styles.dashboardWrapper}>
            <Navbar />
            <div className={styles.dashboardCoreContainer}>
                <Switch>
                    <Route path={ROUTES.APPOINTMENT}>
                        <Vaccine />
                    </Route>
                    {/* home route should be placed at last */}
                    <Route path={ROUTES.HOME}>
                        <Home />
                    </Route>
                    <Route>
                        <Redirect to={ROUTES.HOME} />
                    </Route>
                </Switch>
            </div>
            <Footer />
        </div>
    );
};

export default DashBoard;
