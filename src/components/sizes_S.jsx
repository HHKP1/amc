// import Title_q2 from "./title_q2.jsx";
import React, {Component} from 'react';
import Parallax from "parallax-js";
import {gsap, Power4} from "gsap";
import r from './sizes_S.module.css';
// import SlideTwo from './slide_2.jsx';

class SizesS extends Component {
	// constructor(props) {
	// 	super(props);
	// 	// const TL1 = gsap.timeline({restarted: true});
	// 	//
	// 	// this.state = {
	// 	// 	TL1: TL1.play()
	// 	// };
	// }


	componentDidMount(props) {
		this.parallax = new Parallax(this.scene);
		// this.TL = gsap.timeline({pause: true, restart: true});
		this.TL1 = gsap.timeline({restarted: true});
		// this.TL.fromTo(this.cupItem, 1.7,  {opacity: 0},{ease: "back(3.5)",x: -550, opacity: 1,delay: 1.5});
		this.TL1.fromTo(this.sizesItem, 2, {opacity:0}, {scale: 1.1,opacity: 1,ease: Power4.easeOut}, 3.6);
	}
	componentWillUnmount() {
		this.parallax.disable();
		// this.TL.play(0);
		// this.TL1.play(0);
		this.TL1.restart(5);
		// this.TL1.invalidate().restart(5);



	}
	// componentDidUpdate(prevProps, prevState, snapshot) {
	// }Update() {
	// 	// this.TL.restart(true);
	// 	// SizesL.setState({this.TL1.restart()})
	// 	this.TL1.restart(1);
	// }
	render() {
		// componentDidMount();
		// componentWillUnmount();


		return (
			<div className={r.container_content} >
				<div className={r.cupBox3} ref={el => {this.scene = el}}>
					<div data-depth="0.4" className={r.content_size} ref={el => (this.sizesItem = el)}>
						<img src="./images/S.png" alt="sizes"/>
					</div>
				</div>
			</div>

		)
	}
}

export default SizesS;