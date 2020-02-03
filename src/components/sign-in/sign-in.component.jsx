import React,{Component} from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';




export class SignIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password: ''
        }
    }
    handleSubmit = event =>{
        event.preventDefault();
        this.setState({email:'',password:''})
    }

    handleChange = event => {
        const {value,name}=event.target;
        this.setState ({ [name]:value})
    }
    render() {
        return (
            <div class='sign-in'>
                <h1> I already have an account</h1>
                <span>Signin with email and password</span>
                <form onSubmit={this.handleSubmit}>
                <FormInput name='email'  type='email' value={this.state.email} handleChange={this.handleChange} label='Email' required />

                <FormInput name='password' type='password' value={this.state.password}  handleChange={this.handleChange} label='Password' required />
      
                <CustomButton type='submit' value='Submit Form' >Sign in </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;
