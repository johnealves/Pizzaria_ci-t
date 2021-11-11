import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import orderList from "../../Recoil/OrderAtom";
import "./cardPizzaList.css";

const CradPizzaList = ({ pizza: { name, ingredients, isPopular } }) => {
  const [popularClass, setPolularClass] = useState("popular")
  const [order, setOrder] = useRecoilState(orderList)

  const verifyFlavorsInOrder = () => {
    return order.find((value) => value.name === name);
  }

  const increaseQuantity = () => {
    const newOrder = [...order]
    const result = newOrder.map((value) => {
      if (value.name === name) {
        const newObject = { 
          name: value.name,
          ingredients: value.ingredients,
          quantity: value.quantity + 1
        }
        return newObject;
      }
      return value;
    })
    setOrder(result);
  }

  const addOrder = () => {
    const verify = verifyFlavorsInOrder()
    if (!verify) {
      const newOrder = [...order]
      newOrder.push({ name, ingredients, quantity: 1})
      setOrder(newOrder)
    } else {
      increaseQuantity()
    }
  }

  return(
    <div className={ `card-pizza-container ${(isPopular) && popularClass}`}>
      <section>
        <p>{ name } { (isPopular) && <span>Popular</span> }</p>
        <p>{ ingredients }</p>
      </section>
      <button onClick={ addOrder }>
        +
      </button>
    </div>
  )
}

export default CradPizzaList;
