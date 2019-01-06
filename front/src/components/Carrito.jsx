import React from 'react';
import { Link } from 'react-router-dom'

import s from '../containers/Cart/styles.css'


export default ({ order, handleClickCart, handleRemoveProduct, handleDeleteProduct, handleClickEmpty }) => {
    var total = 0;
    return(
        <div className={s.carritoContainerFluid}>
            <div className={s.carritoContainer}>

                <table>
                    <thead>
                        <tr>
                            <th><span>Producto</span></th>
                            <th><span>Cantidad</span></th>
                            <th><span>Subtotal</span></th>
                            <th><button className={s.eliminarCarrito} onClick={()=> handleClickEmpty("asd")}>Vaciar carrito</button></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        order.length > 0 ? order.map(producto => {    
                            return( 
                            <tr key={producto.product.id}>
                                <th>
                                    <div>
                                        <h2>{producto.product.productName} </h2>
                                        <h3>Uvas: <span>Malbec Cabernet</span></h3>
                                    </div>
                                </th>
                                <th>
                                    <button className={s.sumarRestar} onClick={() => handleRemoveProduct(producto.product)}>-</button>
                                        <p>{producto.cantidad}</p> 
                                    <button className={s.sumarRestar} onClick={() => handleClickCart(producto.product)}>+</button></th>
                                <th>{producto.product.price * producto.cantidad}</th>
                                <th><button className={s.eliminarCarrito} onClick={()=>handleDeleteProduct(producto.product)}>Eliminar Producto</button></th>

                            </tr>
                            )
                        }) :  false
                    }  
                        <tr className={s.trfinal}>
                            <th>
                                <div>
                                </div>
                            </th>
                            <th>
                              
                            </th>
                            <th></th>
                            <th >
                           { 
                               
                                order.length > 0 ? order.map(producto => {    
                                return(
                                    console.log(total),
                                    total+= producto.product.price,
                                    console.log(total)
                                )
                                }) : null
                            }
                            <b> Total:  ${total}</b>
                            </th>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div className={s.carritoFooter}>
                <div className={s.carritoFooterCheckout}>
                    <div className={s.footerLeft}>
                        <Link to ="/" > <button className={s.btnBack} >Back to shopping</button></Link>
                    </div>
                    <div className={s.footerRight}>
                        <Link to={`/checkout`} className={s.btnCheckout}> Checkout </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}