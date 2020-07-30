import React, {useRef, useEffect} from 'react';
import {gsap,Power2,Bounce,Linear, Power3, TweenMax} from "gsap";
import s from './dots.module.css';


const Dots = () => {
	let arrowR = useRef(null);
	let arrowL = useRef(null);
	// let burgL = useRef(null);

	useEffect(() => {
		gsap.fromTo(arrowR, 1, {x: 30,autoAlpha: 1,ease: Power2.easeIn},{x: -20,autoAlpha: 1,yoyo: true,repeat: -1, ease: Power2.easeOut, delay: 3});
		gsap.fromTo(arrowL, 1, {x: -20, autoAlpha: 1,ease: Power2.easeIn},{x: 30,autoAlpha: 1,yoyo: true,repeat: -1, ease: Power2.easeOut, delay: 3});
		// TweenMax.fromTo(burgL, 1, {x: -100, ease: Power2.easeIn},{x: 30, ease: Power3.easeOut}, +2);
		// TweenMax.fromTo(textItem, 2.5, {y: 150, autoAlpha: 0, ease: Power2.easeIn},{y: 0, autoAlpha: 0.5, ease: Power3.easeOut}, '+=3');
		// TweenMax.fromTo(cupItem, 4, {y: 150, autoAlpha: 0, ease: Power2.easeIn},{y: 0, autoAlpha: 0.3, ease: Power3.easeOut}, 3);

	}, [])


	return (
		<div className={s.container}>
			<div className={s.arr_left}>
				<img src="./images/arr-left.png" ref={el => {arrowR = el}} alt="arr-left"/>
			</div>
			<div className={s.arr_right}>
				<img src="./images/arr-right.png" ref={el => {arrowL = el}} alt="arr-right"/>
			</div>
			<ul className={s.ul}>
				<li className={s.li}>
					<a className={s.a}>
					<span className={s.span}></span>
				</a>
				</li>
				<li className={s.li}>
					<a className={s.a}>
					<span className={s.span}></span>
				</a>
				</li>
				<li className={s.li}>
					<a className={s.a}>
					<span className={s.span}></span>
				</a>
				</li>
				<li className={s.li}>
					<a className={s.a}>
					<span className={s.span}></span>
				</a>
				</li>
				<li className={s.li}>
					<a className={s.a}>
					<span className={s.span}></span>
				</a>
				</li>
				<li className={s.li}>
					<a className={s.a}>
					<span className={s.span}></span>
				</a>
				</li>
				<li className={s.li}>
					<a className={s.a}>
					<span className={s.span}></span>
				</a>
				</li>
				<li className={s.li}>
					<a className={s.a}>
					<span className={s.span}></span>
				</a>
				</li>
				<li className={s.li}>
					<a className={s.a}>
					<span className={s.span}></span>
				</a>
				</li>
				<li className={s.li}>
					<a className={s.a}>
					<span className={s.span}></span>
				</a>
				</li>
			</ul>
		</div>
	)
}

export default Dots;