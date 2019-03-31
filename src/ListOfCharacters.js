import React, { Component } from "react";
import axios from "axios";
class ListOfCharacters extends Component {
  state = {
    characters: null
  };

  componentDidMount() {
    axios.get("https://swapi.co/api/people").then(response => {
      this.setState({ characters: response.data.results });
    });
  }

  render() {
    return null;
  }
}

export default ListOfCharacters;
