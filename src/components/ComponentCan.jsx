// import React from 'react';
// import { PIXI, Stage}  from '@inlet/react-pixi';
// // import * as smoke from './smoke-texture.png';
// // import { Application } from 'pixi.js';
//
//
//
// class CanvasComponent extends React.Component {
// 	constructor(props){
// 		super(props);
//
//
// 	}
//
//
//
//
//
// 	componentDidMount(props) {
// 		// this.updateCanvas();
// 		// const appX = new PIXI.Application({
// 		// 	width: 600,
// 		// 	height: 300
// 		// });
// 		// document.body.appendChild(appX.view);
//
// 		const {
// 			Stage,
// 			PixiComponent,
// 			Container,
// 			AnimatedSprite,
// 			useApp,
// 			useTick
// 		} = ReactPixi;
//
// 		const [width, height] = [500, 500];
// 		const spritesheet =
// 			"https://pixijs.io/examples/examples/assets/spritesheet/fighter.json";
//
// 		const JetFighter = () => {
// 			const [frames, setFrames] = React.useState([]);
// 			const [rot, setRot] = React.useState(0);
// 			const app = useApp();
//
// 			useTick(delta => setRot(r => r + (0.01 * delta)));
//
// 			// load
// 			React.useEffect(() => {
// 				app.loader.add(spritesheet).load((_, resource) => {
// 					setFrames(
// 						Object.keys(resource[spritesheet].data.frames).map(frame =>
// 							PIXI.Texture.from(frame)
// 						)
// 					);
// 				});
// 			}, []);
//
// 			if (frames.length === 0) {
// 				return null;
// 			}
//
// 			return (
// 				<Container rotation={rot} x={width / 2} y={height / 2}>
// 					<AnimatedSprite
// 						animationSpeed={0.5}
// 						isPlaying={true}
// 						textures={frames}
// 						anchor={0.5}
// 					/>
// 				</Container>
// 			);
// 		};
//
//
//
//
// 	}
// 	// updateCanvas() {
// 	// 	const ctx = this.refs.canvas.getContext('2d');
// 	// 	ctx.fillRect(40,-500, 100, 100);
// 	// }
// 	// Use the custom renderer to render a valid PIXI object into a PIXI container.
// }
//
// export default CanvasComponent;