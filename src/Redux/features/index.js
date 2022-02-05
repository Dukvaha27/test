import { combineReducers } from "redux";
import { tagsReducer } from "./tags";
import { statusReducer } from "./status";
import { operationTypeReducer } from "./operationType";
import { currencyReducer } from "./currencyFiltering";
import { orderReducer } from "./order";

export const rootReducer = combineReducers({
  order: orderReducer,
  tags: tagsReducer,
  status: statusReducer,
  operationType: operationTypeReducer,
  currency: currencyReducer,
});
