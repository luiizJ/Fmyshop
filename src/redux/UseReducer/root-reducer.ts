import { combineReducers } from "redux";
import { userReduce } from "./Reducer";
import { cartReduce } from "../CartReducer/cartReducer";

export const rootReduce = combineReducers({
  userReduce,
  cartReduce,
});

export type RootReducer = ReturnType<typeof rootReduce>;
