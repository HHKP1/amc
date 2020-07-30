import React from 'react';
import Preloader from '../components/preload';
import r from './startup.module.css';
// import 'react-awesome-slider/dist/styles.css';


const Startup = () => {
	return (
		<div className={r.startup}>
			<Preloader/>
		</div>
	)
};

export default Startup;