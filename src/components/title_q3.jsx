import React, {useRef, useEffect} from 'react';
import s from './title_q3.module.css';
import { gsap,Power2, Linear} from "gsap";
import {EaselPlugin} from 'gsap/dist/EaselPlugin.js'
gsap.registerPlugin(EaselPlugin);

const TitleQ3 = () => {
	const TL = gsap.timeline();
	const TL1 = gsap.timeline();
	let titleItem = useRef(null);
	let textItem = useRef(null);
	let textItem1 = useRef(null);
	let textItem2 = useRef(null);
	let textItem3 = useRef(null);
	let textItem4 = useRef(null);
	let textItem5 = useRef(null);
	let textItem6 = useRef(null);
	let sItem9 = useRef(null);

	useEffect(() => {
		TL
			.fromTo(titleItem, 1.2, {y: 90, autoAlpha: 0, ease: Power2.easeOut}, {
				y: 0,
				autoAlpha: 1,
				ease: "back(1.7)",
				delay: 2,
			})
			.fromTo([
				textItem,
				textItem1,
				textItem2,
				textItem3,
				textItem4,
				textItem5,
				textItem6
			], 1.5, {y: 70, autoAlpha: 0, ease: Power2.easeOut}, {
				y: 0,
				autoAlpha: .5,
				ease: "back(3)",
				stagger: .3,
			}, '-=1');
		TL1
			.to('feTurbulence', 7,{
					// duration: 12,
					attr:{
						numOctaves:5,
						baseFrequency:0.00001,
					},
					// repeatDelay: '-=.7',
				ease: Linear.easeNone,
					snap: {
						numOctaves: 5
					}
				});
	}, [TL, TL1]);

	return (
		<header className={s.header}>
			<svg width="0" height="0">
				<filter id="wades_text">
					<feTurbulence ref={sItem9} type="turbulence"
					              baseFrequency="0.005"
					              numOctaves="5" result="turbulence">
					</feTurbulence>
					<feDisplacementMap in="SourceGraphic" in2="turbulence"
					                   scale="10" xChannelSelector="R" yChannelSelector="G">
					</feDisplacementMap>
				</filter>
			</svg>
			<div className={s.title} ref={el => {titleItem = el }}>
				<h3>
					Класичний американо
				</h3>
			</div>
			<div className={s.decrypt_holder}>
				<p className={s.decrypt} ref={el => {textItem = el}}>

					Напій названий на честь американців
				</p>
				<p className={s.decrypt} ref={el => {textItem1 = el}}>
					що полюбляють неміцну каву, яку можна пити довго,
				</p>
				<p className={s.decrypt} ref={el => {textItem2 = el}}>
					як чай. Класичний американо — це подвійна
				</p>
				<p className={s.decrypt} ref={el => {textItem3 = el}}>
					порція еспресо, розбавлена гарячою водою.
				</p>
				<p className={s.decrypt} ref={el => {textItem4 = el}}>
					Напій має м’який насичений смак,відмінно зігріває,
				</p>
				<p className={s.decrypt} ref={el => {textItem5 = el}}>
					задоволення від нього можна розтягнути надовго
				</p>
				<p className={s.decrypt} ref={el => {textItem6 = el}}>
					вистачить на душевну бесіду з приємною людиною
				</p>
			</div>

		</header>
	)

};

export default TitleQ3;