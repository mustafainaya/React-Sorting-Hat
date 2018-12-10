import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					{/* <img src={logo} className="App-logo" alt="logo" /> */}
					<img
						src="https://vignette.wikia.nocookie.net/lotr/images/1/18/310993_121176884650130_120725101361975_85832_1441609629_n.jpg/revision/latest?cb=20151105155925"
						className="back-img"
						alt="prop"
					/>
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">To get started, edit and save to reload.okay I think it is working</p>
			</div>
		);
	}
}
// const Messege = (props) => {
// 	retrun(
// 		<div className="card">
// 			<button onClick={props.mustafa}>>></button>
// 		</div>
// 	);
// };

export default App;
