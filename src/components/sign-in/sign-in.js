import React from 'react';
import { auth,signInWithGoogle } from '../../firebase/firebase.utils';
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
    handleSubmit = async event =>{
        event.preventDefault();
        const {email,password} = this.state;

        try{

            await auth.signInWithEmailAndPassword(email,password);

            this.setState({
                email:'',
                password:''
            });

        }catch(error){
            console.log(error);
        }
        
    }

    handleChange = (event,name) =>{
        event.preventDefault();

       // const {value,name} = event.target;
        this.setState({[name]:event.target.value},() => console.log(this.state));
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
                        handleChange={(e) => this.handleChange(e,'email')}
                        required/>
                    
                    <FormInput 
                        name='password' 
                        type='password' 
                        label='Password'
                        value={this.state.password}
                        handleChange={(e) => this.handleChange(e,'password')}
                         required/>

                    <div className='buttons'>
                        <CustomButtom  >Sign in</CustomButtom>
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