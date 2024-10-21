import { combineReducers } from "redux";
import expensesReducer from "./features/expenses/expensesSlice";

const rootReducer = combineReducers({
  expensesReducer,
});

export default rootReducer;
