import React from "react";
import { useRecoilState } from "recoil";
import orderList from "../../Recoil/OrderAtom";
import CardOrder from "../CardOrder/CardOrder";
import "./orderContainer.css";

const OrderList = () => {
  const [order, setOrder] = useRecoilState(orderList)

  return(
    <div className="order-container">
      <h2>Pedidos</h2>
      { (order.length) 
        ? order.map((pizza, i) => <CardOrder pizza={ pizza } key={ i }/>)
        : <p>Escolha sua pizza favorita</p> }
    </div>
  )
}

export default OrderList;