import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Orders from "./Orders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_lZziMqbbScasVfJyeJpqFzDT00o4bxnswQ");

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
        <Switch>
          <Route path="/login">
            <Header />
            <Login></Login>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout></Checkout>
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment></Payment>
            </Elements>
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
