import React from 'react';
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';


import s from '../containers/Register/RegisterStyles.css' //ESTILOS DE OTRO COMPONENTE NO PISAR

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: '#0c814b'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

function SignIn(props) {
  const { classes } = props;
  const {handleInputChange, handleSubmit , email, password, lastName, firstName} = props;
  return (
    <main className={classes.main} >
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email" >Email Address</InputLabel>
            <Input id="email" name="email" value={ email } onChange={handleInputChange} autoComplete="email" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password" >Password</InputLabel>
            <Input name="password" type="password" value={ password } onChange={handleInputChange} id="password" autoComplete="current-password" />
          </FormControl>
          <br/><br/><br/>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={s.btnRegister}
                >
                Sign in  
            </Button>          
        </form>
      </Paper>
    </main>
  );
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);

/*import React from 'react';


export default ({handleInputChange, handleSubmit, email, password, lastName, firstName}) => {
 /* return(
   
    <form onSubmit={handleSubmit}>
    <h1>LOGIN</h1>
     
      <label>
        email:
        <input value={email} type="text" name="email" onChange={handleInputChange}/>
      </label>
      <label>
        password
        <input value={password} type="password" name="password" onChange={handleInputChange}/>
      </label>
      <input type="submit" value="Submit" />
  </form>

  )

}*/