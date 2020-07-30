import React, {useRef, useEffect} from 'react';
import s from './title_qthree.module.css';
import { gsap,Power2} from "gsap";
import {EaselPlugin} from 'gsap/dist/EaselPlugin.js'
// import { EasePack } from "gsap/EasePack";
gsap.registerPlugin(EaselPlugin);




const TitleQthree = () => {
	const TL = gsap.timeline();
	let titleItem = useRef(null);
	let textItem = useRef(null);
	let textItem0 = useRef(null);
	let textItem1 = useRef(null);
	let textItem2 = useRef(null);
	let textItem3 = useRef(null);
	let textItem4 = useRef(null);
	let textItem5 = useRef(null);


	useEffect(() => {
		gsap.fromTo(titleItem, 1.2, {y: 90, autoAlpha: 0, ease: Power2.easeOut},{y: 0, autoAlpha: 1, ease: "back(1.7)", delay: 2});
		TL
			.fromTo(
			[textItem,
				textItem0,
				textItem1,
				textItem2,
				textItem3,
				textItem4,
				textItem5,
			],
				1.5,
				{
					y: 70,
					autoAlpha: 0,
					ease: Power2.easeOut
				},
				{
					y: 0,
					autoAlpha: .5,
					ease: "back(3)",
					delay: 2.2,
					stagger:.2
				})
	}, [TL]);

	return (
		<header className={s.header}>
			<div className={s.title} ref={el => {titleItem = el }}>
				<h3>
					Стильні чашки
				</h3>
			</div>

			<p className={s.decrypt} ref={el => {textItem = el}}>
				Довершена кава вимагає довершеної чашки.
			</p>
			<p className={s.decrypt} ref={el => {textItem0 = el}}>
				AMIC Energy представляє оновлений варіант чашки,
			</p>
			<p className={s.decrypt} ref={el => {textItem1 = el}}>

			</p>
			<p className={s.decrypt} ref={el => {textItem2 = el}}>
				в якій ідеально почуватиметься будь-який вид кави
			</p>
			<p className={s.decrypt} ref={el => {textItem3 = el}}>
				або кавового напою. Відчуй на дотик вишуканий візерунок,
			</p>
			<p className={s.decrypt} ref={el => {textItem4 = el}}>
				зігрій долоні у холодну погоду і смакуй ковток за ковтком
			</p>
			<p className={s.decrypt} ref={el => {textItem5 = el}}>
				улюблену каву у стильному форматі
			</p>
		</header>
	)

};

export default TitleQthree;