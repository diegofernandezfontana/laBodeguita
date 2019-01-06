import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductsGrid from '../../components/ProductsGrid';
import SidebarContainer from '../Sidebar/SidebarContainer'

import s from '../Main.css'

import { selectSingleProduct, fetchSimilarProducts } from '../../store/actions/ProductsActions'
import { addProductToOrder, setLocalStorage } from '../../store/actions/OrderActions'

//MATERIAL UI PARA EL TOAST
import { MySnackbarContentWrapper} from '../Toasts/toast1'
import Snackbar from '@material-ui/core/Snackbar';

function mapStateToProps(state, ownProps) {
    return {
        filtrosNavbar: state.products.filteredProducts,
        allProducts: state.products.allProducts,
        order: state.order
        
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        selectSingleProduct: function(producto) {
            dispatch(selectSingleProduct(producto))
        },
        fetchSimilarProducts: function(producto) {
            dispatch(fetchSimilarProducts(producto))
        },
        addProductToOrder: function(product){
            dispatch(addProductToOrder(product))
        },
        setLocalStorage: function(estadoProducts){
            setLocalStorage(estadoProducts)
        }
    };
}


class ProductsGridContainer extends Component {
    constructor(props) {
        super(props);
        this.state= {
            //Open es para el toast
            open: false,
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClickCart = this.handleClickCart.bind(this)
        this.handleClickToast = this.handleClickToast.bind(this)
    }

    handleClickToast = () => {
        this.setState({ open: true });
      };
    
    handleCloseToast = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }

    this.setState({ open: false });
    };
      
    
    handleClick(selectedProduct) {
        this.props.selectSingleProduct(selectedProduct.id)
        this.props.fetchSimilarProducts(selectedProduct.id)
        this.props.history.push(`/OneProduct/${selectedProduct.id}`)
    }
    
    handleClickCart(product){
        this.props.addProductToOrder(product);
        this.handleClickToast();
    }

    handleClickToast = () => {
        this.setState({ open: true });
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false });
    };
    
    render() {
        return (
            <div className={s.row}>
            
                <div className={s.side}>
                    <SidebarContainer />
                </div>

                <div className={s.main}>
                    {
                        this.props.filtrosNavbar.result === false ?
                        <h2> Ya se lo chupetearon ): </h2> :
                        (
                            <ProductsGrid 
                                products={this.props.filtrosNavbar.length > 0 ?
                                    this.props.filtrosNavbar : 
                                    this.props.allProducts
                                }
                                handleClick={this.handleClick}
                                handleClickCart={this.handleClickCart}
                                handleClickToast={this.handleClickToast}
                            />
                        )
                    }
                      <Snackbar
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        open={this.state.open}
                        autoHideDuration={2500}
                        onClose={this.handleClose}
                        >
                        <MySnackbarContentWrapper
                            onClose={this.handleClose}
                            variant="success"
                            message="El vino se agrego al carrito!"
                        />
                        </Snackbar>
                </div>

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsGridContainer);





