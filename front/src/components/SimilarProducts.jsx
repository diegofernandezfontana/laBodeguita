import React from 'react';
import s from '../containers/ProductsGrid/styles.css';{/* NO TOCAR SON DE OTRO COMPONENTE */}



export default ({vinosSimilares, handleClick, handleClickCart}) => {
    return (
        <div className='listaRecomendados'>

        <h1>Vinos recomendados</h1>

            <div id={s.listaProductos}>
        {
            vinosSimilares ? vinosSimilares.map(vino =>
                    //# Vino necesita
                    // .productName .price
                    // FALTA AGREGAR HANDLECLICK para que puedan agregar
                    <div key={ vino.productName } className={`${s.singleProduct} ${s.hover}`} >
                    <div  onClick={(e) => handleClick(vino)}>
                        <div className={s.productoimg}>
                            <img className={s.imgSingle} src={vino.image} alt=""/>
                        </div>
                        <div className={s.productoInfo}>
                        <hr/>
                        <h1> {vino.productName} </h1>
                        <h3> ${vino.price}</h3>
                    </div> 

                    </div>
                    <div className={s.productoBotones}>
                        <button className={s['btn-violeta']}>Comprar</button>
                        <button className={s['btn-violeta2']} onClick={() => handleClickCart(vino)}> <i className="fas fa-shopping-cart"></i> </button>
                    </div>
                </div>
            ) : <h1>No hay mas vinos similares </h1>
        }
        {/*FIN LISTA PRODUCTOS ES EL DIV DE ABAJO */} 
        </div>
        </div>
        
        
    )
}



