import React from 'react';
import Paper from '@material-ui/core/Paper';
import s from './SingleProduct.css'
import Button from '@material-ui/core/Button';


class SingleProduct extends React.Component {
  render() {
    return (
      <div > 
          <Paper elevation={4}>
                  {
                    !!this.props.selectedProduct ? 
                    <div className={s.bigcontainer}>
                    
                      <div className={s.wrapper}>
                          <div className={s.imagenProductoContainer}>
                              <img src={this.props.selectedProduct.image} width="300" height="300"></img>
                          </div>
                          <div className={s.caracteristicasProductoContainer}>
                            <div className={s.detallesProducto}>
                                <h2>{this.props.selectedProduct.productName}</h2>
                                <h2>Año {this.props.selectedProduct.year}</h2>
                                <h2 className={s.precio}>$ {this.props.selectedProduct.price}</h2>
                            </div>
                            <hr />
                            <ul className={s.detallesCompra}>
                                <div className={s.carrito}>
                                 <Button variant="contained" color="primary">
                                Agregar al carrito
                              </Button>
                              </div>
                            </ul>
                          </div>    
                  
                      </div>
                    </div>
                    : <h2>Este Producto no existe INSERTAR 404 NOT FOUND</h2>
                  }
          </Paper>
      </div>
    );
  }
}

export default (SingleProduct);
