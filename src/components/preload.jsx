import React, {useEffect, useRef} from 'react';
import {gsap,Power2} from "gsap";
import r from './preload.module.css';

// const TL = gsap.timeline();

const Preloader = () => {

	let TL = gsap.timeline();
	let bgBl = useRef(null);
	let bgBl2 = useRef(null);
	let RectaN = useRef(null);
	let RectaN1 = useRef(null);


	useEffect(() => {

		TL
			.from([RectaN,RectaN1], .001, {opacity:0})
			.to(bgBl2, 2, {transformOrigin:'50% 50%',rotate: 200, autoAlpha: 1, ease: Power2.ease})
			// .fromTo(bgBl, 1, {autoAlpha: 1, transformOrigin:'50% 50%'}, {scale: 55, autoAlpha: 1, ease: Power2.ease}, '+=2')
			.to(bgBl2, .2, {scale: .9,ease: Power2.easeOut}, '-=.5')
			.fromTo(RectaN, .7, {y: '-1.5%',opacity: 0}, {y: 0,opacity: 1, transformOrigin: '50% 50%',  ease: Power2.easeIn}, '-=.5')
			.fromTo(RectaN1, .5, {y: 60,opacity: 0}, {y: 43,opacity: 1, transformOrigin: '50% 50%', ease: Power2.easeIn}, '-=.5')
			.fromTo(bgBl2, 2.5, {scale: 1,autoAlpha: 1,ease:Power2.easeIn}, {scale: 220, autoAlpha: 0,ease: Power2.easeInOut}, '+=.2')
			.fromTo([RectaN,RectaN1], 2, {autoAlpha: 1}, {scale: 220, autoAlpha: 0,ease: Power2.easeInOut, stagger: .5}, '-=2')
			.fromTo(bgBl, .7, {autoAlpha: 1}, {autoAlpha: 0, ease: Power2.easeInOut}, '-=1.8')
			// .fromTo([RectaN,RectaN1], 2.2, {transformOrigin: '50% 50%'},{scale: 120, autoAlpha:0, ease: Power2.easeInOut},'-=.2')

	}, [TL]);

		return (

			<div className={r.bg_bl} >
				<div className={r.bl_container} >
				<div className={r.content_svg} ref={el => {bgBl = el}}>
					<svg id="Msck_svg_all" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1919 1080">
						<defs>
							<clipPath id="clip-path">
								<ellipse id="Ellipse_2" data-name="Ellipse 2" cx="62.259" cy="62.291" rx="62.259" ry="62.291" fill="none" stroke="#707070" strokeWidth="0.982"/>
							</clipPath>
							<linearGradient id="linear-gradient" x1="1.048" y1="0.69" x2="0.038" y2="0.298" gradientUnits="objectBoundingBox">
								<stop offset="0" stopColor="#f4bd00"/>
								<stop offset="1" stopColor="#cc7806"/>
							</linearGradient>
							<linearGradient id="linear-gradient-2" x1="0.37" y1="0.213" x2="0.047" y2="0.088" gradientUnits="objectBoundingBox">
								<stop offset="0" stopColor="#a1c10f"/>
								<stop offset="1" stopColor="#637e13"/>
							</linearGradient>
							<linearGradient id="linear-gradient-3" x1="1.048" y1="0.69" x2="0.11" y2="0.231" gradientUnits="objectBoundingBox">
								<stop offset="0" stopColor="#e3340e"/>
								<stop offset="1" stopColor="#9e1d09"/>
							</linearGradient>
						</defs>
						<rect id="Rectangle_3" data-name="Rectangle 3" width="1919" height="1080"/>
						<g id="M_svg_all" transform="translate(739.615 378)">
							<rect id="Rectangle_4" data-name="Rectangle 4" width="439" height="324" transform="translate(0.385)" fill="none" opacity="0.6"/>
							<g id="text" transform="translate(222.824 132)">
								<g id="amc" className={r.amc} transform="translate(0.882 0)" ref={el => {RectaN = el}}>
									<path id="Path_2" data-name="Path 2" d="M15.85-1.583A12.74,12.74,0,0,1,9.809-3.065,11.477,11.477,0,0,1,5.287-7.4,13.094,13.094,0,0,1,3.57-14.276,12.749,12.749,0,0,1,5.419-21.23a12.037,12.037,0,0,1,4.918-4.446c2.047-1.013,2.76-1.52,6.7-1.52a24.551,24.551,0,0,1,9.062,1.52c1.495.722,7.773,2.207,7.773,6.565V-8.347c0,2.382.595,5-.747,6.069s-4.732.7-7.637.7c.66-3.674-1.717-2.217-3.3-1.33A12.969,12.969,0,0,1,15.85-1.583Zm2.509-7.449c2.113,0,5.942.153,7.13-.76s1.441-2.838,1.441-4.561c0-1.672.38-3.8-.83-4.76s-5.673-.636-7.742-.636a6.352,6.352,0,0,0-4.39,1.444,5.028,5.028,0,0,0-1.617,3.952A4.888,4.888,0,0,0,13.968-10.4,6.58,6.58,0,0,0,18.358-9.031Z" transform="translate(-2.922 43.516)" fill="#e4e4e4" opacity="0.86"/>
									<path id="Path_3" data-name="Path 3" d="M5.61-46.813c0-1.636.718-2,4.805-3.281a44.755,44.755,0,0,1,11.542-1.824c4.37,0,8.313,1.269,10.01,4.05,1.285-1.309,5.721-2.209,7.726-2.946a19.584,19.584,0,0,1,6.786-1.1,13.173,13.173,0,0,1,8.367,2.455,7.6,7.6,0,0,1,3.123,6.235V-27.4c0,1.407-6.863.908-10.41.908V-42.64A3.3,3.3,0,0,0,46.4-45.291a5.532,5.532,0,0,0-3.624-.982,7.472,7.472,0,0,0-4.164,1.1,4.085,4.085,0,0,0-1.7,3.706V-27.4c0,1.407-6.76.908-10.256.908V-42.64a3.3,3.3,0,0,0-1.157-2.651,5.391,5.391,0,0,0-3.547-.982q-5.938,0-5.938,5.056c0,12.207.417,14.495,0,14.727s-6.863,0-10.41,0Z" transform="translate(31.112 68.237)" fill="#e4e4e4"/>
									<path id="Path_4" data-name="Path 4" d="M11.564-63.123c-1.437,0-1.143-.426-2.107-1.277a4.221,4.221,0,0,1-1.447-3.32,4.221,4.221,0,0,1,1.447-3.321c.964-.851.67-1.277,2.107-1.277s1.143.426,2.107,1.277a4.221,4.221,0,0,1,1.447,3.321,4.221,4.221,0,0,1-1.447,3.32C12.707-63.548,13-63.123,11.564-63.123Zm-3.914,6.7a3.66,3.66,0,0,1,1.929-3.491,12.625,12.625,0,0,1,5.843-1.05v28.474c0,1.627-5.163.928-7.772.928Z" transform="translate(88.05 73.312)" fill="#e4e4e4"/>
									<path id="Path_5" data-name="Path 5" d="M21.038-26.922A27.143,27.143,0,0,1,12.75-28.08a13.551,13.551,0,0,1-5.631-3.209A6.468,6.468,0,0,1,5.1-35.946v-6.418a7.093,7.093,0,0,1,2.019-4.97,13.238,13.238,0,0,1,5.631-3.378,25.888,25.888,0,0,1,8.217-1.206,31.253,31.253,0,0,1,7.65.844,13.73,13.73,0,0,1,5.206,2.34A4.329,4.329,0,0,1,35.7-45.307c0,1.062-8.665,1.134-9.846.314a7.9,7.9,0,0,0-4.6-1.23,8.324,8.324,0,0,0-4.64,1.182c-1.2.788-2.919,1.793-2.919,3.016v5.6c0,1.126,1.714,2.043,2.919,2.751a9.222,9.222,0,0,0,4.71,1.062,8.2,8.2,0,0,0,4.64-1.206c1.2-.8,9.952-.772,9.952.29a4.329,4.329,0,0,1-1.877,3.426,13.761,13.761,0,0,1-5.277,2.34A32.131,32.131,0,0,1,21.038-26.922Z" transform="translate(103.643 68.671)" fill="#e4e4e4"/>
									<rect id="Rectangle_2" data-name="Rectangle 2" width="148" height="46" transform="translate(-0.321)" fill="none"/>
								</g>
								<g id="enrg" className={r.enrg} transform="translate(0 46.246)" ref={el => {RectaN1 = el}}>
									<path id="energy" d="M2.244-23.209a.65.65,0,0,1,.3-.539,1.219,1.219,0,0,1,.738-.22h8.4a1.442,1.442,0,0,1-.35,1.071,1.5,1.5,0,0,1-1.087.342H4.286v3.145h5.2a1.467,1.467,0,0,1-.34,1.071A1.47,1.47,0,0,1,8.068-18H4.286v3.252H10.64a1.475,1.475,0,0,1,1.068.342,1.442,1.442,0,0,1,.35,1.071H3.284a1.219,1.219,0,0,1-.738-.22.65.65,0,0,1-.3-.539Zm11.857.456a1.152,1.152,0,0,1,.511-.988,2.332,2.332,0,0,1,1.38-.365l7.035,8.646.151-.091-.624-.836v-7.719a2.791,2.791,0,0,1,1.494.327,1.073,1.073,0,0,1,.511.965v8.4a1.039,1.039,0,0,1-.482.866,1.96,1.96,0,0,1-1.182.349l-7.262-8.935-.151.106.624.836v6.7q0,1.292-2,1.292Zm12.954-.456a.65.65,0,0,1,.3-.539,1.219,1.219,0,0,1,.738-.22h8.4a1.442,1.442,0,0,1-.35,1.071,1.5,1.5,0,0,1-1.087.342H29.1v3.145h5.2a1.467,1.467,0,0,1-.34,1.071A1.47,1.47,0,0,1,32.879-18H29.1v3.252h6.354a1.475,1.475,0,0,1,1.068.342,1.442,1.442,0,0,1,.35,1.071H28.095a1.219,1.219,0,0,1-.738-.22.65.65,0,0,1-.3-.539Zm11.857,0a.649.649,0,0,1,.293-.547,1.24,1.24,0,0,1,.747-.213h5.163a4.767,4.767,0,0,1,3,.859,2.8,2.8,0,0,1,1.106,2.332,2.578,2.578,0,0,1-1.91,2.522v.046a2.75,2.75,0,0,1,1.276.881,2.224,2.224,0,0,1,.444,1.4v1.444a1.072,1.072,0,0,1-.52.957A2.791,2.791,0,0,1,47-13.2V-15.84q0-1.732-1.872-1.732H40.916v3.085q0,1.292-2,1.292Zm6.108,4.24a2.374,2.374,0,0,0,1.579-.486,1.656,1.656,0,0,0,.577-1.337,1.6,1.6,0,0,0-.548-1.314,2.49,2.49,0,0,0-1.607-.448h-4.1v3.586ZM56.9-13.2a8,8,0,0,1-2.9-.494,4.615,4.615,0,0,1-1.986-1.375,3.113,3.113,0,0,1-.709-2.006v-3.191a3.108,3.108,0,0,1,.7-2,4.536,4.536,0,0,1,1.948-1.36,7.824,7.824,0,0,1,2.855-.486,9.386,9.386,0,0,1,2.865.4,4.686,4.686,0,0,1,1.957,1.117,2.262,2.262,0,0,1,.7,1.626.885.885,0,0,1-.407.767,1.88,1.88,0,0,1-1.087.281,3.349,3.349,0,0,1-.529-.046,4.188,4.188,0,0,0,.038-.623,1.554,1.554,0,0,0-.454-1.1,2.988,2.988,0,0,0-1.258-.745,5.8,5.8,0,0,0-1.825-.266,4.3,4.3,0,0,0-2.506.676,2.053,2.053,0,0,0-.974,1.755v3.191a1.977,1.977,0,0,0,.454,1.276,2.93,2.93,0,0,0,1.267.874,5.153,5.153,0,0,0,1.853.312,4.753,4.753,0,0,0,2.525-.6,1.8,1.8,0,0,0,.974-1.573V-17.5H58.257a1.433,1.433,0,0,1-1.021-.372,1.262,1.262,0,0,1-.4-.965h4.614a1.092,1.092,0,0,1,.69.213.662.662,0,0,1,.274.547v1.322a2.753,2.753,0,0,1-.7,1.846,4.515,4.515,0,0,1-1.957,1.261A8.5,8.5,0,0,1,56.9-13.2Zm11.119-3.981-4.69-6.732a1.169,1.169,0,0,1,.444-.144,3.45,3.45,0,0,1,.577-.053,1.716,1.716,0,0,1,1.57.745l3.063,4.6-.435.714.151.061,3.423-5.379a1.763,1.763,0,0,1,1.588-.745,3.385,3.385,0,0,1,.586.053,1.366,1.366,0,0,1,.454.144l-4.709,6.732v2.69a1.072,1.072,0,0,1-.52.957,2.791,2.791,0,0,1-1.5.334Z" transform="translate(3.454 28.499)" fill="#e4e4e4"/>
									<path id="Path_6" data-name="Path 6" d="M0,0H95.664V20.59H0Z" opacity="0" fill="none"/>
								</g>
							</g>
							<g id="Group_1" data-name="Group 1">
								<rect id="Rectangle_1" data-name="Rectangle 1" width="439" height="324" transform="translate(0.385)" fill="none"/>
								<g id="Mask_Group_2" ref={el => {bgBl2 = el}} data-name="Mask Group 2" transform="translate(88.202 102.688)" clipPath="url(#clip-path)">
									<rect id="Rectangle_5" data-name="Rectangle 5" width="328.588" height="325.298" transform="translate(-100.237 -97.936)" fill="none"/>
									<g id="Group_2" data-name="Group 2" transform="translate(-27.358 -16.086)">
										<path id="Path_1" data-name="Path 1" d="M948.658,565.043s-6.053-8.94-15.334-22.667-11.99-24.4-11.99-24.4,19.081-2.019,31.129-2.711a90.129,90.129,0,0,1,21.387,1.269s-8.474,23.244-15.68,35.875S948.658,565.043,948.658,565.043Z" transform="translate(-858.396 -454.309)" fill="rgba(0,0,0,0)"/>
										<path id="Path_7" data-name="Path 7" d="M.6,47.221s32.45-.679,37.293.041,19.531.151,32.722,10,20.042,29.4,20.042,29.4c-.459,1.374,11.105-25.589-3.306-52.181S42.894,1.733,42.894,1.733A65.077,65.077,0,0,0,29.153,0C22.28-.007,19.236.33,15.405,1.7A21.509,21.509,0,0,0,5.841,8.136c-2,2.661-3.952,5.258-5.265,15.029S.6,47.221.6,47.221Z" transform="translate(54.768 17.112) rotate(-4.992)" fill="url(#linear-gradient)"/>
										<path id="Path_4-2" data-name="Path 4" d="M.508,47.873S32.7,46.963,37.5,47.657s19.371.018,32.387,9.872S89.559,87.077,89.559,87.077c-.464,1.39,11.193-25.911-2.916-52.659S42.769,1.655,42.769,1.655A63.153,63.153,0,0,0,29.143,0C22.328.04,19.306.4,15.5,1.814a21.724,21.724,0,0,0-9.527,6.56c-2,2.7-3.951,5.336-5.323,15.208S.508,47.873.508,47.873Z" transform="translate(51.036 138.247) rotate(-123.007)" fill="url(#linear-gradient-2)"/>
										<path id="Path_5-2" data-name="Path 5" d="M.726,47.429s27.011-.355,31.806.389,19.325.217,32.409,10.22,19.927,29.8,19.927,29.8C84.42,89.223,95.771,62,81.424,35.063s-44.1-33.269-44.1-33.269A63.24,63.24,0,0,0,23.715,0c-6.8-.03-6.145.357-6.588.63S6.767,12.607,2.5,24.282A46.167,46.167,0,0,0,.726,47.429Z" transform="matrix(-0.375, 0.927, -0.927, -0.375, 159.577, 79.339)" fill="url(#linear-gradient-3)"/>
										<rect id="Rectangle_6" data-name="Rectangle 6" width="164.317" height="157.397" transform="translate(18.296)" fill="none"/>
									</g>
								</g>
							</g>
						</g>
					</svg>
				</div>
				</div>
			</div>
		)
};


export default Preloader;