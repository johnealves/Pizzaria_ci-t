import { TextField } from "@material-ui/core";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import orderList from "../../Recoil/OrderAtom";
import "./cardOrder.css";

const CardOrder = ({ pizza }) => {
  const [order, setOrder] = useRecoilState(orderList)

  const decreaseOrder = () => {
    
  }

  return(
    <div className={ `card-order-container`}>
      <section>
        <p>{ pizza.name }</p>
        <p>{ pizza.ingredients }</p>
      </section>
      <section>
        <input
          // type="number"
          value={ pizza.quantity }
          disabled
        />
        <Button 
          onClick={ decreaseOrder }
          sx={{ bgcolor: "rgb(236, 165, 162)" }}
        >
          -
        </Button>
      </section>
    </div>
  )
}

export default CardOrder;