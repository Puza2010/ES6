class Stopwatch extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isRunning:false,
			times: {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			}
		}
	}

	reset() {
		const times = {
			minutes: 0,
			seconds: 0,
			miliseconds: 0
		};
		this.setState({times});
	}

	format(times) {
		`${pad0(this.state.times.minutes)}:${pad0(this.state.times.seconds)}:${pad0(Math.floor(this.state.times.miliseconds))}`;
	}

	start() {
		if(!this.state.isRunning) {
			this.setState({isRunning: true});
			this.watch = setInterval(() => this.step(), 10);
		}
	}

	step() {
		if (!this.running) {
			return;
		}
		this.calculate();
	}

	calculate() {
		const times = this.state.times;
		times.miliseconds += 1;
		if (times.miliseconds >= 100) {
			times.seconds += 1;
			times.miliseconds = 0;
		}
		if (times.seconds >= 60) {
			times.minutes += 1;
			times.seconds = 0;
		}
		this.setState({times});
	}	

	stop() {
		this.setState({isRunning: false});
		clearInterval(this.watch);
	}	

	render() {
		<nav className="controls">
			<a href="#" className="button" id="start">Start</a>
			<a href="#" className="button" id="stop">Stop</a>
		</nav>
		<p>{this.format()}</p>
	}
}

var stopWatch = React.createElement(Stopwatch);
ReactDOM.render(stopWatch, document.getElementById('.stopwatch'));