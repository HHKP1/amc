import React from 'react';
import * as PIXI from 'pixi.js';
import {SimpleMesh } from '@inlet/react-pixi';
// import { Application } from 'pixi.js'
// import image1 from './public/images/smoke-texture.png';


//
// const {Stage,SimpleMesh, AppConsumer} = ReactPixi
const images = {
	frstImg: './images/smoke-texture.png',
	SecImg: './images/SWmokeB.png'
};


const w = 400;
const h = 500;

class MeshExampless extends React.Component {
	// constructor(props){
	// 	super(props)
	// 	const { requestAnimationFrame } = window
	// 	requestAnimationFrame(MeshExampless)
	// }


	count = 0;

	state = {
		indices: new Uint16Array([
			0,3,4,
			0,1,4,
			1,2,4,
			2,4,5,
			3,4,6,
			4,6,7,
			4,7,8,
			4,5,8,
		]),
		uvs: new Float32Array([
			0, 0,          0.5, 0,          1, 0,
			0, 0.5,        0.5, 0.5,        1, 0.5,
			0, 1,          0.5, 1,          1, 1,
		]),
		vertices: new Float32Array([
			0,0,       w/4, 0,       w, 0,
			0,h/2,     w/4, h/6,     w, h/2,
			0,h,       w/4, h,       w, h,
		])
	};


	componentDidMount() {
		this.props.app.ticker.add(this.tick)
	}

	componentWillUnmount() {
		this.props.app.ticker.remove(this.tick)
	}

	tick = delta => {
		// const { app } = this.props
		this.count += 0.0095 / delta;

		// update vertices
		const vertices = new Float32Array(this.state.vertices);
		vertices[8] = w / 2 + Math.sin(this.count) * 50;
		vertices[9] = h / 2 + Math.cos(this.count) * 60 - 40;

		this.setState({ vertices })
	};
	// DRAW_MODES;
	//
	// render() {
	// 	const { vertices, uvs, indices } = this.state
	//
	// 	return (
	// 		<SimpleMesh image={image}
	// 		            uvs={uvs}
	// 		            vertices={vertices}
	// 		            indices={indices}
	// 		            drawMode={PIXI.DRAW_MODES.TRIANGLES} />
	// 	)
	// }


	render() {
		const { vertices, uvs, indices } = this.state;
		return(

	<SimpleMesh
		image =
	{
	images.SecImg
	}
	 x={90} y={20}
		uvs={uvs}
		vertices={vertices}
		indices={indices}
		drawMode={PIXI.DRAW_MODES.TRIANGLES}
	/>
	)
	}
}
export default MeshExampless;
