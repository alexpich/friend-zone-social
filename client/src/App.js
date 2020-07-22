import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/NavComponent";
import Home from "./pages/home";

import NewsFeed from "./pages/newsfeed";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/newsfeed" component={NewsFeed} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
