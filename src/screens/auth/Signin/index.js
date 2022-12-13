import React, { useState } from 'react';
import { Text, View } from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';

import GoogleLogin from '../../../components/GoogleLogin';
import Input from '../../../components/Input';
import Seperator from '../../../components/Seperator';
import { styles } from './styles';

const Signin = () => {


    const onSignIn = () => {
        console.log ('Hola')


    };

    return (
    <View style={styles.container}>
        <AuthHeader title="Sign In" />


        <Input label="Email" placeholder="example@gmail.com" />
        <Input isPassword label="Password" placeholder="**************" />


        <Button style={styles.button} title="Sign In" />

        <Seperator text="Or Sign in with" />

        <GoogleLogin />

        <Text style={styles.footerText}>
        Don’t have an account? 
           <Text onPress ={onSignIn} style={styles.footerLink}>Sign Up </Text>
        </Text>




    </View>
    )
}

export default Signin;