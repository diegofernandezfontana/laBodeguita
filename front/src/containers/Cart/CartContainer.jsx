// IMPORT SINCE LIBRARIES
import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import Carrito from '../../components/Carrito'
import {addProductToOrder, removeProductFromOrder, deleteProductFromOrder, handleEmptyOrder} from '../../store/actions/OrderActions'

class cartContainer extends React.Component{
    constructor(props){
        super(props)
        this.handleClickCart = this.handleClickCart.bind(this)   
        this.handleRemoveProduct = this.handleRemoveProduct.bind(this)
        this.handleDeleteProduct = this.handleDeleteProduct.bind(this)
        this.handleClickEmpty = this.handleClickEmpty.bind(this)
    }
    
    handleClickCart(product){
        this.props.addProductToOrder(product);
    }
    handleRemoveProduct(product){
        this.props.removeProductFromOrder(product)
    }
    handleDeleteProduct(product){
        this.props.deleteProductFromOrder(product)
    }
    handleClickEmpty(){   
        this.props.handleEmptyOrder()
    }

    render(){
        return(
            <Carrito 
            order={this.props.order.products} 
            handleClickCart={this.handleClickCart}
            handleRemoveProduct={this.handleRemoveProduct}
            handleDeleteProduct={this.handleDeleteProduct}
            handleClickEmpty={this.handleClickEmpty}
            />
        )
    }
}

function mapStateToProps(state){
    return{
        order: state.order
    }
};

function mapDispatchToProps(dispatch){
    return{ 
        addProductToOrder:function(product){
            dispatch(addProductToOrder(product))
        },
        removeProductFromOrder:function(product){
            dispatch(removeProductFromOrder(product))
        },
        deleteProductFromOrder:function(product){
            dispatch(deleteProductFromOrder(product))
        },
        handleEmptyOrder:function(algo){
            dispatch(handleEmptyOrder(algo))
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(cartContainer)