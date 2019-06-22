import React, { Component } from "react";
import InputUrl from "./InputUrl";
import Iframe from "react-iframe";
import "./App.css";

export default class App extends Component {
  state = {
    url: ""
  };

  changeUrl = url => {
    this.setState({ url });
  };

  logIframeInfo = () => {
    let iframeElm = document.getElementById("iframe1");
    console.log(iframeElm);
  };

  render() {
    return (
      <div className="App">
        <InputUrl changeUrl={this.changeUrl} /> <br />
        {/* <Iframe
          url={this.state.url}
          width="450px"
          height="450px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
        /> */}
        <iframe
          id="iframe1"
          className="main-iframe"
          title="browser"
          src={this.state.url}
          // sandbox="allow-top-navigation-by-user-activation allow-presentation allow-popups-to-escape-sandbox allow-modals allow-same-origin allow-scripts allow-top-navigation allow-popups allow-popups allow-forms"
        >
          alternative content for browsers which do not support iframe.
        </iframe>
        <br />
        <button onClick={this.logIframeInfo}>Iframe info</button>
      </div>
    );
  }
}
