import { SELECT_PRODUCT, FETCH_ALL_PRODUCTS, SELECT_SIMILAR_PRODUCTS, CREATE_PRODUCT, GET_GRAPES } from '../constants/index'  
import axios from 'axios'

// Cuando selecciona un producto desde la grilla o desde el filtro. Recibe un ID 
const selectProduct = function(product){
    return {
        type: SELECT_PRODUCT,
        product
    }
}

export const selectSingleProduct = (productId) => {
    return dispatch => 
        axios.get(`/api/products/${productId}`)
        .then( producto => {
            dispatch(selectProduct(producto.data))
        })
        .catch(e => console.error(e))
    
}

// Productos similares:

const selectSimilarProducts = function(products){
    return {
        type: SELECT_SIMILAR_PRODUCTS,
        products
    }
}

export const fetchSimilarProducts = (productId) => dispatch => {
    axios.get(`/api/products/getProductsByGrape/${productId}`)
    .then( res => {
        dispatch(selectSimilarProducts(res.data))
    })
    .catch(e => console.log(e))
}


// Render inicial
const fetchProducts = function(products) {
    return {
        type: FETCH_ALL_PRODUCTS,
        products
    }
}

export const fetchAllProducts = () => {
    return dispatch => 
        axios.get('/api/products')
        .then( res => {
            dispatch(fetchProducts(res.data))
        })
        .catch(e => console.log(e))
}


// Publico un nuevo producto:
const actionCreateProduct= (product) => {
	return {
		type: CREATE_PRODUCT,
		product
	}
}

export const createProduct= (product) => {
	return dispatch => {
		axios.post('/api/products/newproduct', product)
			.then(res => {
				dispatch(actionCreateProduct(res.data))
			})
			.catch(e => console.log(e))
	}
}

const actionGetGrapes= (grapes) => {
	return {
		type: GET_GRAPES,
		grapes
	}
}

export const getGrapes= () => {
	return dispatch => {
		axios.get('/api/grapes')
			.then(res => res.data)
			.then(data =>	dispatch(actionGetGrapes(data)))
			.catch(e => console.log(e))
	}
}