import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from './store/UserSlice.js'


let cart = createSlice({
    name : 'cart',
    initialState : [
        { id : 0,
          prd : '자가드 라운드 오버핏 니트',
         option : 95,
         price : 38000,
         deliver : 5000},
         {id : 1,
          prd : '골덴 와이드 밴딩 팬츠',
         option : 100,
         price : 40000,
         deliver : 5000}
    ],
    reducers : {
        changeCount(state, action){
    let 번호 =  state.findIndex((a)=>{return a.id == action.payload})
         state[번호].option++
        },
        addItem(state, action){
            state.push(action.payload)
        }
    }
})


export default configureStore({
    reducer : {
     user : user.reducer,
     cart : cart.reducer
    }
})
export let {changeCount,addItem} = cart.actions