import React from 'react';
import s from "./lineFive.module.css";
import {gsap, Power4} from "gsap";
import Parallax from "parallax-js";




class LineComponentFive extends React.Component {

	componentDidMount() {
		this.TL = gsap.timeline({restarted: true});
		// this.TL1 = gsap.timeline({restarted: true});
		// this.TL2 = gsap.timeline({restarted: true});


		this.TL
			.set(this.lineItem, {attr:{"stroke-dasharray": 1}})
			.set(this.lineItem,	{attr:{"stroke-dashoffset": 1}})
			.set(this.lineItem,	{attr:{"pathLength": 1}})
			.to(this.lineItem, 2.2, {attr:{"stroke-dashoffset":0,ease: Power4.easeInOut}}, '+=4.6');
			// .fromTo(this.lineItem, 2.2, {x: -280}, {x: 0,ease: Power4.easeInOut}, '+=5.5');
		// this.TL1.fromTo(this.circleItemTwo, 1.5,  {opacity:0, scale:0}, {scale:1.1, transformOrigin: '50% 50%', opacity: 1,ease: Power4.easeOut}, '+=3.3');
		// this.TL2.fromTo(this.circleItemThree, 1.2,  {opacity:0, scale:0}, {scale:1.1, transformOrigin: '50% 50%', opacity: 1,ease: Power4.easeOut}, '+=3.5');
		this.parallax = new Parallax(this.scene);
	}
	componentWillUnmount() {
		this.parallax.disable();
		// this.TL.play(0);
		// this.TL1.play(0);
		// this.TL1.restart(5);
		// this.TL1.invalidate().restart(5);
		// this.TL1 = gsap.timeline({restarted: true});
		// // this.TL.fromTo(this.cupItem, 1.7,  {opacity: 0},{ease: "back(3.5)",x: -550, opacity: 1,delay: 1.5});
		// this.TL1.to(this.circleItem, .2, {y: -100,opacity: 0,ease: Power4.easeOut}, '-=1');



	}
	render (){
		return(
			<div className={s.container} ref={el => {this.scene = el}}>
				<svg className={s.line} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 205.416 76">
					<g id="LineComponent" transform="translate(-273.819 -345)">
						<rect id="Rectangle_2" data-name="Rectangle 2" width="205" height="76" transform="translate(274 345)" fill="none"/>
						<g id="Line_M" transform="translate(273.819 383.5)">
							<path data-depth="4"  ref={el => (this.lineItem = el)} id="Line" d="M0,0H205.416" fill="none" stroke="#ffffff" strokeWidth="2"/>
						</g>
					</g>
				</svg>
			</div>
		)
	}


}

export default LineComponentFive;






