import React, {useRef, useEffect} from 'react';
import s from './title_q4.module.css';
import { gsap,Power2, Linear} from "gsap";
import {EaselPlugin} from 'gsap/dist/EaselPlugin.js'
gsap.registerPlugin(EaselPlugin);

const TitleQ4 = () => {
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
	let textItem7 = useRef(null);
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
				textItem4,
				textItem5,
				textItem6,
				textItem7
			], 1.5, {y: 70, autoAlpha: 0, ease: Power2.easeOut}, {
				y: 0,
				autoAlpha: .5,
				ease: "back(3)",
				stagger:.3
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

	}, [TL,TL1]);

	return (
		<header className={s.header}>
			<div className={s.title} ref={el => {titleItem = el }}>
				<svg width="0" height="0">
					<filter id="wades2_text">
						<feTurbulence ref={sItem9} type="turbulence"
						              baseFrequency="0.01"
						              numOctaves="5" result="turbulence">
						</feTurbulence>
						<feDisplacementMap in="SourceGraphic" in2="turbulence"
						                   scale="10" xChannelSelector="R" yChannelSelector="G">
						</feDisplacementMap>
					</filter>
				</svg>
				<h3>
					Капучино
				</h3>
			</div>
			<div className={s.decrypt_holder}>
				<p className={s.decrypt} ref={el => {textItem = el}}>
					Капучино — це кавовий напій, у якому в різних пропорціях
				</p>
				<p className={s.decrypt} ref={el => {textItem1 = el}}>
					змішані еспресо, кип’ячене молоко і спінене молоко.
				</p>
				<p className={s.decrypt} ref={el => {textItem2 = el}}>
					Саме через пишну пінку зверху, яка нагадує капюшон монаха-капуцина
				</p>
				<p className={s.decrypt} ref={el => {textItem3 = el}}>
					цей напій отримав свою унікальну назву.
				</p>
				<p className={s.decrypt} ref={el => {textItem4 = el}}>
					Пінка не дає аромату випаровуватися і
				</p>
				<p className={s.decrypt} ref={el => {textItem5 = el}}>
					допомогає капучинодовше зберігати тепло. Італійці, винахідники капучино,
				</p>
				<p className={s.decrypt} ref={el => {textItem6 = el}}>
					п’ють цей напій лише за сніданком.
				</p>
				<p className={s.decrypt} ref={el => {textItem7 = el}}>
					Але ми звикли насолоджуватися ним у будь-яку годину дня
				</p>
			</div>
		</header>
	)

};

export default TitleQ4;