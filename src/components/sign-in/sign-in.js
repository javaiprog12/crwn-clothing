import React from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButtom from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';
import './sign-in.styles.scss';


class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit = event =>{
        event.preventDefault();
        this.setState({
            email:'',
            password:''
        })
    }

    handleChange = event =>{
        event.preventDefault();

        const {value,name} = event.target;
        this.setState({[name]:value});
    }

    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    
                    <FormInput
                        name='email' 
                        type='email' 
                        label='Email'
                        value={this.state.email} 
                        onChange={this.handleChange}
                        required/>
                    
                    <FormInput 
                        name='password' 
                        type='password' 
                        label='Password'
                        value={this.state.password}
                        onChange={this.handleChange}
                         required/>

                    <div className='buttons'>
                        <CustomButtom type="submit" >Sign in</CustomButtom>
                        <CustomButtom onClick = {signInWithGoogle} isGoogleSignIn >
                            Sign in with Google
                        </CustomButtom>
                    </div>
                    
                    
                        
                        
                </form>
            </div>
        )
    }
}


export default SignIn;