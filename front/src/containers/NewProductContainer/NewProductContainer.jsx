// FUNCANDO 28-11_10:00hs

import React, { Component } from 'react';
import NewProduct from '../../components/NewProduct';
import { connect } from 'react-redux';
import { createProduct, getGrapes } from '../../store/actions/ProductsActions';
import axios from 'axios';
import AdminPanelContainer from '../AdminPanelContainer/AdminPanelContainer';
import s from '../AdminPanelContainer/style.css';


class NewProductContainer extends Component{
	constructor(props){
		super(props);
		this.state={
			productName : '',
			cellarName : '',
			lineName : '',
			year : '',
			stock : 0,
			price : 0,	
			description : '',
			image: '',
			grapes: [],
			allCellars: [],
			allLines: [],
			checked: false
		}
		this.handleChange= this.handleChange.bind(this);
		this.handleClick= this.handleClick.bind(this);
		this.isChecked= this.isChecked.bind(this);
	}

	componentDidMount(){
		axios.get('/api/cellars')
			.then(data => this.setState({ allCellars:data.data }))

		axios.get('/api/lines')
			.then(data => this.setState({ allLines:data.data }))
		this.props.getGrapes();
	}
	
	// Checkboxs de grapes:
	isChecked(e){
		this.setState({
			[e.target.name] : e.target.checked
		});
	}

	// Manejo de cada input:
	handleChange(e){
		if(e.target.name == 'grapes'){
			e.target.checked && !this.state.grapes.includes(e.target) && this.state.grapes.push(e.target);
		}else{
			this.setState({
				[e.target.name] : e.target.value
			});
		}
	}
	
	// Submit del form:
	handleClick(e){
		// console.log(this.state)
		this.state.grapes= this.state.grapes.filter(grape => {
			return grape.checked;
		})
		for(var i=0; i<this.state.grapes.length; i++){
			this.state.grapes[i]= this.state.grapes[i].id;
		}
		e.preventDefault();
		const body= {
			productName : this.state.productName,
			cellarName : this.state.cellarName,
			lineName : this.state.lineName,
			year : this.state.year,
			stock : this.state.stock,
			price : this.state.price,	
			description : this.state.description,
			image: this.state.image,
			grapes: this.state.grapes
		}
		this.props.createProduct(body)
	}

	render(){
		return (
				<div className={s.container}>
					<AdminPanelContainer />
					<NewProduct 
						isChecked={this.isChecked} 
						state={this.state} 
						grapes= {this.props.grapes} 
						handleChange={this.handleChange} 
						handleClick={this.handleClick} 
					/>
				</div>
		)
	}
}

const mapStateToProps= (state) => {
	return {
		grapes : state.products.grapes,
	}
}

const mapDispatchToProps= (dispatch) => {
	return {
		createProduct : function(product){
			return dispatch(createProduct(product));
		},
		getGrapes : function(){
			return dispatch(getGrapes());
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(NewProductContainer);


