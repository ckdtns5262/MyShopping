import {createSlice} from "@reduxjs/toolkit";

let user = createSlice({
    name : 'user',
    initialState : {name : '최웅', age : 30},
    reducers : {
        changeName(state){
            state.name = '최우식'
        }, 
        changeAge(state, action){
            state.age += action.payload
        }
    }
})


export let {changeName,changeAge} = user.actions

export default user