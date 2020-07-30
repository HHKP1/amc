import TitleQthree from "./title_qthree.jsx";
import React, { Component } from 'react';
import Parallax from 'parallax-js';
import {gsap} from 'gsap';
import r from './Cup_three.module.css';
gsap.registerPlugin();

class CupThree extends Component {
	componentDidMount() {
		this.parallax = new Parallax(this.scene);
		const TL = gsap.timeline();
		TL
			.fromTo(this.my_Refs,
			2.5,
			{
				x: '30%',
				rotate: 20,
				scale: .5,
				opacity:0
			},
			{
				scale: 1,
				ease: "back(3.5)",
				rotate: -1,
				x: '0',
				opacity: 1,
				delay: 1.5
			})
			.fromTo([this.my_Refs1,this.my_Refs2,this.my_Refs3],
				1,
				{

					rotate: -20,
					scale: .5,
					opacity:0
				},
				{
					scale: 1,
					ease: "back(3.5)",
					rotate: -1,

					opacity: 1,
					delay: .5,
					stagger: .3
				}, '-=2.7');
			// .fromTo([this.my_Refs1,this.my_Refs2,this.my_Refs3], .5,{autoAlpha:0},{autoAlpha:1, stagger: .05});
	}
	componentWillUnmount() {
		this.parallax.disable();
	}

render() {

	return (
			<div className={r.container}>
				<div className={r.cup_all_QsQ} ref={el => {
					(this.my_Refs) = el
				}}>
					<div ref={el => {
						this.scene = el
					}} id="cup_alls" className="cup_all">

						<div data-depth="0.3" className={r.cupBox_q} ref={el => {
							(this.my_Refs1) = el
						}}>
							<img src="./images/cup1.png" alt="cup1"/>
						</div>
						<div  data-depth="0.1" className={r.cupBox_q} ref={el => {
							(this.my_Refs2) = el
						}}>
							<img src="./images/cup2.png" alt="cup2"/>
						</div>
						<div data-depth="0.2" className={r.cupBox_q} ref={el => {
							(this.my_Refs3) = el
						}}>
							<img src="./images/cup3.png" alt="cup3"/>
						</div>
					</div>
				</div>
				<TitleQthree/>
			</div>
	)
}
}

export default CupThree;