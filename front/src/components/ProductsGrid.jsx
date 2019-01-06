import React from 'react';
import s from '../containers/ProductsGrid/styles.css'
import styles2 from '../containers/SimilarProducts/styles.css'

export default (props) => {
    const { products } = props
    return (
        <div id={s.listaProductos} className={styles2.listaProductos}>
            {
                products.length > 0 ? products.map(function(vino, i) {
                    return (
                        <div className={`${s.singleProduct} ${s.hover}`} key={i} >
                        <div onClick={(e) => props.handleClick(vino)}>
                            <div className={s.productoimg}  >
                                <img className={s.imgSingle} src={vino.image} alt=""/>
                            </div>
                            <div className={s.productoInfo}>
                                <hr/>
                                <h1>{vino.productName} </h1>
                                <h3>${vino.price}</h3>
                            </div> 

                        </div>
                            <div className={s.productoBotones}>
                                <button className={s['btn-violeta']}>Comprar</button>
                                <button className={s['btn-violeta2']} onClick={() => props.handleClickCart(vino)}> <i className="fas fa-shopping-cart"></i> </button>
                            </div>
                        </div>
                        )
                })
                 :  null
            }
        </div>
    )
}
