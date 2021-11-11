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
        ? <ul aria-label="order-flavors">
            {  order.map((pizza, i) => <CardOrder pizza={ pizza } key={ i }/>) }
          </ul>
        : <p>Escolha suas pizzas favoritas</p> }
    </div>
  )
}

export default OrderList;