import { createSlice } from "@reduxjs/toolkit";


export const authSlice=createSlice({
    name:'auth',   //slice name
    initialState:{
        isAuth:false,
        phone:"",
    },
    //reducres ar vitor kicho method rakhbo jader kaj hobey initialState k user ar action ar basis a fillup kora
    reducers:{
        setLogin: (state,action)=>{  //state basically initialState
            state.isAuth=true
            state.phone=action.payload    //actions.js a setLogin ar argument a ja dibo seita e holo action.payload
        },
        setLogout: (state,action)=>{
            state.isAuth=false
            state.phone=""
        }
    }

})

console.log(authSlice)