import { db } from "./firebase";
import React, { useEffect, useState } from "react";
import "./Orders.css";
import Order from "./Order";
import { useStateValue } from "./StateProvider";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();
  useEffect(() => {
    if (!user) {
      setOrders([]);
    } else {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((s) =>
          setOrders(
            s.docs.map((doc) => ({
              id: doc?.id,
              data: doc?.data(),
            }))
          )
        );
    }
  }, [user]);

  console.log(orders?.map((order) => order));
  return (
    <div className="orders">
      <div className="orders__title">
        <h1>Your Orders</h1>
      </div>
      <div className="orders__items">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
