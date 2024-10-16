import { combineReducers } from "redux";
import expensesReducer from "./features/expenses/expensesSlice";

const rootReducer = combineReducers({
    expenses:expensesReducer
});

export default rootReducer;