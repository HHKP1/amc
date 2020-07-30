import {gsap, Power4} from "gsap";
import Parallax from "parallax-js";
import React from 'react';
import s from './circleThree.module.css';

class CircleThree extends React.Component{

	componentDidMount() {
		this.TL = gsap.timeline({restarted: true});
		this.TL1 = gsap.timeline({restarted: true});
		this.TL2 = gsap.timeline({restarted: true});
		this.TL7 = gsap.timeline({restarted: true});


		this.TL.fromTo(this.circleItem, 1.7, {opacity:0, scale:0}, {scale:1.1, transformOrigin: '50% 50%', opacity: .5,ease: Power4.easeOut}, '+=4');
		this.TL1.fromTo(this.circleItemTwo, 1.5,  {opacity:0, scale:0}, {scale:1.1, transformOrigin: '50% 50%', opacity: 1,ease: Power4.easeOut}, '+=4.3');
		this.TL2.fromTo(this.circleItemThree, 1.2,  {opacity:0, scale:0}, {scale:1.1, transformOrigin: '50% 50%', opacity: 1,ease: Power4.easeOut}, '+=4.6');
		this.TL7
			.fromTo(this.hands, 1.5,  {opacity:0}, {opacity: 1,ease: Power4.easeOut,stagger: .2}, '+=5.7')
			.fromTo(this.zigrivay, 1.1,  {opacity:0}, {opacity: 1,ease: Power4.easeOut}, '+=.4');
		this.parallax = new Parallax(this.scene);
		this.parallax = new Parallax(this.scene2);
	}
	componentWillUnmount() {
		this.parallax.disable();
		// this.TL.play(0);
		// this.TL1.play(0);
		// this.TL1.restart(5);
		// this.TL1.invalidate().restart(5);
		this.TL1 = gsap.timeline({restarted: true});
		// this.TL.fromTo(this.cupItem, 1.7,  {opacity: 0},{ease: "back(3.5)",x: -550, opacity: 1,delay: 1.5});
		this.TL1.to(this.circleItem, .2, {y: -100,opacity: 0,ease: Power4.easeOut}, '-=1');



	}
	render(){
		return (
			<>
				<div className={s.container} ref={el => {
					this.scene = el
				}}>
					<svg data-depth="0.6" className={s.circle} xmlns="http://www.w3.org/2000/svg" width="100%"
					     height="100%" viewBox="0 0 203 198">
						<g id="ComponentCirc" transform="translate(-69 -825)">
							<circle ref={el => (this.circleItem = el)} id="Ellipse_1" data-name="Ellipse 1" cx="76.5"
							        cy="75.5" r="48.5" transform="translate(123 872)" fill="#b88026" opacity="0.5"/>
							<circle ref={el => (this.circleItemTwo = el)} id="Ellipse_2" data-name="Ellipse 2" cx="49.5"
							        cy="48.5" r="34.5" transform="translate(137 886)" fill="#b88026"/>
							<g ref={el => (this.circleItemThree = el)} id="Ellipse_3" data-name="Ellipse 3"
							   transform="translate(109 858)" fill="none" stroke="#b88026" strokeWidth="3"
							   opacity="0.44">
								<circle cx="105" cy="103" r="63" stroke="none"/>
								<circle cx="105" cy="103" r="60.5" fill="none"/>
							</g>
							<rect id="Rectangle_3" data-name="Rectangle 3" width="203" height="198"
							      transform="translate(69 825)" fill="none"/>
						</g>
					</svg>
				</div>
				<div className={s.content_zigrivay}>
					<div className={s._zigrivay} ref={el => {
						this.scene2 = el
					}}>
						<svg data-depth="0.3" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 282.5 102">
							<g id="Group_zigrivay" transform="translate(-109.5 -300.5)">
								<g id="handss" transform="translate(112 303)" ref={el => (this.hands = el)}>
									<path id="Path_5" data-name="Path 5" d="M5263.25,771.362V756.895l3.338-3.895h14.653" transform="translate(-5263.064 -753)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
									<path id="Path_7" data-name="Path 7" d="M0,18.362V3.895L3.476,0H18.732" transform="translate(0 97) rotate(-90)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
									<path id="Path_8" data-name="Path 8" d="M0,18.362V3.895L3.476,0H18.732" transform="translate(102.998 96.813) rotate(-180)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
									<path id="Path_6" data-name="Path 6" d="M0,18.362V3.895L3.338,0H17.991" transform="translate(102.812 0.185) rotate(90)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
									<g id="hands" transform="translate(13.544 23.76)">
										<path id="Path_134" data-name="Path 134" d="M35.317,21.965,33.1,19.078S17.1,17.745,14.438,17.3,0,5.528,0,4.2.056,1.364,1.111.42s3.11,0,3.11,0,9.328,10.44,10.217,10.662,13.772,1.111,14.882,0,.667-3.776,0-5.109-12.883,0-12.883,0-2-1.944-2-3.332,2-2.221,2-2.221S34.65.2,36.428.42,44.2,12.192,44.2,12.192" transform="matrix(0.978, -0.208, 0.208, 0.978, 33.183, 36.854)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="5"/>
										<path id="Path_135" data-name="Path 135" d="M3057.25,1599.494s12.328,9.329,13.994,9.329,20.324-7.33,20.324-7.33,1.083-2.666,0-4-4.332-1.333-4.332-1.333-10.495,4.165-10.912,3.665-.417-1.666-1.083-3-.667-3.082,0-3.332,15.243-2.832,16.326-2.665,14.077,6.664,14.993,6.664,2-1.5,2.666-3.165.916-2.832,0-3.5-20.158-9.662-21.99-9.329-22.156,7.663-23.322,7.33a2.362,2.362,0,0,1-1.5-1" transform="translate(-3057.25 -1581.493)" fill="none" stroke="#fff" strokeWidth="5"/>
									</g>
								</g>
								<g id="zigrivay" transform="translate(224.517 327.209)" ref={el => (this.zigrivay = el)}>
									<g id="Group_14" data-name="Group 14">
										<path id="Path_103" data-name="Path 103" d="M.83,4.456V1.416a8.626,8.626,0,0,0,5.12,1.6,4.721,4.721,0,0,0,2.994-.873A2.822,2.822,0,0,0,10.057-.2q0-3.2-4.52-3.2h-2.2v-2.48H5.4a4.829,4.829,0,0,0,2.974-.8A2.665,2.665,0,0,0,9.431-8.931a2.493,2.493,0,0,0-.893-2.007,3.688,3.688,0,0,0-2.453-.753,8.491,8.491,0,0,0-4.627,1.44v-2.827a10.842,10.842,0,0,1,5.107-1.16A7.1,7.1,0,0,1,11.1-12.925a4.19,4.19,0,0,1,1.653,3.447A4.436,4.436,0,0,1,9.057-4.811v.053A4.917,4.917,0,0,1,12.2-3.291,4.3,4.3,0,0,1,13.364-.224,5.075,5.075,0,0,1,11.4,3.963a8.382,8.382,0,0,1-5.36,1.56A10.49,10.49,0,0,1,.83,4.456Z" transform="translate(-0.83 17.592)" fill="#fff"/>
										<path id="Path_104" data-name="Path 104" d="M2.843-11.276c-.433,0-.249-.137-.553-.412a1.342,1.342,0,0,1-.455-1.04,1.342,1.342,0,0,1,.455-1.04c.3-.274.119-.412.553-.412s.321.137.618.412a1.357,1.357,0,0,1,.444,1.04,1.357,1.357,0,0,1-.444,1.04C3.165-11.413,3.277-11.276,2.843-11.276ZM1.76-8.372A1.245,1.245,0,0,1,2.291-9.5a3,3,0,0,1,1.614-.347V-.095a1.25,1.25,0,0,1-.531,1.116,2.921,2.921,0,0,1-1.614.358Z" transform="translate(13.333 20.847)" fill="#fff"/>
										<path id="Path_105" data-name="Path 105" d="M4.362,0A6.894,6.894,0,0,0,2.17.335a3.675,3.675,0,0,0-1.587.972A2.1,2.1,0,0,0,0,2.764q0,1.1,1.447,1.166a2.443,2.443,0,0,1,.983-1.674,3.329,3.329,0,0,1,1.954-.551,4.164,4.164,0,0,1,1.879.346,1.108,1.108,0,0,1,.669,1.037,1.223,1.223,0,0,1-.594,1.08A7.2,7.2,0,0,1,4.125,4.9a14.77,14.77,0,0,0-2.354.713,2.929,2.929,0,0,0-1.3.983A2.7,2.7,0,0,0,.043,8.185,2.481,2.481,0,0,0,.561,9.729,3.428,3.428,0,0,0,2.019,10.8a5.641,5.641,0,0,0,2.17.389,7.278,7.278,0,0,0,2.149-.3,3.868,3.868,0,0,0,1.576-.875,1.791,1.791,0,0,0,.594-1.328q0-1.058-1.6-1.123a2.011,2.011,0,0,1-.788,1.425A3.015,3.015,0,0,1,4.254,9.5a3.08,3.08,0,0,1-1.576-.356,1.064,1.064,0,0,1-.6-.939,1,1,0,0,1,.551-.918,7.523,7.523,0,0,1,1.89-.615A8.693,8.693,0,0,0,7.9,5.388,2.682,2.682,0,0,0,8.984,3.11,2.608,2.608,0,0,0,7.763.821,6.046,6.046,0,0,0,4.362,0Z" transform="translate(29.342 22.187) rotate(180)" fill="#fff"/>
										<path id="Path_106" data-name="Path 106" d="M1.32-8.533a1.522,1.522,0,0,1,.509-1.192,2.232,2.232,0,0,1,1.528-.455v1.192q-.108.152-.217.293T2.924-8.4l.087.087A5.067,5.067,0,0,1,4.538-9.692a4.118,4.118,0,0,1,2.069-.488,4.217,4.217,0,0,1,2.98,1.051,3.584,3.584,0,0,1,1.138,2.763v3.619A3.46,3.46,0,0,1,9.522,0a4.584,4.584,0,0,1-3.11,1.04,4.238,4.238,0,0,1-1.8-.4,4.94,4.94,0,0,1-1.5-1.051L3.054-.3a2.7,2.7,0,0,0,.455.477V3.8q0,1.582-2.189,1.582ZM6.044-.84a2.93,2.93,0,0,0,1.885-.542,1.815,1.815,0,0,0,.672-1.5V-6.258a1.808,1.808,0,0,0-.672-1.506,3.011,3.011,0,0,0-1.907-.531,2.9,2.9,0,0,0-1.809.553,1.67,1.67,0,0,0-.726,1.376v3.6a1.685,1.685,0,0,0,.7,1.376A2.916,2.916,0,0,0,6.044-.84Z" transform="translate(31.716 21.181)" fill="#fff"/>
										<path id="Path_107" data-name="Path 107" d="M2.843-11.276c-.433,0-.249-.137-.553-.412a1.342,1.342,0,0,1-.455-1.04,1.342,1.342,0,0,1,.455-1.04c.3-.274.119-.412.553-.412s.321.137.618.412a1.357,1.357,0,0,1,.444,1.04,1.357,1.357,0,0,1-.444,1.04C3.165-11.413,3.277-11.276,2.843-11.276ZM1.76-8.372A1.245,1.245,0,0,1,2.291-9.5a3,3,0,0,1,1.614-.347V-.095a1.25,1.25,0,0,1-.531,1.116,2.921,2.921,0,0,1-1.614.358Z" transform="translate(44.754 20.847)" fill="#fff"/>
										<path id="Path_108" data-name="Path 108" d="M4956.667,760.32V742.063s1.971-3.4,3.943-3.4,2.958,1.327,3.944,3.4-1.9,6.039-1.9,6.039l-5.988,1.391h6.718a7.36,7.36,0,0,1,2.191,3.184c.548,1.858.731,2.335,0,4.246s-.693,2.547-2.92,3.4S4956.667,760.32,4956.667,760.32Z" transform="translate(-4902.669 -738.667)" fill="none" stroke="#fff" strokeWidth="2"/>
										<path id="Path_109" data-name="Path 109" d="M4.941,1.006A4.349,4.349,0,0,1,2,.024,3.284,3.284,0,0,1,.86-2.6,3.262,3.262,0,0,1,2.069-5.256,4.773,4.773,0,0,1,5.2-6.25,4.424,4.424,0,0,1,8.548-4.868l.086-.086a7.113,7.113,0,0,0-.583-.561V-6.25a2,2,0,0,0-.669-1.609A2.8,2.8,0,0,0,5.5-8.431,3.361,3.361,0,0,0,2.35-6.746a1.627,1.627,0,0,1-.659-.486,1.02,1.02,0,0,1-.248-.637A1.53,1.53,0,0,1,2.026-9a4.313,4.313,0,0,1,1.555-.853,6.514,6.514,0,0,1,2.073-.324A4.946,4.946,0,0,1,8.98-9.143a3.531,3.531,0,0,1,1.209,2.829V-.57a1.409,1.409,0,0,1-.5,1.2,2.53,2.53,0,0,1-1.533.378V.034q.453-.5.5-.561L8.569-.613A4.682,4.682,0,0,1,6.982.607,4.869,4.869,0,0,1,4.941,1.006ZM5.395-.635a3.326,3.326,0,0,0,1.987-.518A1.687,1.687,0,0,0,8.094-2.6a1.744,1.744,0,0,0-.713-1.468,3.147,3.147,0,0,0-1.944-.54,2.808,2.808,0,0,0-1.814.54A1.786,1.786,0,0,0,2.955-2.6,1.749,1.749,0,0,0,3.6-1.153,2.8,2.8,0,0,0,5.395-.635Z" transform="translate(65.183 21.181)" fill="#fff"/>
										<g id="u" transform="translate(78.132 8.216)">
											<path id="Path_33" data-name="Path 33" d="M10.491-.765q0,1.771-2.073,1.771V-.354a2.791,2.791,0,0,0,.475-.626l-.086-.086A5.217,5.217,0,0,1,7.187.445a4.123,4.123,0,0,1-2.138.561,4.078,4.078,0,0,1-2.03-.5A3.524,3.524,0,0,1,1.637-.883,4.094,4.094,0,0,1,1.14-2.9V-8.712a1.241,1.241,0,0,1,.529-1.123A3.036,3.036,0,0,1,3.3-10.18v7.17a2.1,2.1,0,0,0,.583,1.555,2.312,2.312,0,0,0,1.706.583,2.846,2.846,0,0,0,1.965-.713,2.254,2.254,0,0,0,.8-1.749V-8.712a1.25,1.25,0,0,1,.518-1.123,2.976,2.976,0,0,1,1.62-.346Z" transform="translate(-1.14 12.965)" fill="#fff"/>
											<path id="Path_37" data-name="Path 37" d="M4903.375,852.25c.668.3.778,1.219,2.675,1.2s1.956-.9,2.607-1.2" transform="translate(-4901.469 -852.25)" fill="none" stroke="#fff" strokeLinejoin="bevel" strokeWidth="0.7"/>
										</g>
									</g>
									<g id="Group_16" data-name="Group 16" transform="translate(5.149 -3.562)">
										<path id="Path_116" data-name="Path 116" d="M6.032,6.446a6.685,6.685,0,0,1-2.316-.382A4.075,4.075,0,0,1,2.073,5.022a2.1,2.1,0,0,1-.6-1.447q0-1.25,1.69-1.25a2.121,2.121,0,0,0,.8,1.644,3.232,3.232,0,0,0,2.073.6q2.8,0,2.8-2.756V.657A2.888,2.888,0,0,0,9.321.148L9.251.032A5.108,5.108,0,0,1,7.6,1.144a4.922,4.922,0,0,1-1.98.44,5.181,5.181,0,0,1-2.327-.509A3.906,3.906,0,0,1,1.679-.35,3.877,3.877,0,0,1,1.1-2.469V-6.1a3.781,3.781,0,0,1,.6-2.107A4.144,4.144,0,0,1,3.323-9.659a4.861,4.861,0,0,1,2.246-.521,4.228,4.228,0,0,1,2.165.533A5.693,5.693,0,0,1,9.367-8.189l.093-.093A4.45,4.45,0,0,0,9-8.883q0-1.3,2.177-1.3V1.537a4.955,4.955,0,0,1-.66,2.559A4.507,4.507,0,0,1,8.684,5.833,5.62,5.62,0,0,1,6.032,6.446ZM6.1-.408a3.154,3.154,0,0,0,1.98-.614,1.81,1.81,0,0,0,.8-1.47V-6.1a1.807,1.807,0,0,0-.787-1.482,3.108,3.108,0,0,0-1.945-.6,3.122,3.122,0,0,0-2.026.579,1.979,1.979,0,0,0-.706,1.621v3.381A1.987,1.987,0,0,0,4.122-1,3,3,0,0,0,6.1-.408Z" transform="translate(88.708 50.001)" fill="#fff"/>
										<path id="Path_117" data-name="Path 117" d="M5.954,1.815a6.192,6.192,0,0,1-2.617-.533A4.426,4.426,0,0,1,1.52-.188a3.557,3.557,0,0,1-.66-2.1V-5.919a3.8,3.8,0,0,1,.648-2.154,4.486,4.486,0,0,1,1.806-1.54,5.923,5.923,0,0,1,2.64-.567,5.923,5.923,0,0,1,2.64.567,4.573,4.573,0,0,1,1.818,1.54,3.752,3.752,0,0,1,.66,2.154v3.636a3.557,3.557,0,0,1-.66,2.1,4.413,4.413,0,0,1-1.829,1.47A6.271,6.271,0,0,1,5.954,1.815Zm0-1.991A3.238,3.238,0,0,0,8.039-.79,1.988,1.988,0,0,0,8.8-2.423v-3.4A2.123,2.123,0,0,0,8.027-7.54a3.128,3.128,0,0,0-2.073-.648,3.128,3.128,0,0,0-2.073.648,2.123,2.123,0,0,0-.776,1.714v3.4A1.988,1.988,0,0,0,3.87-.79,3.238,3.238,0,0,0,5.954-.176Z" transform="translate(103.722 51.159)" fill="#fff"/>
										<path id="Path_118" data-name="Path 118" d="M4896.333,761.895l4.886-10.561,4.729,10.561" transform="translate(-4777.458 -709.766)" fill="none" stroke="#fff" strokeWidth="2"/>
										<path id="Path_119" data-name="Path 119" d="M5.954,1.815a6.192,6.192,0,0,1-2.617-.533A4.426,4.426,0,0,1,1.52-.188a3.557,3.557,0,0,1-.66-2.1V-5.919a3.8,3.8,0,0,1,.648-2.154,4.486,4.486,0,0,1,1.806-1.54,5.923,5.923,0,0,1,2.64-.567,5.923,5.923,0,0,1,2.64.567,4.573,4.573,0,0,1,1.818,1.54,3.752,3.752,0,0,1,.66,2.154v3.636a3.557,3.557,0,0,1-.66,2.1,4.413,4.413,0,0,1-1.829,1.47A6.271,6.271,0,0,1,5.954,1.815Zm0-1.991A3.238,3.238,0,0,0,8.039-.79,1.988,1.988,0,0,0,8.8-2.423v-3.4A2.123,2.123,0,0,0,8.027-7.54a3.128,3.128,0,0,0-2.073-.648,3.128,3.128,0,0,0-2.073.648,2.123,2.123,0,0,0-.776,1.714v3.4A1.988,1.988,0,0,0,3.87-.79,3.238,3.238,0,0,0,5.954-.176Z" transform="translate(130.352 50.001)" fill="#fff"/>
										<path id="Path_120" data-name="Path 120" d="M.99-9.159a1.252,1.252,0,0,1,.55-1.094,2.734,2.734,0,0,1,1.571-.382v5.367h6.6v-3.89a1.254,1.254,0,0,1,.54-1.1,2.734,2.734,0,0,1,1.561-.373V.359a1.259,1.259,0,0,1-.54,1.094,2.685,2.685,0,0,1-1.561.382V-3.636H3.11V.359a1.252,1.252,0,0,1-.55,1.094A2.734,2.734,0,0,1,.99,1.835Z" transform="translate(144.266 51.087)" fill="#fff"/>
										<path id="Path_121" data-name="Path 121" d="M2.918-11.077c-.463,0-.266-.147-.59-.44a1.434,1.434,0,0,1-.486-1.112,1.434,1.434,0,0,1,.486-1.112c.324-.293.127-.44.59-.44s.343.147.66.44a1.45,1.45,0,0,1,.475,1.112,1.45,1.45,0,0,1-.475,1.112C3.261-11.224,3.381-11.077,2.918-11.077ZM1.76-7.974a1.331,1.331,0,0,1,.567-1.2,3.2,3.2,0,0,1,1.725-.371V.872a1.336,1.336,0,0,1-.567,1.193,3.122,3.122,0,0,1-1.725.382Z" transform="translate(158.282 50.527)" fill="#fff"/>
									</g>
									<g id="Group_15" data-name="Group 15" transform="translate(-6 -3.733)">
										<path id="Path_111" data-name="Path 111" d="M6.389,2.417a6,6,0,0,1-2.675-.584A4.657,4.657,0,0,1,1.841.228,4.03,4.03,0,0,1,1.16-2.058V-5.535a4.129,4.129,0,0,1,.717-2.371A5.013,5.013,0,0,1,3.786-9.572a5.642,5.642,0,0,1,2.6-.608A5.683,5.683,0,0,1,8.966-9.6a4.659,4.659,0,0,1,1.848,1.617A4.17,4.17,0,0,1,11.5-5.632v1.508a.947.947,0,0,1-.328.717,1.122,1.122,0,0,1-.79.3H3.519v.924a2.525,2.525,0,0,0,.73,1.885,2.931,2.931,0,0,0,2.14.717A3.175,3.175,0,0,0,8.516-.2a2.063,2.063,0,0,0,.717-1.642,2.281,2.281,0,0,1,1.435.28A1.168,1.168,0,0,1,11.228-.5,2,2,0,0,1,10.559.921,4.887,4.887,0,0,1,8.784,2,6.79,6.79,0,0,1,6.389,2.417ZM9.282-4.927v-.705a2.379,2.379,0,0,0-.8-1.86A3.02,3.02,0,0,0,6.389-8.21a2.974,2.974,0,0,0-2.079.717,2.4,2.4,0,0,0-.79,1.86v.705Z" transform="translate(17.688 48.912)" fill="#fff"/>
										<path id="Path_112" data-name="Path 112" d="M1.32-8.21q0-1.97,2.335-1.97v1.532a4.535,4.535,0,0,0-.535.681l.122.1A5.454,5.454,0,0,1,5.126-9.548a5.157,5.157,0,0,1,2.517-.632A4.1,4.1,0,0,1,10.731-9a4.17,4.17,0,0,1,1.143,3.028V.763a1.4,1.4,0,0,1-.6,1.252,3.278,3.278,0,0,1-1.812.4v-8.1a2.385,2.385,0,0,0-.632-1.727,2.449,2.449,0,0,0-1.848-.657,3.541,3.541,0,0,0-1.605.377A3.1,3.1,0,0,0,4.19-6.678a2.384,2.384,0,0,0-.438,1.386V.763a1.4,1.4,0,0,1-.6,1.265,3.418,3.418,0,0,1-1.836.389Z" transform="translate(31.098 48.912)" fill="#fff"/>
										<path id="Path_113" data-name="Path 113" d="M4896.333,762.425l5.132-11.091,4.966,11.091" transform="translate(-4849.464 -710.768)" fill="none" stroke="#fff" strokeWidth="2"/>
										<path id="Path_114" data-name="Path 114" d="M6.21,2.417a6.5,6.5,0,0,1-2.748-.559A4.648,4.648,0,0,1,1.553.314a3.736,3.736,0,0,1-.693-2.2V-5.705a3.99,3.99,0,0,1,.681-2.262,4.711,4.711,0,0,1,1.9-1.617,6.221,6.221,0,0,1,2.772-.6,6.221,6.221,0,0,1,2.772.6,4.8,4.8,0,0,1,1.909,1.617,3.94,3.94,0,0,1,.693,2.262v3.818a3.736,3.736,0,0,1-.693,2.2A4.634,4.634,0,0,1,8.97,1.858,6.586,6.586,0,0,1,6.21,2.417Zm0-2.091A3.4,3.4,0,0,0,8.4-.319a2.088,2.088,0,0,0,.8-1.714V-5.608a2.229,2.229,0,0,0-.815-1.8A3.285,3.285,0,0,0,6.21-8.089a3.285,3.285,0,0,0-2.177.681,2.229,2.229,0,0,0-.815,1.8v3.575a2.088,2.088,0,0,0,.8,1.714A3.4,3.4,0,0,0,6.21.326Z" transform="translate(58.965 48.912)" fill="#fff"/>
										<path id="Path_115" data-name="Path 115" d="M1.32-8.441c0-1.159,1.732-1.76,3.924-1.739s4.253.594,4.845,1.825a6.437,6.437,0,0,1,4.768-1.825A4.056,4.056,0,0,1,17.8-9.149a3.57,3.57,0,0,1,1.063,2.683V-.519A1.173,1.173,0,0,1,18.207.586a4.387,4.387,0,0,1-2,.354V-6.316A1.817,1.817,0,0,0,14.13-8.355a3.058,3.058,0,0,0-1.924.612,2.032,2.032,0,0,0-.794,1.707V-.519A1.171,1.171,0,0,1,10.766.6,4.337,4.337,0,0,1,8.8.94V-6.316A2.1,2.1,0,0,0,8.29-7.808,2.077,2.077,0,0,0,6.7-8.355a2.842,2.842,0,0,0-1.951.676,2.178,2.178,0,0,0-.767,1.707V-.519A1.173,1.173,0,0,1,3.325.586a4.387,4.387,0,0,1-2,.354Z" transform="translate(72.116 49.891)" fill="#fff"/>
										<path id="Path_172" data-name="Path 172" d="M6.569-11.714H.66Q.66-14,2.776-14H15.057a2.436,2.436,0,0,1-.535,1.7,2.038,2.038,0,0,1-1.581.584H9.172V1.175A1.848,1.848,0,0,1,8.5,2.707a3.035,3.035,0,0,1-1.933.535Z" transform="translate(2.989 50.519)" fill="#fff"/>
									</g>
								</g>
							</g>
						</svg>

					</div>
				</div>
		</>
		)
	}
}

export default CircleThree;