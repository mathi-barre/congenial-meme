const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');
import JuegoForm from './JuegoForm';

class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {games: []};
	}

	componentDidMount() {
		client({method: 'GET', path: '/games'}).done(response => {
			this.setState({games: response.entity});
		});
	}

	render() {
		return (
			<div><GameList games={this.state.games}/><JuegoForm/></div>
		)
	}
}

class GameList extends React.Component{
	render() {
		const games = this.props.games.map(game =>
			<Game key={game.name} game={game}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>name</th>
						<th>min players</th>
						<th>max players</th>
					</tr>
					{games}
				</tbody>
			</table>
		)
	}
}

class Game extends React.Component{

	render() {
		return (
				
			<tr>
				<td>{this.props.game.name}</td>
				<td>{this.props.game.minimumPlayers}</td>
				<td>{this.props.game.maximumPlayers}</td>
			</tr>
		)
	}
}

ReactDOM.render(
		<App />,
		document.getElementById('react')
	)