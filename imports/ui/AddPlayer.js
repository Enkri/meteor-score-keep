import React from 'react';
import {Players} from './../api/players.js';


export default class AddPlayer extends React.Component {
  handleSubmit(e) {
    let playerName = e.target.playerName.value;
    e.preventDefault();
    if (playerName) {
      e.target.playerName.value = ''; // clear last input
      Players.insert({
        name: playerName,
        score: 0 // in case of using this.props.xxx if we don't bind this will point to global window object
      });
    }
  }
  render() {
    return (
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input className="form__input" type='text' name='playerName' placeholder="Player name" autoComplete="off"/>
          <button className="button">Add Player</button>
        </form>
      </div>

    );
  }
}
