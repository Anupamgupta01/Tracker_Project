import React from 'react'
import Backdrop from '../Backdrop/Backdrop';
import styles from './Spinner.module.css'

const Spinner = (props) => (
	<div>
        <Backdrop show={true}/>
        <div className={styles.spinner}>
            <div className={styles.dot1}></div>
            <div className={styles.dot2}></div>
        </div>
    </div>
);

export default Spinner;