import React, {useRef} from 'react';
// import Startup from "./components/Startup.jsx";
import Preloader from "./preload.jsx";
// import {Switch, Route} from 'react-router-dom';
import CupThree from "./CupThree.jsx";
import CupTwo from "./CupTwo.jsx";
import SlideSeven from "./slide_7.jsx";
import SlideSix from "./slide_6.jsx";
import SlideFive from "./slide_5.jsx";
import SlideFour from "./slide_4.jsx";
import SlideThree from "./slide_3.jsx";
import Cup from "./Home/Cup.jsx";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
// import s from './stylesSlide.module.css';
import SlideTwo from "./slide_2.jsx";
// import Startup from "./Startup.jsx"
import {withNavigationContext} from "react-awesome-slider/dist/navigation";

export const media =
	[
		{
			slug: "",
			children:<Cup/>
		},
		{
			slug: "#cupTwo",
			children: <CupTwo/>
		}
		,
		{
			slug: "#cupThree",
			children:<CupThree/>
		}
		,
		{
			slug: "#slideTwo",
			children:<SlideTwo/>
		}
		,
		{
			slug: "#slideThree",
			// className: "page-one",
			children:<SlideThree/>
		}
		,
		{
			slug: "#slideFour",
			// className: "page-two",
			children:<SlideFour/>
		}
		,
		{
			slug: "#slideFive",
			// className: "page-one",
			children:<SlideFive/>
		}
		,
		{
			slug: "#slideSix",
			// className: "page-two",
			children:<SlideSix/>
		}
		,
		{
			slug: "#slideSeven",
			// className: "page-two",
			children:<SlideSeven/>
		}
	];

// export const startupScr = {
// 	// startupDelay:9000,
// 	startupScreen:<Preloader/>
// };


const SSlider = () => {
	// const isFirstLoad = useRef(true);
	// const NavigationSlider = withNavigationHandlers(Slider);
	const NavigationSlider = withNavigationContext(AwesomeSlider);


	// const sT = {
	// 	className: "",
	// 	duration: 3500,
	// 	speed: 1500,
	// 	bullets: true,
	// 	bulletsHeigth: 2,
	// 	startup: true,
	// 	infinite: true,
	// 	fillParent:true,
	// 	slidesToShow: 2,
	// 	slidesToScroll: 1,
	// 	adaptiveHeight: true,
	// 	scrollable: true,
	// 	draggable: true,
	// 	resizable: true,
	// 	transitionDelay: 500,
	// };

	return (
		<NavigationSlider
			className={""}
			speed={3500}
			transitionDuration={3500}
			slidesToShow={1}
			slidesToScroll={1}
			adaptiveHeight={true}
			scrollable={true}
			draggable={true}
			resizable={true}
			fillParent={true}
			bullets={false}
			startup={true}
			// loader={true}
			startupScreen={<Preloader/>}
		    startupDelay={3700}
			media={media}
			transitionDelay={900}
		/>
	)
};

export default SSlider;