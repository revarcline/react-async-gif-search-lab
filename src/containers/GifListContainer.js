import React from "react";
import GifSearch from "../components/GifSearch.js";
import GifList from "../components/GifList.js";

export default class GifListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "", gifs: [] };
  }

  formUpdate = (event) => {
    this.setState({ search: event.target.value });
  };

  formSubmit = () => {
    if (!this.state.search) return;

    console.log(this.state.search);
    return fetch(
      `https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`,
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({ gifs: json.data.slice(0, 3) });
        console.log(this.state.gifs);
      });
  };

  render() {
    return (
      <div className="container">
        <GifSearch
          formData={this.state}
          formUpdate={this.formUpdate}
          formSubmit={this.formSubmit}
        />
        <GifList search={this.state.search} gifs={this.state.gifs} />
      </div>
    );
  }
}
