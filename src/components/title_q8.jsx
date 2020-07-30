import React, {useRef, useEffect} from 'react';
import s from './title_q8.module.css';
import { gsap,Power2, Linear} from "gsap";
import {EaselPlugin} from 'gsap/dist/EaselPlugin.js'
gsap.registerPlugin(EaselPlugin);




const TitleQ8 = () => {
	const TL = gsap.timeline();
	const TL1 = gsap.timeline();
	let titleItem = useRef(null);
	let textItem = useRef(null);
	let textItem1 = useRef(null);
	let textItem2 = useRef(null);
	let textItem3 = useRef(null);
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
				<filter id="wades6_text">
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
					Мокко
				</h3>
			</div>
			<div className={s.decrypt_holder}>
				<p className={s.decrypt} ref={el => {textItem = el}}>
					Кавовий коктейль мокко — це мікс довершеної кави, гарячого молока та шоколаду. Саме поєднання
				</p>
				<p className={s.decrypt} ref={el => {textItem1 = el}}>
					цих трьох компонентів надає напою такий виразний і ніжний смак. Мокко ще називають шоколадною
				</p>
				<p className={s.decrypt} ref={el => {textItem2 = el}}>
					кавою. Вона ідеальна для насолоди у вечірній час, адже добре розслаблює і дарує додатковий
				</p>
				<p className={s.decrypt} ref={el => {textItem3 = el}}>
					«ковток бадьорості», який так потрібен після важкого дня

				</p>
			</div>
		</header>
	)

};

export default TitleQ8;