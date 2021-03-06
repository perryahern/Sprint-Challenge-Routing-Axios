import React, { Component } from 'react';
import axios from 'axios';

class EditSmurfForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      age: props.age,
      height: props.height,
    };
    this.addSmurf = this.addSmurf.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
  }

  addSmurf(event) {
    event.preventDefault();
    const endpoint = 'http://localhost:3333/smurfs';
    // add code to create smurf using the api
    axios
      .post(endpoint, this.state)
      .then(response => {
        this.props.updateSmurfs();
        this.setState({ name: '', age: '', height: '' });
      })
      .catch(error => {
        console.log('Error: ', error);
      })
  }

  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  updateAge(event) {
    this.setState({
      age: event.target.value
    });
  }

  updateHeight(event) {
    this.setState({
      height: event.target.value
    });
  }

  render() {
    return (
      <div className="SmurfForm">
    {console.log('edit smurf form!')}
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.updateName}
            placeholder="name"
            value={this.state.name}
          />
          <input
            onChange={this.updateAge}
            placeholder="age"
            value={this.state.age}
          />
          <input
            onChange={this.updateHeight}
            placeholder="height"
            value={this.state.height}
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default EditSmurfForm;