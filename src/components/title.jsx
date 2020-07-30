import React, {useRef, useEffect} from 'react';
import s from './title.module.css';
import { gsap,Power2, Power4} from "gsap";
// import {EaselPlugin} from 'gsap/dist/EaselPlugin.js'
// gsap.registerPlugin(EaselPlugin);




const Title = () => {

	const TL = gsap.timeline({delay:3});
	const TL1 = gsap.timeline();
	let titleItem = useRef(null);
	let titleItem1 = useRef(null);
	let textItem = useRef(null);
	let textItem1 = useRef(null);
	let textItem2 = useRef(null);
	let textItem3 = useRef(null);
	let textItem4 = useRef(null);
	let textItem5 = useRef(null);
	let sItem9 = useRef(null);



	useEffect(() => {
		TL
			.fromTo([
					titleItem,
					titleItem1
				],
				1.5,
				{
					y: 90,
					autoAlpha: 0,
					ease: Power2.easeOut,
				},
				{
					y: 0,
					autoAlpha: 1,
					ease: "back(1.9)",
					delay: 2.7,
					stagger: .2,
				})
			.fromTo([
					textItem,
					textItem1,
					textItem2,
					textItem3,
					textItem4,
					textItem5
				],
				1.5,
				{
					y: 50,
					autoAlpha: 0,
					ease: Power2.easeOut,
				},
				{
					y: 0,
					autoAlpha: .5,
					ease: "back(2)",
					// delay: .3,
					stagger: .2,
				}, '-=.9');
		TL1
			.to('feTurbulence', 7,{
				// duration: 12,
				attr:{
					numOctaves:5,
					baseFrequency:0,
				},
				// repeatDelay: '-=.7',
				ease: Power4.easeInOut,
				snap: {
					numOctaves: 5
				}
			});
	}, [TL,TL1]);

		return (
			<header className={s.header}>

				<div className={s.title} ref={el => {titleItem = el}}>
					Розвивай почуття
				</div>
				<div className={s.title} ref={el => {titleItem1 = el}}>
					з великою чашкою
				</div>
				<p className={s.decrypt} ref={el => {textItem = el}}>
					- Кав’ярня AMIC Energy — це не просто місце,
				</p>
				<p className={s.decrypt} ref={el => {textItem1 = el}}>
					Це оазис спокою і комфорту серед вічного руху.
				</p>
				<p className={s.decrypt} ref={el => {textItem2 = el}}>
					- Зовсім неважливо, який напій налитий
				</p>
				<p className={s.decrypt} ref={el => {textItem3 = el}}>
					у вашу ранкову, обідню або вечірню чашку.
				</p>
				<p className={s.decrypt} ref={el => {textItem4 = el}}>
					Насолоджуйтеся не лише смаком
				</p>
				<p className={s.decrypt} ref={el => {textItem5 = el}}>
					<svg width="0" height="0">
						<filter id="wade_text">
							<feTurbulence ref={sItem9} type="turbulence"
							              baseFrequency="0.02"
							              numOctaves="5" result="turbulence">
							</feTurbulence>
							<feDisplacementMap in="SourceGraphic" in2="turbulence"
							                   scale="10" xChannelSelector="R" yChannelSelector="G">
							</feDisplacementMap>
						</filter>
					</svg>
					кави але смаком до життя
				</p>
			</header>
		)

};

export default Title;