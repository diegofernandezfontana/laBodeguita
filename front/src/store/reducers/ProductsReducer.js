import { FETCH_PRODUCTS_BY_NAME, SELECT_PRODUCT, FETCH_ALL_PRODUCTS, SELECT_SIMILAR_PRODUCTS, CREATE_PRODUCT, GET_GRAPES } from '../constants/index'

const initialSate ={
    selectedProduct: {},
    filteredProducts: [],
    allProducts: {},
    similarProducts: {},
    product: {},
    grapes: {}
};

export default (state = initialSate, action)=>{

    switch (action.type) {

        // case FILTER_SIDEBAR:
        //     return Object.assign({}, state, { 
        //         SidebarFilteredProducts: actions.products,
        //     });

        case FETCH_PRODUCTS_BY_NAME:
            return Object.assign({}, state, { filteredProducts: action.products });

        case SELECT_PRODUCT:
            return Object.assign({}, state, { selectedProduct: action.product })

        case SELECT_SIMILAR_PRODUCTS:
            return Object.assign({}, state, { similarProducts: action.products })

        case FETCH_ALL_PRODUCTS:
            return Object.assign({}, state, { allProducts: action.products })

        case CREATE_PRODUCT:
                return Object.assign({}, state, { product:action.product });

        case GET_GRAPES:
                return Object.assign({}, state, { grapes:action.grapes });

        default:
            return state;
    }

}


