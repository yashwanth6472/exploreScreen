import { SET_PRODUCTS } from "./action"

const initialState = {
    productsData: []

}

export const mainReducer = (state: any = initialState, action: any) =>{
    if(action.type == SET_PRODUCTS){
        return {...state, productsData: action.payload}
    }
    return state
}   