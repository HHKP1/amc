import {AppConsumer, Stage} from "@inlet/react-pixi";
import MeshExampless from "../CompCan_2.jsx";
import React from 'react';
import Title from "../title.jsx";
import Parallax from 'parallax-js';
import {gsap, Power4} from 'gsap';
import r from './cup.module.css';

gsap.registerPlugin();

// const w = 650;
// const h = 600;
//
const TL = gsap.timeline({delay: 2.8});

class Cup extends React.Component {


	componentDidMount() {
		// const TL = gsap.timeline({delay: 2.5});
		this.parallax = new Parallax(this.scene);

		TL
			.fromTo(this.my_Refs, 2.5, {x: '30%',rotate: 10, opacity:0}, {
				// scale: 1.05,
				rotate: 0,
				x: '5%',
				opacity: 1,
				delay: 2,
				ease: "back(3.5)",
			}, '+=.5')
			.fromTo(this.cupSmoke, 3, {opacity: 0}, {opacity: 1, ease: Power4.easeOut}, '+=.5')


	}

	componentWillUnmount() {
		this.parallax.disable();
		// this.TL.invalidate();
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
							<div data-depth="0.1" className={r.cupBox} >
								<img src="./images/empty.png" alt="empty"/>
							</div>
							<div data-depth="0.4" className={r.cupBox} >
								<img src="./images/cub-dots.png" alt="cub-dots"/>
							</div>
							<div data-depth="0.09" className={r.cupBox} >
								<img src="./images/cup.png" alt="cup"/>
							</div>
							<div className={r.cupBox} >
								<img src="./images/cub-milk.png" alt="cub-milk"/>
							</div>
							<div className={r.cupBox} >
								<img src="./images/cub-c.png" alt="cub-c"/>
							</div>
							<div data-depth="0.15" className={r.cupBox} >
								<img src="./images/cub-dots2.png" alt="cub-dots2"/>
							</div>
						</div>
					</div>
					<Title/>
					<div className={r.canvas} data-depth="0.4" ref={el => (this.cupSmoke = el)}>
						<Stage className={r.cnvs} data-depth="0.4" options={{transparent: true}}>
							<AppConsumer>
								{app => <MeshExampless app={app}/>}
							</AppConsumer>
						</Stage>
					</div>
				</div>
		)
	}
}

export default Cup;