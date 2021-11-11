import React from "react";
import { useRecoilState } from "recoil";
import orderList from "../../Recoil/OrderAtom";
import "./cardOrder.css";

const CardOrder = ({ pizza: { name, ingredients, quantity } }) => {
  const [order, setOrder] = useRecoilState(orderList)

  const decreaseFlavor = () => {
    const newOrder = [...order]
    const result = newOrder.map((value) => {
      if (value.name === name) {
        const newObject = { 
          name: value.name,
          ingredients: value.ingredients,
          quantity: value.quantity - 1
        }
        return newObject;
      }
      return value;
    })
    setOrder(result);
  }

  const removeFlavor = () => {
    const newOrder = [...order];
    const result = newOrder.filter((value) => value.name !== name);
    setOrder(result);
  }

  const checkQuantityOfFlavor = () => {
    const flavor = order.find((value) => value.name === name);
    return flavor.quantity
  }

  const removeUnitFlavors = () => {
    const quantity = checkQuantityOfFlavor()
    if (quantity > 1) {
      decreaseFlavor()
    } else {
      removeFlavor()
    }
  }

  return(
    <li className={ `card-order-container`}>
      <section>
        <p>{ name }</p>
        <p>{ ingredients }</p>
      </section>
      <section>
        <input
          data-testid="input-quantity"
          value={ quantity }
          disabled
        />
        <button onClick={ removeUnitFlavors }>
          -
        </button>
      </section>
    </li>
  )
}

export default CardOrder;