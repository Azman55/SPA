import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  tasks: taskReducer,
  cart: cartReducer,
});

export default rootReducer;
