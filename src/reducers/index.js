import { combineReducers } from "redux"
import shoppingReducer from "./shoppingReducer"

const rootReducer = combineReducers({
    shopping: shoppingReducer,
})
export default rootReducer
