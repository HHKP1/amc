import {
	Provider
} from 'react-awesome-slider/dist/navigation';
import React from 'react';
// import Preloader from "./components/preload.jsx";
// import Preloader from "./components/preload.jsx";
import logo from './logo.png';
import './App.css';
import NavigationSlider from './components/Slider.jsx';
import Burg from './components/burger.jsx';
import DeviceOrientation, { Orientation } from 'react-screen-orientation'


// const { requestAnimationFrame } = window ;
const App = () => {
	const slug = "[THE INITIAL RENDERED SLUG]";
	// gs3.ticker.addEventListener('tick', App, this, true, 1);

	// requestAnimationFrame(App);
	return (

		<Provider slug={slug}
		          // basename={process.env.PUBLIC_URL}
		>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
				</header>
				<NavigationSlider
				/>
				<Burg/>
			</div>
		</Provider>
	)
};

export default App;
