import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './App.css';
import List from './List';

@inject('BirdStore')
@observer
class App extends Component {
  onSubmit = e => {
    e.preventDefault();

    this.props.BirdStore.addBird(this.bird.value);
    this.bird.value = '';
  }

  render() {
    const { BirdStore } = this.props;

    return (
      <div className="App">
        <div>You have {BirdStore.birdCount} birds</div>
        <form onSubmit={this.onSubmit}>
          <input placeholder="Bird name" ref={input => this.bird = input} />
          <input type="submit" value="Add" />
        </form>
        <List />
      </div>
    );
  }
}

export default App;
