import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./components/sign_in";
import Navbar from "./components/Navbar";
import Dash from "./Dash";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    ch: false
  };

  handconn = () => {
    this.setState({
      ch: true
    });
  };
  render() {
    return (
      <div>
        <div>{this.state.ch ? "" : <Navbar />}</div>
        <Router>
          <Route
            path="/"
            exact
            render={props => <SignIn conn={this.handconn}> </SignIn>}
          />
          <Route path="/Dash" component={Dash}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
