// import Title_q2 from "./title_q2.jsx";
import React from 'react';
import Parallax from "parallax-js";
import {gsap, Power4} from "gsap";
import r from './sizes_L.module.css';
// import SlideTwo from './slide_2.jsx';

class SizesL extends React.Component {


	componentDidMount() {
		this.parallax = new Parallax(this.scene);
		// this.TL = gsap.timeline({pause: true, restart: true});
		this.TL1 = gsap.timeline({restarted: true});
		// this.TL.fromTo(this.cupItem, 1.7,  {opacity: 0},{ease: "back(3.5)",x: -550, opacity: 1,delay: 1.5});
		this.TL1.fromTo(this.sizesItem, 2, {opacity:0}, {opacity: 1,ease: Power4.easeOut, delay: 3});
	}
	componentWillUnmount() {
		this.parallax.disable();

		this.TL1 = gsap.timeline({restarted: true});
		// this.TL.fromTo(this.cupItem, 1.7,  {opacity: 0},{ease: "back(3.5)",x: -550, opacity: 1,delay: 1.5});
		this.TL1.to(this.sizesItem, .2, {y: -100,opacity: 0,ease: Power4.easeOut}, '-=1');
	}

	render() {

		return (
						<div className={r.container_content} >
							<div className={r.cupBox3} ref={el => {this.scene = el}}>
								<div data-depth="0.3" className="content_size" ref={el => (this.sizesItem = el)}>
									<img src="./images/L.png" alt="sizes"/>
								</div>
							</div>
						</div>

		)
	}
}

export default SizesL;