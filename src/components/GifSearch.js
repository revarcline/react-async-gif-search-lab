import React from "react";

export default class GifSearch extends React.Component {
  render() {
    return (
      <div className="form-row align-items-center">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Search GIFs"
          value={this.props.formData.search}
          onChange={this.props.formUpdate}
        />
        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={this.props.formSubmit}
        >
          Search
        </button>
      </div>
    );
  }
}
