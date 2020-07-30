import React, {useRef, useEffect} from 'react';
import s from './title_q7.module.css';
import { gsap,Power2, Linear} from "gsap";
import {EaselPlugin} from 'gsap/dist/EaselPlugin.js'
gsap.registerPlugin(EaselPlugin);

const TitleQ7 = () => {
	const TL = gsap.timeline();
	const TL1 = gsap.timeline();
	let titleItem = useRef(null);
	let textItem = useRef(null);
	let textItem1 = useRef(null);
	let textItem2 = useRef(null);
	let textItem3 = useRef(null);
	let textItem4 = useRef(null);
	let sItem9 = useRef(null)



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
				textItem4
			], 1.5, {y: 70, autoAlpha: 0, ease: Power2.easeOut}, {y: 0, autoAlpha: .5, ease: "back(3)",stagger: .3}, '-=1');
		TL1
			.to('feTurbulence', 7,{
				// duration: 12,
				attr:{
					numOctaves:5,
					baseFrequency:0,
				},
				// repeatDelay: '-=.7',
				ease: Linear.easeInOut,
				snap: {
					numOctaves: 5
				}
			});

	}, [TL, TL1]);

	return (
		<header className={s.header}>
			<svg width="0" height="0">
				<filter id="wades5_text">
					<feTurbulence ref={sItem9} type="turbulence"
					              baseFrequency="0.01"
					              numOctaves="5" result="turbulence">
					</feTurbulence>
					<feDisplacementMap in="SourceGraphic" in2="turbulence"
					                   scale="10" xChannelSelector="R" yChannelSelector="G">
					</feDisplacementMap>
				</filter>
			</svg>
			<div className={s.title} ref={el => {titleItem = el }}>
				<h3>
					Какао
				</h3>
			</div>
			<div className={s.decrypt_holder} >
				<p className={s.decrypt} ref={el => {textItem = el}}>
					Какао — ідеальний напій для холодної пори року.
				</p>
				<p className={s.decrypt} ref={el => {textItem1 = el}}>
					Він допомогає поновити сили та покращити настрій.Поєднання молока і
				</p>
				<p className={s.decrypt} ref={el => {textItem2 = el}}>
					какао дуже корисне під час активної розумової чи фізичної діяльності,
				</p>
				<p className={s.decrypt} ref={el => {textItem3 = el}}>
					какао називають чудовим антидепресантом. Зранку напій надасть бадьорості і зарядить енергією,
				</p>
				<p className={s.decrypt} ref={el => {textItem4 = el}}>
					ввечерікакао можна випити для зняття напруги та втоми. А як його полюбляє малеча!
				</p>
			</div>
		</header>
	)

};

export default TitleQ7;