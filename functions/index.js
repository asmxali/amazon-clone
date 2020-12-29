const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_25X3qd3QX7CKMUMmu5hl0hkJ00wuG5LX95");

// -- Setup API
// -- App config
const app = express();

// -- Middleware
app.use(cors({ origin: true }));
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// -- API routes
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("payment request recieved for amount, ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "cad",
    payment_method_types: ["card"],
  });
  console.log(paymentIntent);
  //send OK response that its good
  res.status(201).send({ clientSecret: paymentIntent.client_secret });
});

// -- Listen commands
exports.api = functions.https.onRequest(app);

//Example Endpoint
// (http://localhost:5001/clone-df399/us-central1/api)
