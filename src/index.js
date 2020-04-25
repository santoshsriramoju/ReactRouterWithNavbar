import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Comp1 from "./components/Comp1/Comp1";
import Comp2 from "./components/Comp2/Comp2";
import Notfound from './components/Notfound'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Header />
        <hr />
        <Switch>
          <Route exact strict path="/" component={App} />
          <Route exact strict path="/comp1" component={Comp1} />
          <Route exact strict path="/comp2" component={Comp2} />
          <Route  component={Notfound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
