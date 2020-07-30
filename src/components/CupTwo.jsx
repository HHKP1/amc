import {AppConsumer, Stage} from "@inlet/react-pixi";
import LineComponentFive from "./LineFive.jsx";
import LineComponentFoure from "./LineFoure.jsx";
import CircleFive from "./CircleFive.jsx";
import CircleFoure from "./CircleFoure.jsx";
import LineComponentThree from "./LineThree.jsx";
import LineComponentTwo from "./LineTwo.jsx";
import LineComponent from "./Line.jsx";
import CircleThree from "./CircleThree.jsx";
import CircleTwo from "./CircleTwo.jsx";
import Circle from "./Circle.jsx";
import TitleQ2 from "./title_q2.jsx";
import MeshExampless from "./CompCan_2.jsx";
import React, { Component } from 'react';
import Parallax from 'parallax-js';
import {gsap, Power4} from 'gsap';

import r from'./cupTwo.module.css';
gsap.registerPlugin();

// const w = 650;
// const h = 600;

class CupTwo extends Component {

	componentDidMount() {
		this.parallax = new Parallax(this.scene);
		this.TL = gsap.timeline();
		this.TL
			.fromTo(this.my_Refs, 2.5, {x: '30%',rotate: 10, opacity:0}, {
				// scale: 1.05,
				rotate: 0,
				x: '5%',
				opacity: 1,
				delay: 2,
				ease: "back(3.5)",
			}, '+=.5')
			.fromTo(this.cupSmoke, 5, {opacity:0},{opacity: 1,ease: Power4.easeOut}, '+=.5');
	}

	componentWillUnmount() {
		this.parallax.disable();
		this.TL.invalidate();
	}
render() {

	return (
			<div className={r.container}>
				<div className={r.cup_all_Qs} ref={el => {
					(this.my_Refs) = el
				}}>
					<div ref={el => {
						this.scene = el
					}} className={r.cup_all}>
						{/*<Par/>*/}
						<div data-depth="0.1" className={r.cupBox}>
							<img src="./images/empty.png" alt="empty"/>
						</div>
						<div data-depth="0.2" className={r.cupBox}>
							<img src="./images/cub-dots.png" alt="cub-dots"/>
						</div>
						<div style={{left: "70%"}} data-depth="0.09" className={r.cupBox}>
							<img src="./images/cup.png" alt="cup"/>
						</div>
						<div className={r.cupBox}>
							<img src="./images/cub-milk.png" alt="cub-milk"/>
						</div>
						<div className={r.cupBox}>
							<img src="./images/cub-c.png" alt="cub-c"/>
						</div>
						<div data-depth="0.15" className={r.cupBox} >
							<img src="./images/cub-dots2.png" alt="cub-dots2"/>
						</div>
					</div>

				</div>
				<div className={r.canvas} data-depth="0.4" ref={el => (this.cupSmoke = el)}>
					<Stage className={r.cnvs} data-depth="0.4" ref={el => (this.cupSmoke = el)} options={{ transparent: true}}>
						<AppConsumer >
							{app => <MeshExampless app={app} />}
						</AppConsumer>
					</Stage>
				</div>
				<TitleQ2 />
				<LineComponent/>
				<LineComponentTwo/>
				<LineComponentThree/>
				<LineComponentFive/>
				<LineComponentFoure/>
				<Circle/>
				<CircleTwo/>
				<CircleThree/>
				<CircleFive/>
				<CircleFoure/>
			</div>

	)
}
}

export default CupTwo;