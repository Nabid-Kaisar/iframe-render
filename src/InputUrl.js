import React, { Component } from "react";

export default class InputUrl extends Component {
  handleKeyDown = e => {
    if (e.keyCode === 13) {
      this.props.changeUrl(e.target.value);
    }
  };

  render() {
    return (
      <React.Fragment>
        URL: <input type="text" onKeyDown={this.handleKeyDown} />
      </React.Fragment>
    );
  }
}
