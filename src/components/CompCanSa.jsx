import React from 'react';
import * as PIXI from 'pixi.js';
import {SimpleMesh} from '@inlet/react-pixi';

const w = 600;
const h =  400;

class MeshExample extends React.Component {
	count = 0

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
			0,0,       w/2, 0,       w, 0,
			0,h/2,     w/2, h/2,     w, h/2,
			0,h,       w/2, h,       w, h,
		])
	}


	componentDidMount() {
		this.props.app.ticker.add(this.tick)
	}

	componentWillUnmount() {
		this.props.app.ticker.remove(this.tick)
	}

	tick = delta => {
		// const { app } = this.props
		this.count += 0.00095 * delta;


		// update vertices
		const vertices = new Float32Array(this.state.vertices);
		vertices[8] = w / 2 + Math.sin(this.count) * 150;
		vertices[9] = h / 2 + Math.cos(this.count) * 50 - 70;

		this.setState({vertices})
	};

	render() {


		const {vertices, uvs, indices} = this.state;
		return (

			<SimpleMesh
				image="./images/smoke-texture.webp" x={20} y={60}
				uvs={uvs}
				vertices={vertices}
				indices={indices}
				drawMode={PIXI.DRAW_MODES.TRIANGLES}
			/>
		)
	}
}

export default MeshExample;
