import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, KeyboardAvoidingView, Alert, Button } from 'react-native';
import AppTextInput from './components/AppInputField';
import AppButton from './components/AppButton';

export default function App() {
  const [emailAdd, setEmailAdd] = useState('');
  const [password, setPassword] = useState('');

  let btnLogin = (e) => {
    console.log("Hello")
  }


  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ImageBackground 
          source={require('./assets/background.png')}
          style={styles.container}>

            <View style={styles.top}>
              <Text style={styles.header}>Creating the</Text>
              <Text style={styles.header}>perfect</Text>
              <Text style={styles.header}>caring environment</Text>

              <Text style={styles.subHeader}>Centennial Care Home</Text>
            </View>

            <View style={styles.loginContainer}>
              <Text style={styles.title}>Login</Text>

              <AppTextInput placeholder="Email Address" onChangeText={ (emailAdd) => setEmailAdd( emailAdd ) } />
              <AppTextInput placeholder="Password" textContentType="password" secureTextEntry={true} onChangeText={ (password) => setPassword( password ) } />
              
              <AppButton text="Login" onPress={ () => Alert.alert("Hello world")  }/>
              
              <Text style={styles.forgotPass}>Forgot password?</Text>
              <Text style={styles.signUp}>Don't have an account?  
                <Text style={styles.signUpInner}> Sign Up</Text>
              </Text>
            </View>


      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#000000',
    width:'100%',
    height:'100%',
  },
  header:{
    color:'#FFFFFF',
    fontSize:38,
  },
  subHeader:{
    fontSize: 16,
    color: '#5298EB',
    marginTop: 20
  },
  top:{
    height:'43%',
    alignItems:'left',
    justifyContent:'flex-end',
    padding:30,
  },
  loginContainer:{
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 10
  },
  title:{
    color:'#FFFFFF',
    fontSize:18,
  },
  forgotPass:{
    color:"#FFFFFF", 
    marginTop: 20
  },
  signUp:{
    color:"#FFFFFF", 
    marginTop:35, 
    textAlign:'center'
  },
  signUpInner:{
    color: "#5298EB"
  }
});
