import {createStore}  from "redux"
import { BookingReducer } from "./Reducer/Booking";

export const store= createStore(BookingReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());