const React = require('react');
const ReactDOM = require('react-dom');

class JuegoForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    debugger;
    let data = {
    		"nombre": event.target[0].value,
    		"minJugadores": event.target[1].value,
    		"maxJugadores": event.target[2].value
    		};
    const body = JSON.stringify(data);
    
    fetch('/juego', {
      method: 'PUT',
      body: body,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div>
        <label htmlFor="name">Ingresar nombre del juego</label>
        <input id="name" name="name" type="text" />
      </div>
      <div>
        <label htmlFor="minPlayers">Ingresar minimo de jugadores</label>
        <input id="minPlayers" name="minPlayers" type="number" />
      </div>
      <div>
        <label htmlFor="maxPlayers">Ingresar maximo de jugadores</label>
        <input id="maxPlayers" name="maxPlayers" type="number" />
      </div>
        <button>Ingresar juego</button>
      </form>
    );
  }
}

export default JuegoForm;