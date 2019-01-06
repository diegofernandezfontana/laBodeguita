// FUNCANDO 28-11_10:00hs

import React from 'react';
import s from '../containers/NewProductContainer/style.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});


class TextFields extends React.Component {
	state={
		grape: false
	}
	handleChange= (name) => e => {
		this.setState({ [name]:e.target.checked })
	}
  render() {
    const { classes, state, handleChange, grapes, isChecked } = this.props;
		// console.log(grapes)
    return (
			<div className={s.form}>
			{/* <AdminPanelContainer /> */}
				<div className={s.title}>
					<h1>Nuevo producto</h1>
				</div>
				<form className={classes.container} noValidate autoComplete="off">
					<TextField
						id="standard-name"
						label="Nombre"
						fullWidth
						// className={classes.textField}
						value={state.productName}
						onChange={handleChange}
						margin="normal"
						name='productName'
					/>
					<TextField
						id="standard-name"
						label="Año"
						fullWidth
						// className={classes.textField}
						value={state.year}
						onChange={handleChange}
						margin="normal"
						name='year'
					/>
					<TextField
						id="standard-number"
						label="Precio"
						value={state.price}
						onChange={handleChange}
						type="number"
						fullWidth
						// className={classes.textField}
						InputLabelProps={{
							shrink: true,
						}}
						margin="normal"
						name='price'
					/>				
					<TextField
						id="standard-number"
						label="Stock"
						value={state.stock}
						onChange={handleChange}
						type="number"
						fullWidth
						// className={classes.textField}
						InputLabelProps={{
							shrink: true,
						}}
						margin="normal"
						name='stock'
					/>
					<TextField
						id="standard-name"
						label="Nombre imagen"
						fullWidth
						// className={classes.textField}
						value={state.image}
						onChange={handleChange}
						margin="normal"
						name='image'
					/>
					<TextField
						id="standard-multiline-static"
						label="Descripción"
						multiline
						fullWidth
						// className={classes.textField}
						margin="normal"
						onChange={handleChange}
						name='description'
					/>

					<TextField
						onChange={handleChange}
						name='cellarName'
						label="Bodega"
						fullWidth
						margin="normal"
						select
						InputLabelProps={{
							shrink: true,
						}}
						SelectProps={{
							native: true,
							MenuProps: {
								className: classes.menu,
							},
						}}
					>
						{
							state.allCellars[0] && state.allCellars.map(cellar => (
							<option key={cellar.id} >
								{cellar.cellarName}
							</option>
							))
						}				
					</TextField>

					<TextField
						onChange={handleChange}
						name='lineName'
						label="Linea"
						fullWidth
						margin="normal"
						select
						InputLabelProps={{
							shrink: true,
						}}
						SelectProps={{
							native: true,
							MenuProps: {
								className: classes.menu,
							},
						}}
					>
						{
							state.allLines[0] && state.allLines.map(line => (
							<option key={line.id} >
								{line.lineName}
							</option>
							))
						}				
					</TextField>

					<div className={s.checkbox}>
						<div className={s.header}>
							<p>Tipos de uva</p>
						</div>
						{
							grapes[0] && grapes.map(grape => {
								return (
									<div key= {grape.id}>
										<div className="form-check">
											<input onChange={handleChange} className="form-check-input" type="checkbox" value={grape.id} id={grape.id} name='grapes'/>
											<label className="form-check-label" htmlFor={grape.id}>
												{grape.grapeName}
											</label>
										</div>
									</div>						
								)
							})
						}
					</div>
					<Button onClick={this.props.handleClick} variant="contained" color="secondary" className={classes.button}>
						Publicar
					</Button>
				</form>
			</div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);

