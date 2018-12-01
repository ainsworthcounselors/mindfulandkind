import React, { Component } from "react";
import HomeView from "./View";
import * as noteService from '../services/notes';
import * as locationService from '../services/location';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: {},
      text: "",
      error: null
    };
  }

  componentDidMount() {
    locationService.current()
        .then(coords => {
          this.setState({ coords: coords });
        })
        .catch(err => this.setState({ error: err }));
  }

  create = () =>  {
    noteService.create(this.state)
        .then(_ => {
          this.setState({
            error: null,
            text: ''
          })
        })
        .catch(err => {
            this.setState({ error: err });
        });
  }

  render() {
    return <HomeView 
            {...this.state} 
            {...this.props} 
            create={this.create}
            onTextChange={e => this.setState({ text: e.target.value })} />;
  }
}

export default HomeContainer;