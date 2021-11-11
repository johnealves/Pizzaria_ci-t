import React, { useEffect, useState } from "react"
import CardPizzaList from "../CardPizzaList"
import { pizzas as data } from "../../pizzas.json"
import { InputAdornment, OutlinedInput } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
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
      <OutlinedInput
        data-testid="input-search"
        placeholder="Procurar por nome da pizza"
        sx={{ m: 2, width: "95%" }}
        onInput={ handleFilter }
        startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
      />
      <ul aria-label="pizzas-flavors">
        { (pizzas) && pizzas.map((pizza, i) => <CardPizzaList pizza={ pizza } key={ i }/>) }
      </ul>
    </div>
  )
}

export default PizzaList;