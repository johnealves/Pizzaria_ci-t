import { atom } from "recoil";

const orderList = atom({
  key: 'orderList', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export default orderList;