// import * as React from 'react';
// import {Pixi} from 'pixi.js';
//
//
// // interface IMainProps {
// //
// // }
// // interface IMainState {}
// export class PixiComponent extends React.Component<IMainProps, IMainState> {
// 	app: Pixi.Application;
// 	gameCanvas: HTMLDivElement;
//
// 	constructor() {
// 		super();
// 	}
//
// 	/**
// 	 * After mounting, add the Pixi Renderer to the div and start the Application.
// 	 */
// 	componentDidMount() {
// 		this.app = new Pixi.Application(window.innerWidth, window.innerHeight);
// 		this.gameCanvas.appendChild(this.app.view);
// 		this.app.start();
// 	}
//
// 	/**
// 	 * Stop the Application when unmounting.
// 	 */
// 	componentWillUnmount() {
// 		this.app.stop();
// 	}
//
// 	/**
// 	 * Simply render the div that will contain the Pixi Renderer.
// 	 */
// 	render() {
// 		let component = this;
// 		return (
// 			<div ref={(thisDiv) => {component.gameCanvas = thisDiv}} />
// 		);
// 	}
// }
//
// export default PixiComponent;
//
