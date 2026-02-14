import DashboardLayout from "./DashboardLayout";
import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../auth";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [statusValues, setStatusValues] = useState([]);

  const { user, token } = isAuthenticated();

  // Fetch orders from the backend
  const loadOrders = () => {
    fetch(`http://localhost:5000/api/Orders/${user._id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setOrders(data);
        }
      })
      .catch((err) => console.log(err));
  };

  // Fetch status values for orders
  const loadStatusValues = () => {
    fetch(`http://localhost:5000/api/order/status-values/${user._id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setStatusValues(data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadOrders();
    loadStatusValues();
  }, []);

  const showOrdersLength = () => {
    if (orders.length > 0) {
      return <h2 className="text-danger display-2">Total orders: {orders.length}</h2>;
    } else {
      return <h2 className="text-danger">No orders found</h2>;
    }
  };

  const showInput = (key, value) => (
    <div className="input-group mb-2">
      <div className="input-group-prepend">
        <div className="input-group-text">{key}</div>
      </div>
      <input type="text" value={value} className="form-control" readOnly />
    </div>
  );

  const handleStatusChange = (e, orderId) => {
    fetch(`http://localhost:5000/api/order/${orderId}/status/${user._id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status: e.target.value }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.log("Status update failed");
        } else {
          loadOrders();
        }
      })
      .catch((err) => console.log(err));
  };

  const showStatus = (o) => (
    <div className="form-group">
      <h3 className="mark mb-4">Status: {o.status}</h3>
      <select
        className="form-control"
        onChange={(e) => handleStatusChange(e, o._id)}
      >
        <option>Update Status</option>
        {statusValues.map((status, index) => (
          <option key={index} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <DashboardLayout
      title="Orders"
      description={`Hello ${user.name}, you can manage all the orders here`}
      className="container-fluid"
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {showOrdersLength()}

          {orders.map((o, oIndex) => (
            <div
              className="mt-5"
              key={oIndex}
              style={{ borderBottom: "5px solid indigo" }}
            >
              <h2 className="mb-5">
                <span className="bg-primary">Order ID: {o._id}</span>
              </h2>

              <ul className="list-group mb-2">
                <li className="list-group-item">{showStatus(o)}</li>
                <li className="list-group-item">
                  Transaction ID: {o.transaction_id}
                </li>
                <li className="list-group-item">Amount: ${o.amount}</li>
                <li className="list-group-item">Ordered by: {o.user.name}</li>
               
                <li className="list-group-item">
                  Delivery address: {o.address}
                </li>
              </ul>

              <h3 className="mt-4 mb-4 font-italic">
                Total products in the order: {o.products.length}
              </h3>

              {o.products.map((p, pIndex) => (
                <div
                  className="mb-3"
                  key={pIndex}
                  style={{
                    padding: "20px",
                    border: "1px solid indigo",
                  }}
                >
                  {showInput("Product name", p.name)}
                  {showInput("Product price", `$${p.price}`)}
                  {showInput("Product total", p.count)}
                  {showInput("Product Id", p._id)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Orders;
