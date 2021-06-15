import React, { ReactElement } from 'react';
import styles from './footer.module.scss';


const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className={styles.footerContainer} >
            <p>©{year}SwiggyCloneApp.</p>
        </div>
    )
}

export default Footer;
