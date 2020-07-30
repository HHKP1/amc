import React, {useRef, useEffect} from 'react';
import s from './title_q2.module.css';
import { gsap,Power2} from "gsap";
import {EaselPlugin} from 'gsap/dist/EaselPlugin.js'
gsap.registerPlugin(EaselPlugin);

const TitleQ2 = () => {

	const TL = gsap.timeline({delay: 3.2});
	let textItem = useRef(null);
	let textItem1 = useRef(null);
	let textItem2 = useRef(null);
	let textItem3 = useRef(null);


	useEffect(() => {
		TL
			.fromTo([textItem, textItem1,
					textItem2,
					textItem3],
				1.5,
				{
					y: 50,
					autoAlpha: 0,
					ease: Power2.easeOut,
				},
				{
					y: 0,
					autoAlpha: .5,
					ease: "back(3)",
					stagger: .2,
				});
	}, [TL]);

	return (
		<header className={s.header}>
			<p className={s.decrypt} ref={el => {textItem = el}}>
				Аромат довершеної кави хвилює всі органи
			</p>
			<p className={s.decrypt} ref={el => {textItem1 = el}}>
				почуттів і спокушає знову і знову приходити
			</p>
			<p className={s.decrypt} ref={el => {textItem2 = el}}>
				чашка зберігає його дивовижні ноти і дає
			</p>
			<p className={s.decrypt} ref={el => {textItem3 = el}}>
				гарячим імпульсам помчати по всьому тілу
			</p>
		</header>
	)

};

export default TitleQ2;