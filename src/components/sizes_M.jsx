// import Title_q2 from "./title_q2.jsx";
import React, {Component} from 'react';
import Parallax from "parallax-js";
import {gsap, Power4} from "gsap";
import r from './sizes_M.module.css';
// import SlideTwo from './slide_2.jsx';

class SizesM extends Component {

	componentDidMount(props) {
		this.parallax = new Parallax(this.scene);
		// this.TL = gsap.timeline({pause: true, restart: true});
		this.TL1 = gsap.timeline({restarted: true});
		// this.TL.fromTo(this.cupItem, 1.7,  {opacity: 0},{ease: "back(3.5)",x: -550, opacity: 1,delay: 1.5});
		this.TL1.fromTo(this.sizesItem, 2, {opacity:0, scale: .2}, {scale: 1.5,opacity: 1,ease: Power4.easeOut}, 3.3);
	}
	componentWillUnmount() {
		this.parallax.disable();
		// this.TL.play(0);
		// this.TL1.play(0);
		this.TL1.restart(5);
		// this.TL1.invalidate().restart(5);



	}

	render() {

		return (
			<div className={r.container_content}>
				<div className={r.cupBox3} ref={el => {this.scene = el}}>
					<div data-depth="0.7" className={r.content_size} ref={el => (this.sizesItem = el)}>
						<img src="./images/M.png" alt="sizes"/>
					</div>
				</div>
			</div>

		)
	}
}

export default SizesM;