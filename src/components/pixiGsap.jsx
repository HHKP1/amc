// import React, {Component} from 'react';
// import { gsap } from "gsap";
// import { PixiPlugin } from "gsap/PixiPlugin";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { EasePack } from "gsap/EasePack";
// import { Stage, Sprite, Container, AppConsumer, SimpleRope, Graphics } from '@inlet/react-pixi';
//
//
//
//
// const { Stage, Container, AppConsumer, SimpleRope, Graphics } = ReactPixi;
//
// const img = './cub-milk.png';
//
// class Snake extends React.Component {
//
// 	count = 0;
//
// 	state = {
// 		ropeLength: 45,
// 		points: [],
// 		showSpine: true
// 	};
//
// 	componentDidMount() {
// 		// build rope
// 		const points = []
//
// 		for (var i = 0; i < 25; i++) {
// 			points.push(new PIXI.Point(i * this.state.ropeLength, 0))
// 		}
//
// 		this.setState({ points })
// 		this.props.ptixigs.ticker.add(this.tick)
// 	}
//
// 	componentWillUnmount() {
// 		this.props.ptixigs.ticker.remove(this.tick)
// 	}
//
// 	tick = (delta) => {
// 		this.count += 0.1 * delta
//
// 		const points = this.state.points
//
// 		for (var i = 0; i < points.length; i++) {
// 			points[i].y = Math.sin((i * 0.5) + this.count) * 30
// 			points[i].x = i * this.state.ropeLength + Math.cos((i * 0.3) + this.count) * 20
// 		}
//
// 		this.setState({ points })
// 	}
//
// 	toggleSpine = () => {
// 		this.setState(({ showSpine }) => ({ showSpine: !showSpine }))
// 	}
//
// 	render() {
// 		return (
// 			<Container x={50} y={300} scale={[0.6, 0.6]} interactive={true} pointerdown={this.toggleSpine}>
// 				{this.state.points.length > 0 && (
// 					<SimpleRope image={img} points={this.state.points} />
// 				)}
//
//
// 				{this.state.showSpine && (
// 					<Graphics draw={g => {
// 						const { points } = this.state
//
// 						g.clear()
//
// 						const startX = points[0] ? points[0].x : 0
// 						const startY = points[0] ? points[0].y : 0
//
// 						g.lineStyle(2,0xffc2c2)
// 						g.moveTo(startX, startY)
//
// 						for (var i = 1; i < points.length; i++) {
// 							g.lineTo(points[i].x, points[i].y)
// 						}
//
// 						for (var i = 1; i < points.length; i++) {
// 							g.beginFill(0xff0022)
// 							g.drawCircle(points[i].x, points[i].y, 10)
// 							g.endFill()
// 						}
// 					}}/>
// 				)}
//
// 			</Container>
// 		)
// 	}
// }
//
//
//
// export default Snake;