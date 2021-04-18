import React from "react";

export default class GifList extends React.Component {
  showGIFs = () => {
    return this.props.gifs.map((gif) => {
      return (
        <div key={gif.slug}>
          <img src={gif.images.original.url} alt={gif.slug} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="row align-items-center">
        <h1>{this.props.search}</h1>

        <div>{this.showGIFs()}</div>
      </div>
    );
  }
}
