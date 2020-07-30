import 'react-awesome-slider/dist/styles.css';
import {Link} from "react-awesome-slider/dist/navigation";
import React, {useRef, useEffect, useState} from 'react';
import {gsap, Power2, Power4} from "gsap";
import s from './burg.module.css';


function useHover(e) {
	const sItem9 = useRef(null);
	const [hovered, setHovered] = useState(true);
	const gs3 = gsap.timeline({yoyo:true,repeat: -1});

	const enter = () => setHovered(true);
	const leave = () => setHovered(false);


	useEffect(() => {


		gs3
			.to('feTurbulence', {
				duration: 3,
				attr:{
					numOctaves:5,
					baseFrequency:0,
				},
				// repeatDelay: 0,
				ease: Power4,
				snap: {
					numOctaves: 5
				}
			}, '-=.5');

		sItem9.current.addEventListener('mouseenter', enter);
		sItem9.current.addEventListener('mouseleave', leave);
		return () => {
			sItem9.current.removeEventListener('mouseenter', enter);
			sItem9.current.removeEventListener('mouseleave', leave);
		}
	}, [gs3]);
	return [sItem9, hovered]
}

const Burg = () => {
	// let slug = fullpage.navigation;
	const [sItem9, hovered] = useHover();
	const gs = gsap.timeline({paused: true, reversed: true});
	const gs2 = gsap.timeline();
	// const gs3 = gsap.timeline();
	let menuM = useRef(null);
	let burgH = useRef(null);
	let burgM = useRef(null);
	let burgL = useRef(null);
	// let sItem = useRef(null);
	let sItem1 = useRef(null);
	let sItem2 = useRef(null);
	let sItem3 = useRef(null);
	let sItem4 = useRef(null);
	let sItem5 = useRef(null);
	let sItem6 = useRef(null);
	let sItem7 = useRef(null);
	let sItem8 = useRef(null);


	useEffect(() => {
		gs2
			// .addPause(0)
			.fromTo([burgH,
				burgM,
				burgL], .7, {opacity:0},{opacity:1, ease: Power4.easeOut, stagger: .1}, '+=5');
		gs
			.to(burgH, .5, {rotation: 45, transformOrigin: "left 50%", ease: Power2.easeInOut}, "cross")
			.to(burgM, .5, {autoAlpha: 0}, "cross")
			.to(burgL, .5, {rotation: -45, transformOrigin: "left 50%", ease: Power2.easeInOut}, "cross")
			.fromTo(menuM, 1.5, {x: 1460}, {x: -960,opacity:.97, ease: Power4.easeInOut}, '-=.5')
			.fromTo([sItem1,sItem2,sItem3,sItem4,sItem5,sItem6,sItem7,sItem8],
			1.5,
			{y:70,scale: .7,skewX:120,boxShadow: '1,2,1,0', autoAlpha:0,ease: Power4.easeInOut},
			{y:0,scale: 1.3,skewX:0,autoAlpha:1,ease: 'back(2)',stagger: .3}, '-=.5');

	}, [gs,gs2]);



	function handleClick() {
		gs.reversed() ? gs.play() : gs.reverse(2.7);
	}
	function handleClick2() {
		gs.reverse(2.7) ? gs.play() : gs.reverse();
	}

	return (

		<>

			<svg className={s.nav} onClick={handleClick} width="100%" height="100%" viewBox="0 0 208 182">
				<g className={s.g} transform="translate(-50 -50)">
					<rect width="208" height="182" transform="translate(40 50)" fill="none"/>
					<line x2="100" opacity="0" transform="translate(72.5 110.5)" fill="none" stroke="#fff" ref={el => {burgH = el}} strokeLinecap="round"
					      strokeWidth="5"/>
					<line ref={el => {
						burgM = el
					}} x2="100" opacity="0" transform="translate(72.5 145.5)" fill="none" stroke="#fff" strokeLinecap="round"
					      strokeWidth="5"/>
					<line ref={el => {
						burgL = el
					}} x2="100" opacity="0" transform="translate(72.5 180.5)" fill="none" stroke="#fff" strokeLinecap="round"
					      strokeWidth="5"/>
				</g>
			</svg>
		< div className={s.menu} onClick={handleClick} ref={el => {menuM = el}}>
			<nav className={s.navS}>
				{/*<div className={s.item} onClick={handleClick2}  ref={el => (sItem = el)}>*/}
				{/*	<Link href="/cup">*/}
				{/*		<h1>Головна</h1>*/}
				{/*	</Link>*/}
				{/*</div>*/}
				<div className={s.item} onClick={handleClick2} ref={el => (sItem1 = el)}>
					<Link href="/#cupTwo">
						{hovered && <svg width="0" height="0">
							<filter id="wade_text">
								<feTurbulence ref={sItem9} type="turbulence"
								              baseFrequency="0.005"
								              numOctaves="5" result="turbulence">
								</feTurbulence>
								<feDisplacementMap in="SourceGraphic" in2="turbulence"
								                   scale="10" xChannelSelector="R" yChannelSelector="G">
								</feDisplacementMap>
							</filter>
								<text className={s.turbo_t}  x="50%" y="50%" textAnchor="middle">
									Розвивай почуття
								</text>
						</svg>}
						<h1>Розвивай почуття</h1>
					</Link>
				</div>
				<div className={s.item} onClick={handleClick2}  ref={el => (sItem2 = el)}>
					<Link href="/#cupThree">
						<h1>Нові чашки</h1>
					</Link>
				</div>
				<div className={s.item} onClick={handleClick2}  ref={el => (sItem3 = el)}>
					<Link href="/#slideTwo">
						<h1>Класичний американо</h1>
					</Link>
				</div>
				<div className={s.item} onClick={handleClick2}  ref={el => (sItem4 = el)}>
					<Link href="/#slideThree">
						<h1>Капуччино</h1>
					</Link>
				</div>
				<div className={s.item} onClick={handleClick2}  ref={el => (sItem5 = el)}>
					<Link href="/#slideFour">
						<h1>Еспрессо</h1>
					</Link>
				</div>
				<div className={s.item} onClick={handleClick2}  ref={el => (sItem6 = el)}>
					<Link href="/#slideFive">
						<h1>Какао</h1>
					</Link>
				</div>
				<div className={s.item} onClick={handleClick2}  ref={el => (sItem7 = el)}>
					<Link href="/#slideSix">
						<h1>Лате макиято</h1>
					</Link>
				</div>
				<div className={s.item} onClick={handleClick2}  ref={el => (sItem8 = el)}>
					<Link href="/#slideSeven">
						<h1>Мокко</h1>
					</Link>
				</div>
			</nav>
		</div>

		</>


)


};

export default Burg;