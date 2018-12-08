import React, { Component } from "react";
import HomeView from "./View";
import * as noteService from '../services/notes';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      error: null
    };
  }

  create = () => {
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