import React from 'react';

import FormInput from '../form-input/form-input';
import CustomButtom from '../custom-button/custom-button';

import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';


import './sign-up.styles.scss';


class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword : ''
        };
    }

    handleSubmit = async event =>{
        event.preventDefault();

        const {displayName,email,password,confirmPassword} = this.state;
        
        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        }

        try{
            console.log(this.state);
            const {user} = await auth.createUserWithEmailAndPassword(email.trim(),password);
            //await for this to finish
            await createUserProfileDocument(user,{displayName});
            //clear out form
            this.setState({
                displayName :'',
                email:'',
                password:'',
                confirmPassword:''
            });

        }catch(error){
            console.error(error);
        }
    }

    handleChange =  (event ,name) =>{
       
        this.setState({[name]:event.target.value},( ) => console.log(this.state));
        
    }
    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'> I do  not have an account</h2>
                <span>Signup with your email and passowrd</span>
                <form className='sign-up' onSubmit={this.handleSubmit}>
                    <FormInput
                      type = 'text'
                      name = 'displayName'
                      value = {displayName}
                      handleChange = {(e) => this.handleChange(e,'displayName')}
                      label = 'Display Name'
                      required
                    />

                    <FormInput
                      type = 'email'
                      name = 'email'
                      value = {email}
                      handleChange = {(e) => this.handleChange(e,'email')}
                      label = 'Email'
                      required
                    />
                    <FormInput
                      type = 'password'
                      name = 'password'
                      value = {password}
                      handleChange = {(e) => this.handleChange(e,'password')}
                      label = 'Password'
                      required
                    />
                    <FormInput
                      type = 'password'
                      name = 'confirmPassword'
                      value = {confirmPassword}
                      handleChange = {(e) => this.handleChange(e,'confirmPassword')}
                      label = 'Confirm Password'
                      required
                    />

                    <CustomButtom type ="submit" >SIGN UP</CustomButtom>
                </form>
            </div>
        )
    }
}


export default SignUp;