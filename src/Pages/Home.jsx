import React from "react";
import PizzaList from "../Components/PizzaList";
import OrderList from "../Components/OrderList";
import "./home.css";

const Home = () => {
  return(
    <div className="home-container">
      <PizzaList />
      <OrderList />
    </div>
  )
}

export default Home;