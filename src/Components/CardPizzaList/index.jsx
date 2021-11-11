import React from "react";
import { useRecoilState } from "recoil";
import orderList from "../../Recoil/OrderAtom";
import "./cardPizzaList.css";

const CardPizzaList = ({ pizza: { name, ingredients, isPopular } }) => {
  const [order, setOrder] = useRecoilState(orderList);
  const  popularClass = "popular";

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
    <li className={ `card-pizza-container ${(isPopular) && popularClass}`}>
      <section>
        <p>{ name } { (isPopular) && <span>Popular</span> }</p>
        <p>{ ingredients }</p>
      </section>
      <button onClick={ addOrder }>
        +
      </button>
    </li>
  )
}

export default CardPizzaList;
