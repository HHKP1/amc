import {gsap, Power4} from "gsap";
import Parallax from "parallax-js";
import React from 'react';
import s from './circleTwo.module.css';

class CircleTwo extends React.Component{

	componentDidMount() {
		this.TL = gsap.timeline({restarted: true});
		this.TL1 = gsap.timeline({restarted: true});
		this.TL2 = gsap.timeline({restarted: true});
		this.TL7 = gsap.timeline({restarted: true});


		this.TL.fromTo(this.circleItem, 1.7, {opacity:0, scale:0}, {scale:1.1, transformOrigin: '50% 50%', opacity: .5,ease: Power4.easeOut}, '+=3.4');
		this.TL1.fromTo(this.circleItemTwo, 1.5,  {opacity:0, scale:0}, {scale:1.1, transformOrigin: '50% 50%', opacity: 1,ease: Power4.easeOut}, '+=3.7');
		this.TL2.fromTo(this.circleItemThree, 1.2,  {opacity:0, scale:0}, {scale:1.1, transformOrigin: '50% 50%', opacity: 1,ease: Power4.easeOut}, '+=4');
		this.TL7
			.fromTo(this.ears, 1.5,  {opacity:0}, {opacity: 1,ease: Power4.easeOut,stagger: .2}, '+=5.7')
			.fromTo(this.sluxay, 1.1,  {opacity:0}, {opacity: 1,ease: Power4.easeOut}, '+=.9');
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
			<div  className={s.container} ref={el => {this.scene = el}}>
				<svg data-depth="0.4" className={s.circle}   xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 203 198">
					<g id="ComponentCirc" transform="translate(-69 -825)">
						<circle ref={el => (this.circleItem = el)} id="Ellipse_1" data-name="Ellipse 1" cx="76.5" cy="75.5" r="48.5" transform="translate(123 872)" fill="#b88026" opacity="0.5"/>
						<circle ref={el => (this.circleItemTwo = el)} id="Ellipse_2" data-name="Ellipse 2" cx="49.5" cy="48.5" r="34.5" transform="translate(137 886)" fill="#b88026"/>
						<g ref={el => (this.circleItemThree = el)} id="Ellipse_3" data-name="Ellipse 3" transform="translate(109 858)" fill="none" stroke="#b88026" strokeWidth="3" opacity="0.44">
							<circle cx="105" cy="103" r="63" stroke="none"/>
							<circle cx="105" cy="103" r="60.5" fill="none"/>
						</g>
						<rect id="Rectangle_3" data-name="Rectangle 3" width="203" height="198" transform="translate(69 825)" fill="none"/>
					</g>
				</svg>
			</div>
				<div className={s.content_nose} >
					<div className={s._nose} ref={el => {
						this.scene2 = el
					}}>
						<svg data-depth="0.3" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 264.5 102">
							<g id="Group_ears" transform="translate(-1345.563 -524.833)">
								<g id="ears" transform="translate(1511.667 527.333)" ref={el => (this.ears = el)}>
									<path id="Path_5" data-name="Path 5" d="M5263.25,773.074V757.258L5266.9,753h16.019" transform="translate(-5263.047 -753)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
									<path id="Path_7" data-name="Path 7" d="M0,20.074V4.258L3.8,0H20.479" transform="translate(0 97) rotate(-90)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
									<path id="Path_8" data-name="Path 8" d="M0,20.074V4.258L3.8,0H20.479" transform="translate(95.897 96.796) rotate(-180)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
									<path id="Path_6" data-name="Path 6" d="M0,20.074V4.258L3.65,0H19.668" transform="translate(95.694 0.203) rotate(90)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
									<g id="ear" transform="translate(27.946 11.608)">
										<path id="Path_129" data-name="Path 129" d="M2881.5,1603.981s4.688-26.231,21.737-26.231,22.164,19.328,22.164,26.231-10.145,12.057-15.089,19.512-2.557,9.2-2.727,14.726S2906.9,1650,2897.27,1650s-9.377-15.646-9.377-15.646" transform="translate(-2881.5 -1577.75)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="5"/>
										<path id="Path_130" data-name="Path 130" d="M2886,1616.52s3.622,2.238,6.819,0,6.82-4.688,5.967-8.95-7.032-3.729-9.377-8.1-2.77-5.541,0-9.377,5.861-7.352,11.082-5.967c2.407.639,7.352,3.09,9.8,5.967a4.145,4.145,0,0,1,0,5.541" transform="translate(-2876.624 -1571.811)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="5"/>
									</g>
								</g>
								<g id="sluxay" transform="translate(1345.563 542.75)" ref={el => (this.sluxay = el)}>
									<path id="Path_136" data-name="Path 136" d="M8.577,1.57a10.055,10.055,0,0,1-3.9-.713A6.158,6.158,0,0,1,2.023-1.128a4.736,4.736,0,0,1-.943-2.9V-8.63a4.689,4.689,0,0,1,.943-2.885A6.138,6.138,0,0,1,4.65-13.478a9.929,9.929,0,0,1,3.85-.7,11.883,11.883,0,0,1,3.863.581A6.235,6.235,0,0,1,15-11.986a3.407,3.407,0,0,1,.943,2.369A1.315,1.315,0,0,1,15.41-8.51a2.306,2.306,0,0,1-1.428.406,5.168,5.168,0,0,1-.765-.066,6.467,6.467,0,0,0,.051-.9,2.328,2.328,0,0,0-.612-1.59,3.988,3.988,0,0,0-1.7-1.075A7.343,7.343,0,0,0,8.5-12.118a6.341,6.341,0,0,0-2.422.439,3.848,3.848,0,0,0-1.67,1.239,2.944,2.944,0,0,0-.6,1.81v4.607A2.935,2.935,0,0,0,4.42-2.192a4.01,4.01,0,0,0,1.7,1.25,6.37,6.37,0,0,0,2.461.45,6.436,6.436,0,0,0,3.481-.845,2.527,2.527,0,0,0,1.339-2.2,8.592,8.592,0,0,0-.051-.9,3.8,3.8,0,0,1,.688-.066,2.333,2.333,0,0,1,1.479.439,1.425,1.425,0,0,1,.561,1.185A3.317,3.317,0,0,1,15.13-.569a6.122,6.122,0,0,1-2.652,1.579A12.523,12.523,0,0,1,8.577,1.57Z" transform="translate(1.026 14.18)" fill="#fff"/>
									<path id="Path_137" data-name="Path 137" d="M4896.333,761.338l4.629-10,4.48,10" transform="translate(-4876.541 -745.292)" fill="none" stroke="#fff" strokeWidth="2"/>
									<path id="Path_138" data-name="Path 138" d="M2.681,5.548A1.461,1.461,0,0,1,1.54,5.088,2.044,2.044,0,0,1,1.1,3.727a5.682,5.682,0,0,0,1.009.11,2.033,2.033,0,0,0,1.47-.526A6.284,6.284,0,0,0,4.743,1.4L5.138.481.86-10a2.24,2.24,0,0,1,.439-.121,2.709,2.709,0,0,1,.5-.055,2.09,2.09,0,0,1,.954.263,1.238,1.238,0,0,1,.581.658L6.081-2.217l-.329.943.154.066L9.064-9.259a1.24,1.24,0,0,1,.57-.68,1.848,1.848,0,0,1,.943-.241,2.883,2.883,0,0,1,.515.055,1.741,1.741,0,0,1,.428.121L6.607,2.038A7.569,7.569,0,0,1,4.973,4.682,3.193,3.193,0,0,1,2.681,5.548Z" transform="translate(29.521 15.664)" fill="#fff"/>
									<path id="Path_139" data-name="Path 139" d="M2.154,1.183a2.382,2.382,0,0,1-.691-.11A1.417,1.417,0,0,1,.86.722L4.83-4.762,1.277-9.829a1.121,1.121,0,0,1,.537-.263,2.854,2.854,0,0,1,.669-.088,1.468,1.468,0,0,1,1.338.614L5.993-6.3l-.439.614.132.088,2.676-3.97a1.6,1.6,0,0,1,1.426-.614,2.517,2.517,0,0,1,.625.088,1.105,1.105,0,0,1,.515.263L7.353-4.762,11.324.722a1.268,1.268,0,0,1-.548.351,2.008,2.008,0,0,1-.636.11,2.028,2.028,0,0,1-.757-.154A1.237,1.237,0,0,1,8.823.634L6.081-3.38,3.361.634a1.124,1.124,0,0,1-.5.406A1.746,1.746,0,0,1,2.154,1.183Z" transform="translate(41.586 15.664)" fill="#fff"/>
									<path id="Path_140" data-name="Path 140" d="M4.992,1.144A4.4,4.4,0,0,1,2.019.149,3.324,3.324,0,0,1,.86-2.507,3.3,3.3,0,0,1,2.084-5.2,4.832,4.832,0,0,1,5.254-6.2,4.479,4.479,0,0,1,8.642-4.8L8.73-4.89a7.2,7.2,0,0,0-.59-.568V-6.2A2.026,2.026,0,0,0,7.462-7.83a2.839,2.839,0,0,0-1.9-.579A3.4,3.4,0,0,0,2.368-6.7,1.647,1.647,0,0,1,1.7-7.2a1.032,1.032,0,0,1-.251-.645,1.549,1.549,0,0,1,.59-1.148,4.366,4.366,0,0,1,1.574-.863,6.594,6.594,0,0,1,2.1-.328A5.006,5.006,0,0,1,9.079-9.131,3.574,3.574,0,0,1,10.3-6.267V-.452A1.427,1.427,0,0,1,9.8.761a2.561,2.561,0,0,1-1.552.383V.16q.459-.5.5-.568L8.664-.5A4.74,4.74,0,0,1,7.057.739,4.929,4.929,0,0,1,4.992,1.144ZM5.451-.518a3.367,3.367,0,0,0,2.011-.525,1.708,1.708,0,0,0,.721-1.465,1.765,1.765,0,0,0-.721-1.487A3.186,3.186,0,0,0,5.494-4.54a2.843,2.843,0,0,0-1.836.547A1.808,1.808,0,0,0,2.98-2.507a1.77,1.77,0,0,0,.656,1.465A2.831,2.831,0,0,0,5.451-.518Z" transform="translate(54.664 15.664)" fill="#fff"/>
									<g id="u" transform="translate(68.859 2.665)">
										<path id="Path_33" data-name="Path 33" d="M10.606-.649q0,1.793-2.1,1.793V-.234a2.826,2.826,0,0,0,.481-.634L8.9-.955A5.281,5.281,0,0,1,7.261.575,4.173,4.173,0,0,1,5.1,1.144a4.128,4.128,0,0,1-2.055-.5,3.567,3.567,0,0,1-1.4-1.41,4.145,4.145,0,0,1-.5-2.044v-5.88A1.256,1.256,0,0,1,1.676-9.83a3.073,3.073,0,0,1,1.65-.35v7.258a2.127,2.127,0,0,0,.59,1.574,2.34,2.34,0,0,0,1.727.59A2.881,2.881,0,0,0,7.633-1.48,2.282,2.282,0,0,0,8.441-3.25V-8.694A1.265,1.265,0,0,1,8.966-9.83a3.013,3.013,0,0,1,1.64-.35Z" transform="translate(-1.14 12.999)" fill="#fff"/>
										<path id="Path_37" data-name="Path 37" d="M4903.375,852.25c.677.3.789,1.234,2.708,1.217s1.979-.912,2.639-1.217" transform="translate(-4901.446 -852.25)" fill="none" stroke="#fff" strokeLinejoin="bevel" strokeWidth="0.7"/>
									</g>
									<path id="Path_141" data-name="Path 141" d="M0,12.288a.863.863,0,0,0,.289.671,1.057,1.057,0,0,0,.737.261h5.09a4.074,4.074,0,0,0,2.955-1.053A3.793,3.793,0,0,0,10.162,9.3a3.155,3.155,0,0,0-1.883-3.1V6.153A2.8,2.8,0,0,0,9.537,5.072a3.2,3.2,0,0,0,.438-1.715V1.585A1.417,1.417,0,0,0,9.463.41,2.327,2.327,0,0,0,7.98,0V3.244q0,2.126-1.846,2.126H1.976V1.585Q1.976,0,0,0Zm6.023-5.2a2.049,2.049,0,0,1,1.557.6,2.281,2.281,0,0,1,.569,1.641,2.209,2.209,0,0,1-.541,1.613,2.126,2.126,0,0,1-1.585.55H1.976v-4.4Z" transform="translate(10.659 40.947) rotate(180)" fill="#fff"/>
									<path id="Path_142" data-name="Path 142" d="M10.709.978a1.342,1.342,0,0,1-1.163.592,1.367,1.367,0,0,1-.658-.154A1.5,1.5,0,0,1,8.361.89L5.071-4.177,3.492-2.751V.1q0,1.47-2.172,1.47v-14q0-1.755,2.194-1.755L3.492-5.055,8.712-9.771q.79.68.79,1.141a.845.845,0,0,1-.154.515,4.945,4.945,0,0,1-.548.581L6.409-5.362Z" transform="translate(12.017 37.213)" fill="#fff"/>
									<path id="Path_145" data-name="Path 145" d="M4896.333,761.338l4.629-10,4.48,10" transform="translate(-4833.765 -722.259)" fill="none" stroke="#fff" strokeWidth="2"/>
									<path id="Path_146" data-name="Path 146" d="M5.686,1.183a5.866,5.866,0,0,1-2.479-.5A4.193,4.193,0,0,1,1.485-.715,3.37,3.37,0,0,1,.86-2.7V-6.144a3.6,3.6,0,0,1,.614-2.04A4.249,4.249,0,0,1,3.185-9.643a5.611,5.611,0,0,1,2.5-.537,5.611,5.611,0,0,1,2.5.537A4.332,4.332,0,0,1,9.909-8.184a3.554,3.554,0,0,1,.625,2.04V-2.7A3.37,3.37,0,0,1,9.909-.715,4.18,4.18,0,0,1,8.176.678,5.94,5.94,0,0,1,5.686,1.183Zm0-1.887A3.067,3.067,0,0,0,7.66-1.285a1.883,1.883,0,0,0,.724-1.546V-6.056a2.011,2.011,0,0,0-.735-1.623,2.963,2.963,0,0,0-1.963-.614,2.963,2.963,0,0,0-1.963.614,2.011,2.011,0,0,0-.735,1.623v3.225a1.883,1.883,0,0,0,.724,1.546A3.067,3.067,0,0,0,5.686-.7Z" transform="translate(50.361 37.6)" fill="#fff"/>
									<path id="Path_147" data-name="Path 147" d="M5.686,1.183a5.866,5.866,0,0,1-2.479-.5A4.193,4.193,0,0,1,1.485-.715,3.37,3.37,0,0,1,.86-2.7V-6.144a3.6,3.6,0,0,1,.614-2.04A4.249,4.249,0,0,1,3.185-9.643a5.611,5.611,0,0,1,2.5-.537,5.611,5.611,0,0,1,2.5.537A4.332,4.332,0,0,1,9.909-8.184a3.554,3.554,0,0,1,.625,2.04V-2.7A3.37,3.37,0,0,1,9.909-.715,4.18,4.18,0,0,1,8.176.678,5.94,5.94,0,0,1,5.686,1.183Zm0-1.887A3.067,3.067,0,0,0,7.66-1.285a1.883,1.883,0,0,0,.724-1.546V-6.056a2.011,2.011,0,0,0-.735-1.623,2.963,2.963,0,0,0-1.963-.614,2.963,2.963,0,0,0-1.963.614,2.011,2.011,0,0,0-.735,1.623v3.225a1.883,1.883,0,0,0,.724,1.546A3.067,3.067,0,0,0,5.686-.7Z" transform="translate(74.491 37.6)" fill="#fff"/>
									<path id="Path_148" data-name="Path 148" d="M10.709.978a1.342,1.342,0,0,1-1.163.592,1.367,1.367,0,0,1-.658-.154A1.5,1.5,0,0,1,8.361.89L5.071-4.177,3.492-2.751V.1q0,1.47-2.172,1.47v-14q0-1.755,2.194-1.755L3.492-5.055,8.712-9.771q.79.68.79,1.141a.845.845,0,0,1-.154.515,4.945,4.945,0,0,1-.548.581L6.409-5.362Z" transform="translate(86.6 37.213)" fill="#fff"/>
									<path id="Path_149" data-name="Path 149" d="M5.686,1.183a5.866,5.866,0,0,1-2.479-.5A4.193,4.193,0,0,1,1.485-.715,3.37,3.37,0,0,1,.86-2.7V-6.144a3.6,3.6,0,0,1,.614-2.04A4.249,4.249,0,0,1,3.185-9.643a5.611,5.611,0,0,1,2.5-.537,5.611,5.611,0,0,1,2.5.537A4.332,4.332,0,0,1,9.909-8.184a3.554,3.554,0,0,1,.625,2.04V-2.7A3.37,3.37,0,0,1,9.909-.715,4.18,4.18,0,0,1,8.176.678,5.94,5.94,0,0,1,5.686,1.183Zm0-1.887A3.067,3.067,0,0,0,7.66-1.285a1.883,1.883,0,0,0,.724-1.546V-6.056a2.011,2.011,0,0,0-.735-1.623,2.963,2.963,0,0,0-1.963-.614,2.963,2.963,0,0,0-1.963.614,2.011,2.011,0,0,0-.735,1.623v3.225a1.883,1.883,0,0,0,.724,1.546A3.067,3.067,0,0,0,5.686-.7Z" transform="translate(97.523 37.6)" fill="#fff"/>
									<path id="Path_151" data-name="Path 151" d="M6.525,1.183A7.379,7.379,0,0,1,3.742.689,4.4,4.4,0,0,1,1.84-.693a3.249,3.249,0,0,1-.68-2.029v-3.4a3.5,3.5,0,0,1,.667-2.106A4.352,4.352,0,0,1,3.716-9.665,7.1,7.1,0,0,1,6.5-10.18a8.524,8.524,0,0,1,2.594.362A4.225,4.225,0,0,1,10.869-8.8a2.105,2.105,0,0,1,.642,1.514,1.1,1.1,0,0,1-.579.976,2.471,2.471,0,0,1-1.461.318,1.99,1.99,0,0,0-.819-1.645,3.327,3.327,0,0,0-2.1-.636,3.355,3.355,0,0,0-2.09.614,1.921,1.921,0,0,0-.806,1.6v3.2a1.816,1.816,0,0,0,.819,1.536A3.545,3.545,0,0,0,6.6-.726a3.327,3.327,0,0,0,2.1-.636,1.97,1.97,0,0,0,.819-1.623,2.474,2.474,0,0,1,1.486.285,1.08,1.08,0,0,1,.579.965,2.105,2.105,0,0,1-.642,1.514A4.312,4.312,0,0,1,9.144.81,8.532,8.532,0,0,1,6.525,1.183Z" transform="translate(-1.16 65.02)" fill="#fff"/>
									<path id="Path_153" data-name="Path 153" d="M4.992,1.144A4.4,4.4,0,0,1,2.019.149,3.324,3.324,0,0,1,.86-2.507,3.3,3.3,0,0,1,2.084-5.2,4.832,4.832,0,0,1,5.254-6.2,4.479,4.479,0,0,1,8.642-4.8L8.73-4.89a7.2,7.2,0,0,0-.59-.568V-6.2A2.026,2.026,0,0,0,7.462-7.83a2.839,2.839,0,0,0-1.9-.579A3.4,3.4,0,0,0,2.368-6.7,1.647,1.647,0,0,1,1.7-7.2a1.032,1.032,0,0,1-.251-.645,1.549,1.549,0,0,1,.59-1.148,4.366,4.366,0,0,1,1.574-.863,6.594,6.594,0,0,1,2.1-.328A5.006,5.006,0,0,1,9.079-9.131,3.574,3.574,0,0,1,10.3-6.267V-.452A1.427,1.427,0,0,1,9.8.761a2.561,2.561,0,0,1-1.552.383V.16q.459-.5.5-.568L8.664-.5A4.74,4.74,0,0,1,7.057.739,4.929,4.929,0,0,1,4.992,1.144ZM5.451-.518a3.367,3.367,0,0,0,2.011-.525,1.708,1.708,0,0,0,.721-1.465,1.765,1.765,0,0,0-.721-1.487A3.186,3.186,0,0,0,5.494-4.54a2.843,2.843,0,0,0-1.836.547A1.808,1.808,0,0,0,2.98-2.507a1.77,1.77,0,0,0,.656,1.465A2.831,2.831,0,0,0,5.451-.518Z" transform="translate(22.857 65.02)" fill="#fff"/>
									<path id="Path_162" data-name="Path 162" d="M1.32-8.4q0-1.777,2.106-1.777V-8.8a4.09,4.09,0,0,0-.483.614l.11.088a4.92,4.92,0,0,1,1.7-1.514,4.652,4.652,0,0,1,2.27-.57A3.7,3.7,0,0,1,9.809-9.116,3.761,3.761,0,0,1,10.84-6.385V-.309A1.266,1.266,0,0,1,10.3.821a2.957,2.957,0,0,1-1.634.362v-7.3A2.151,2.151,0,0,0,8.1-7.679a2.209,2.209,0,0,0-1.667-.592,3.194,3.194,0,0,0-1.448.34,2.8,2.8,0,0,0-1.075.91,2.15,2.15,0,0,0-.395,1.25V-.309A1.261,1.261,0,0,1,2.976.832a3.084,3.084,0,0,1-1.656.351Z" transform="translate(55.889 65.02)" fill="#fff"/>
									<path id="Path_163" data-name="Path 163" d="M.99-9.237a1.186,1.186,0,0,1,.521-1.036A2.59,2.59,0,0,1,3-10.635v5.084H9.248V-9.237a1.188,1.188,0,0,1,.511-1.045,2.59,2.59,0,0,1,1.479-.354V-.221A1.193,1.193,0,0,1,10.727.816a2.544,2.544,0,0,1-1.479.362V-4H3V-.221A1.186,1.186,0,0,1,2.478.816,2.59,2.59,0,0,1,.99,1.178Z" transform="translate(75.6 64.976)" fill="#fff"/>
									<path id="Path_164" data-name="Path 164" d="M2.857-11.241c-.439,0-.252-.139-.559-.417a1.359,1.359,0,0,1-.461-1.053A1.359,1.359,0,0,1,2.3-13.763c.307-.278.121-.417.559-.417s.325.139.625.417a1.374,1.374,0,0,1,.45,1.053,1.374,1.374,0,0,1-.45,1.053C3.182-11.379,3.3-11.241,2.857-11.241ZM1.76-8.3A1.261,1.261,0,0,1,2.3-9.442a3.032,3.032,0,0,1,1.634-.351V.078a1.266,1.266,0,0,1-.537,1.13A2.957,2.957,0,0,1,1.76,1.57Z" transform="translate(69.094 64.633)" fill="#fff"/>
									<path id="Path_165" data-name="Path 165" d="M10.709.978a1.342,1.342,0,0,1-1.163.592,1.367,1.367,0,0,1-.658-.154A1.5,1.5,0,0,1,8.361.89L5.071-4.177,3.492-2.751V.1q0,1.47-2.172,1.47v-14q0-1.755,2.194-1.755L3.492-5.055,8.712-9.771q.79.68.79,1.141a.845.845,0,0,1-.154.515,4.945,4.945,0,0,1-.548.581L6.409-5.362Z" transform="translate(87.697 64.633)" fill="#fff"/>
									<path id="Path_166" data-name="Path 166" d="M5.686,1.183a5.866,5.866,0,0,1-2.479-.5A4.193,4.193,0,0,1,1.485-.715,3.37,3.37,0,0,1,.86-2.7V-6.144a3.6,3.6,0,0,1,.614-2.04A4.249,4.249,0,0,1,3.185-9.643a5.611,5.611,0,0,1,2.5-.537,5.611,5.611,0,0,1,2.5.537A4.332,4.332,0,0,1,9.909-8.184a3.554,3.554,0,0,1,.625,2.04V-2.7A3.37,3.37,0,0,1,9.909-.715,4.18,4.18,0,0,1,8.176.678,5.94,5.94,0,0,1,5.686,1.183Zm0-1.887A3.067,3.067,0,0,0,7.66-1.285a1.883,1.883,0,0,0,.724-1.546V-6.056a2.011,2.011,0,0,0-.735-1.623,2.963,2.963,0,0,0-1.963-.614,2.963,2.963,0,0,0-1.963.614,2.011,2.011,0,0,0-.735,1.623v3.225a1.883,1.883,0,0,0,.724,1.546A3.067,3.067,0,0,0,5.686-.7Z" transform="translate(98.62 65.02)" fill="#fff"/>
									<path id="Path_167" data-name="Path 167" d="M6.691-3.765H3.97V.991h-2.5V-9.977h2.5v4.306H6.744a5.068,5.068,0,0,1,1.73-3.358,5.556,5.556,0,0,1,3.69-1.2,5.113,5.113,0,0,1,3.9,1.467,5.864,5.864,0,0,1,1.387,4.188A6,6,0,0,1,15.993-.321a5.242,5.242,0,0,1-4.033,1.569A5.223,5.223,0,0,1,8.169-.07,5.291,5.291,0,0,1,6.691-3.765Zm5.355-4.5Q9.2-8.264,9.2-4.5q0,3.781,2.892,3.781,2.828,0,2.828-3.792Q14.917-8.264,12.046-8.264Z" transform="translate(109.648 65.015)" fill="#fff"/>
									<path id="Path_169" data-name="Path 169" d="M1.233,3.32a5.373,5.373,0,0,0,1.217-1.5A3.177,3.177,0,0,0,2.856.359a1.36,1.36,0,0,1-.526.11A1.381,1.381,0,0,1,1.266.03,1.613,1.613,0,0,1,.86-1.111a1.628,1.628,0,0,1,.483-1.217A1.685,1.685,0,0,1,2.571-2.8a1.661,1.661,0,0,1,1.272.515,1.749,1.749,0,0,1,.483,1.239,6.045,6.045,0,0,1-.472,2.523,5.179,5.179,0,0,1-1.371,1.8,1.032,1.032,0,0,1-.7.2A.768.768,0,0,1,1.233,3.32Z" transform="translate(81.071 16.378)" fill="#fff"/>
									<path id="Path_175" data-name="Path 175" d="M9.356.519a6.222,6.222,0,0,1-3.1.728A5.263,5.263,0,0,1,2.287-.262,5.6,5.6,0,0,1,.83-4.322,5.941,5.941,0,0,1,2.367-8.665a5.644,5.644,0,0,1,4.225-1.569A6.266,6.266,0,0,1,9.27-9.7v2.121a4.175,4.175,0,0,0-2.56-.771,3.342,3.342,0,0,0-2.34.814A3.242,3.242,0,0,0,3.347-5.35H7.76v1.724H3.347a3.119,3.119,0,0,0,.943,2.19A3.232,3.232,0,0,0,6.6-.616a4.586,4.586,0,0,0,2.753-.9Z" transform="translate(35.003 65.015)" fill="#fff"/>
									<path id="Path_173" data-name="Path 173" d="M1.32-8.462C1.32-9.607,3.03-10.2,5.2-10.18s4.2.587,4.786,1.8a6.358,6.358,0,0,1,4.71-1.8A4.007,4.007,0,0,1,17.6-9.162a3.527,3.527,0,0,1,1.05,2.651V-.637A1.158,1.158,0,0,1,18,.455a4.334,4.334,0,0,1-1.98.35V-6.363a1.8,1.8,0,0,0-2.047-2.015,3.021,3.021,0,0,0-1.9.6,2.008,2.008,0,0,0-.784,1.686v5.45a1.157,1.157,0,0,1-.638,1.1A4.284,4.284,0,0,1,8.71.8V-6.363a2.073,2.073,0,0,0-.505-1.474,2.052,2.052,0,0,0-1.568-.541,2.807,2.807,0,0,0-1.927.668,2.151,2.151,0,0,0-.758,1.686V-.637A1.158,1.158,0,0,1,3.3.455,4.334,4.334,0,0,1,1.32.8Z" transform="translate(30.489 38.054)" fill="#fff"/>
									<path id="Path_174" data-name="Path 174" d="M5.165-12.257H.66Q.66-14,2.273-14h9.362a1.857,1.857,0,0,1-.408,1.3,1.554,1.554,0,0,1-1.205.445H7.149v9.826a1.409,1.409,0,0,1-.51,1.168,2.313,2.313,0,0,1-1.474.408Z" transform="translate(10.856 69.038)" fill="#fff"/>
								</g>
							</g>
						</svg>

					</div>
				</div>
			</>
		)
	}
}

export default CircleTwo;