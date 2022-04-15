//reducers(slice.js file) a vitor jei method gula create korbo sheigula action a use korbo
//abr created action onno kothao use kora jabey

import { authSlice } from "./slice";

const {actions:slice}=authSlice  //actions destructured from authslice as 'slice' name   //actions ,authslice ar vitor object property hisabey asey





//login actions creation
export const loginAction= (phone)=>(dispatch)=>{
    dispatch(slice.setLogin(phone))
}

//;ogout action
export const logoutAction= ()=>(dispatch)=>{
    dispatch(slice.setLogout())
}