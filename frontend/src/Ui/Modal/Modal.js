import React from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop'

const Modal = (props) => (
	<div>
		<Backdrop show={props.show} clicked={props.close}/>
		<div className={styles.Modal}
		style={{
			transform:props.show ? 'translateY(0)' : 'translateX(-100vh)',
			opacity: props.show ? '1': '0'
		}}>
			{props.children}
		</div>
	</div>
);

export default Modal;