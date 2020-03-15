import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function Car(props) {
	const classes = ['card'];

	if (props.car.marked) {
		classes.push('marked');
	}
	return (
		<div className={classes.join(' ')} onClick={props.onMark}>
			<div className="card-img">
				<img
					src={props.car.img}
					alt={props.car.name}	
				/>
			</div>
			<h3>{props.car.name}</h3>
			<p>{props.car.price} $</p>
		</div>
	)
};

class App extends React.Component {
	state = {
		cars: [
			{ marked: false, name: 'BMW M2 Coupe', price: 20000, img: 'https://mochamanstyle.com/wp-content/uploads/2015/10/2016-BMW-M2-Coupe.jpg' },
			{ marked: false, name: 'Audi TT', price: 15000, img: 'https://article.images.consumerreports.org/w_598,h_436/prod/content/dam/cro/news_articles/cars/2016-Audi-TT-pr-1-2016-598' },
			{ marked: false, name: 'Rolls Royce', price: 50000, img: 'data:image/jpeg;base64,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' },
			{ marked: false, name: 'Mercedes amg coupe', price: 18000, img: 'https://auto.ndtvimg.com/car-images/big/mercedes-amg/gle-coupe/mercedes-amg-gle-coupe.jpg?v=2' }
		],
		visible: true,
		appTitle: 'Cars application'
	}
	handleClick(name){
		const cars = this.state.cars.concat();
		const car = cars.find(c => c.name === name);

		car.marked = !car.marked;

		this.setState({ cars })
	}
	renderCars() {
		if (!this.state.visible) {
			return;
		}
		return this.state.cars.map(item => {
			return (
				<Car
					car={item}
					key={item.name + Math.random()}
					onMark={this.handleClick.bind(this, item.name)}
				/>
			)
		})
	}
	toggleHandler() {
		this.setState({visible: !this.state.visible});
	}
	titleChangeHandler(title){
		if (title.trim() === '') {
			return
		}
		this.setState({
			appTitle: title
		})
	}
	render() {
		const style = {
			marginRight: 20
		}
		return (
			<div className="app">
				<h1>{this.state.appTitle}</h1>
				<button
					onClick={() => this.toggleHandler()}
					style={style}
				>Toggle</button>
				<input
					type="text"
					placeholder="Change title"
					onChange={(evt) => this.titleChangeHandler(evt.target.value)}
					value={this.state.appTitle}
				/>
				<hr/>

				<div className="list">
					{ this.renderCars() }
				</div>
			</div>
		)
	}
};


ReactDOM.render(<App/>, document.getElementById('root'));