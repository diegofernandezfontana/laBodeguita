import axios from "axios"
import ReduxThunk from 'redux-thunk' 
import { func } from "prop-types";

const add_product_to_order = function(product){
    return {
        type: "ADD_TO_ORDER",
        product
    }
}
const remove_product_from_order=function(product){
   return{
       type:"REMOVE_FROM_ORDER", 
       product
    }   
}
const delete_product_from_order=function(product){
    return{
        type:"DELETE_FROM_ORDER",
        product
    }
}
const add_store_to_state=function(storage){
    return{
        type:"ADD_STORAGE_TO_STATE",
        storage
    }
}
const empty_cart = function(){
    return{
        type:"EMPTY_CART",
        carrito:[]
    }
}
export const handleEmptyOrder = () => {
    return (dispatch, getState) => {
        dispatch(empty_cart())
        setLocalStorage(getState())
    }
}

export const addProductToOrder = (product) => {
    return (dispatch, getState) => {
        dispatch(add_product_to_order(product))
        setLocalStorage(getState())
    }
}
export const removeProductFromOrder = (product)=>{
  //resta una unidad del producto de la orden
    return(dispatch, getState)=>{
        dispatch(remove_product_from_order(product))
        setLocalStorage(getState())
    }
}
export const deleteProductFromOrder=(product)=>{
    //elimina el producto de la orden
    return(dispatch, getState)=>{
        dispatch(delete_product_from_order(product))
        setLocalStorage(getState())
    }
}
export const setStateByStorage=(storage)=>{
    return(dispatch)=>{
            dispatch(add_store_to_state(storage))
    }
}

export const setLocalStorage = ({ order }) => {
    //SETE
    var setOrder = JSON.stringify(order.products)
    localStorage.setItem("order", setOrder)  
}
