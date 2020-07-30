import {AppConsumer, Stage} from "@inlet/react-pixi";
import MeshExample from "./CompCan.jsx";
import SizesS from "./sizes_S.jsx";
import SizesM from "./sizes_M.jsx";
import SizesL from "./sizes_L.jsx";
import TitleQ8 from "./title_q8.jsx";
import React from 'react';
import Parallax from "parallax-js";
import {gsap, Power4} from "gsap";
import r from './slide_7.module.css';

// const w = 500;
// const h = 700;

class SlideSeven extends React.Component {


	componentDidMount() {
		this.parallax = new Parallax(this.scene);
		this.TL = gsap.timeline({restarted: true});
		this.TL
			.fromTo(this.cupItem, 1.7,  {x: 300,opacity: 0},{ease: "back(3.5)",x: 0, opacity: 1,delay: 1.5})
			.fromTo(this.cupSmoke, 5, {opacity:0},{opacity: 1,ease: Power4.easeOut}, '+=.5');
	}
	componentWillUnmount() {
		this.parallax.disable();
		this.TL.invalidate().restart(0);
	}
	render() {
		return (
				<div className={r.container}>

					<div data-depth="0.2" className={r.cup_all_all} ref={el => (this.cupItem = el)}>
						<div className={r.cup_all} ref={el => {
							this.scene = el
						}}>

							{/*<div className={r.cupBox}>*/}
							{/*	<img src="../images/empty.png" alt="empty"/>*/}
							{/*</div>*/}
							<div data-depth="0.2" className={r.cupBox}>
								<img src="./images/mokko.png" alt="mokko"/>
							</div>

						</div>
					</div>
					<div className={r.canvas} data-depth="0.4" ref={el => (this.cupSmoke = el)}>
						<Stage className={r.cnvs} data-depth="0.4" options={{ transparent: true}}>
							<AppConsumer >
								{app => <MeshExample app={app} />}
							</AppConsumer>
						</Stage>
					</div>
					<>
						<TitleQ8/>
						<SizesL/>
						<SizesM/>
						<SizesS/>
					</>

				</div>
		)
	}
}

export default SlideSeven;