import React, { useEffect, useState } from "react"
import { TextField } from "@material-ui/core";
import CradPizzaList from "../CardPizzaList"
import { pizzas as data } from "../pizzas.json"
import "./pizzaList.css";

const PizzaList = () => {
  const [pizzas, setPizzas] = useState([])
  const [filterSearch, setFilterSearch] = useState("")

  useEffect(() => {
    setPizzas(data
      .filter((elem) => elem.name.toLowerCase().includes(filterSearch.toLocaleLowerCase())))
  }, [filterSearch])

  const handleFilter = ({ target }) => {
    setFilterSearch(target.value);
  }

  return(
    <div className="pizza-list-container">
      <h2>Menu</h2>
      <TextField
        placeholder="Produrar por nome da pizza"
        sx={{ m: 2, width: "95%" }}
        onInput={ handleFilter }
      />
      { (pizzas) && pizzas.map((pizza) => <CradPizzaList pizza={ pizza } />) }
    </div>
  )
}

export default PizzaList;