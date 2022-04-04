/* eslint-disable import/no-anonymous-default-export */
import { ADD_TODO, REMOVE_TODO } from "../action/action-types"

const intialState = []

export default (state = intialState, action) => {
    switch (action.type) {
        case ADD_TODO : 
            return [...state, action.payload]
         
        case REMOVE_TODO :
            return state.filter(todo => todo.id !== action.payload)

        default:
            return state;
    }
}