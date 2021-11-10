import React, { useEffect, useState } from "react"
import CradPizzaList from "../CardPizzaList"
import { pizzas as data } from "../pizzas.json"
import "./pizzaList.css";

const PizzaList = () => {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    setPizzas(data)
  }, [])

  return(
    <div className="pizza-list-container">
      <h2>Menu</h2>
      { (pizzas) && pizzas.map((pizza) => <CradPizzaList pizza={ pizza } />) }
    </div>
  )
}

export default PizzaList;