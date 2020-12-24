import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import React, { useEffect } from "react";

function App() {
  const [{ user }, dispatch] = useStateValue();
  //create a listener to keep track of user info
  useEffect(() => {
    //will only run once when the app loads
    auth.onAuthStateChanged((authUser) => {
      console.log("user is:", authUser);

      //if a user is logged in, set the user variable in the global data layer to the user logged in
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out, set the user variable to null
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    //BEM convention
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
