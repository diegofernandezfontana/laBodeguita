import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import Login from '../../components/Login'
import Register from '../Register/RegisterContainer'
import { loginUser } from '../../store/actions/UserActions';
import { bindActionCreators } from 'redux'
class LoginContainer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:"",
            logged: false  
        }   
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleSignIn = this.handleSignIn.bind(this);
        
        
    }

    componentDidMount() {
        console.log(this.props.user)
        // axios.get('/me')
        // .then(res => console.log(res.data))
    }
   

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    handleSubmit(event) {
        event.preventDefault();
        const email = this.state.email
        const password = this.state.password
        console.log(this.props)
        this.props.loginUser(email,password)
        .then( () => this.props.history.push('/') )
        .catch(()=>console.log('No funco'))
    } 



    render() {
        const {email, password}=this.state
        return(
            <React.Fragment>
                {   
                    <Login 
                        handleInputChange={this.handleInputChange} 
                        handleSubmit={this.handleSubmit}
                        email={email}
                        password={password}
                    
                    />
                }
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({loginUser}, dispatch)
//   }

function mapDispatchToProps(dispatch) {
    return {
        loginUser: (email, password)=> dispatch(loginUser(email, password))
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);