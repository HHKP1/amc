import React from 'react';
import Parallax from 'parallax-js';



class Par extends React.Component {
	componentDidMount ()
	{
		this.cupBox = document.getElementsByClassName('cupBox')[0]
	}
}
function parallax (event) {
	let depth = Par.getAttribute('data-depth');
	Par.style.transform = `translate3d(${event.clientX*depth/1000}px)`
}
document.addEventListener("mousemove", Par);

export default Par;