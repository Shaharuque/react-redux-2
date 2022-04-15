// created reducer/slice gula k combinely rootReducer.js a rakhbo

import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "../redux/slice";




export const rootReducer=combineReducers({
    //object ar property hisbaey created reducer/slice gulakey import korey aikhaney diye dibo
    auth:authSlice.reducer
})