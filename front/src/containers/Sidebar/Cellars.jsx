import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import Checkbox from '@material-ui/core/Checkbox';
import s from '../../containers/Sidebar/styles.css'

class Grapes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: false,
            allCellars: []
        }
    }

    componentDidMount() {
        axios.get('/api/cellars/')
        .then(res => { this.setState({ allCellars: res.data })})
    }
    toggleMenu() {
        this.setState(prevState => ({
            check: !prevState.check
          }))
    }

    
    render() {
        const { allCellars } = this.state
        const { handleChange } = this.props
        return (
            <div>
                <ul className={s.filtros}>
                <div className={s.categoria}>
                    <h3> Bodegas</h3>
                        <i onClick={() => this.toggleMenu()}
                        className="material-icons">{this.state.check ? "expand_less" : "expand_more" }</i>
                </div>

                    
                {
                    this.state.check &&
                <form>
                        {
                        allCellars[0] && allCellars.map( function (cellar,i) {
                            return (
                                <label key={i} htmlFor={cellar.id}>
                                <li className={s.filtrosItems}> 
                                    <input id={cellar.id} className={s.checkbox} 
                                    onChange={handleChange} 
                                    type="checkbox" 
                                    value={JSON.stringify(cellar)}
                                    /> 
                                {cellar.cellarName}</li>                                  
                            </label>
                        
                                )})
                        }
                    </form>
                }

                </ul>  
            </div>
            )
        }
}

// function mapStateToProps(state) {
//     return {
//         selectedProduct: state.products.selectedProduct,
//         similarProducts: state.products.similarProducts
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         getProductsBySearchSidebar: function(producto) {
//             dispatch(getProductsBySearchSidebar(producto))
//         }
//     }
// }


export default connect(null, null) (Grapes);