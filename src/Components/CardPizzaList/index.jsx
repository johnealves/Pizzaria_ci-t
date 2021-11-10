import React, { useEffect, useState } from "react";
import "./cardPizzaList.css";

const CradPizzaList = ({ pizza }) => {
  const [popularMarking, setPolularMarking] = useState("")

  useEffect(() => {
    (pizza.isPopular) && setPolularMarking("popular")
  })

  return(
    <div className={ `card-pizza-container ${popularMarking}`}>
      <section>
        <p>{ pizza.name } { (pizza.isPopular) && <span>Popular</span> }</p>
        <p>{ pizza.ingredients }</p>
      </section>
      <button>+</button>
    </div>
  )
}

export default CradPizzaList;
