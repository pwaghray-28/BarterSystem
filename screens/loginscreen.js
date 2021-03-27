import React from 'react'
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native'
import firebase from 'firebase'
import db from '../config'
export default class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            email: "", password: ""
        }
    }
    userSignUp = ()=>{
        firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(response=>{
            return alert("User has been successfully created!")
        })
        .catch(function(error){return alert(error.message)})
    }
    UserLogin = ()=>{
        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then(response=>{
            return alert("Successfully logged in!")
        })
        .catch(function(error){return alert(error.message)})
    }    
    render(){
        return(
            <View style = {styles.container}>
            <TextInput placeholder = "Enter your Email Address" keyboardType = "email-address" onChangeText = {text =>{this.setState({email:text})}} style = {styles.loginbox}/>
            <TextInput placeholder = "Enter your password" secureTextEntry = {true} onChangeText = {text =>{this.setState({password:text})}} style = {styles.loginbox}/>
            <TouchableOpacity style = {styles.button} onPress = {()=>{this.userSignUp()}}>
            <Text>
            Sign Up
            </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress = {()=>{this.UserLogin()}}>
            <Text>
            Log in
            </Text>
            </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({ container:{ flex:1, backgroundColor:'#ffe0b2' },
loginBox:{ width: 300, height: 35, borderBottomWidth: 1.5, borderColor:'#ffab91', fontSize: 20, marginBottom:20, marginTop:5 },
 button:{ width:"75%", height:50, justifyContent:'center', alignItems:'center', borderRadius:25, backgroundColor:"#ffff", elevation:10 },
})