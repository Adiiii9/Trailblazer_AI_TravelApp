import { Image } from '@rneui/base'
import { useState } from 'react'
import { KeyboardAvoidingView, TextInput, TouchableOpacity,Platform, Alert } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
// const axios = require('axios');

const Register = ({navigation}) => {

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setErrors]=useState({})

  const handleErrors=()=>{
    let error={}
    if (!email){
      error.email="Email required"
    }
    if (!password){
      error.password="Password required"
    }
    if (password.length<4){
      error.passwordLength="Password should be atleast 7 characters"
    }
    setErrors(error)
    
    // console.log(error)

    return Object.keys(error).length===0
  }

  const handleSubmit= async()=>{
    try {
      if(handleErrors()){

  
        // const {data}=await axios.post('http://192.168.0.108:3000/api/v1/auth/register',{email,password});
        // const {data}=await axios.post('http://192.168.0.108:8000/api/v1/auth/register',{email,password});

        const {data}=axios.post("http://192.168.67.70:8080/api/v1/auth/register", {email,password}, { timeout: 5000 }) // Timeout in milliseconds
        .then(response => {
        // console.log(response)
        console.log("Submitted",{email,password})
        
        // Alert.alert(response.data.message);
        // localStorageData();
        setEmail("");
        setPassword("");
        setErrors({});
        })
        .catch(error => {
          // Handle error
          console.error('Error:', error);
        });
        
      }

    } 
    catch (error) {
      // alert(error.response.data.message)
      // Alert.alert(error)
      console.log(error)
    }

   
  }

  

  

  return (
    
      // <KeyboardAvoidingView
      // // behavior="height"
      // // style={[keyboardViewContainer]}
      // // behavior={Platform.OS === "ios" ? "padding" : "height"}

      // >
        <View style={[maincontainer]}>
          <Text style={[headerText]}>Let's Explore!</Text>
          <View style={[imageView]}>
            <Image style={[image]} source={require("../../assets/register.jpg")}/>
          </View>

          {/* <View>
            <Text style={[label]}>Username</Text>
            <TextInput  autoCorrect={false} autoCapitalize="none" style={[inputStyle]}></TextInput>
          </View> */}

          <View>
            <Text style={[label]}>Email</Text>
            <TextInput 
            value={email} 
            autoCorrect={false} 
            onChangeText={(prev)=>{setEmail(prev)}}
            autoCapitalize="none" 
            style={[inputStyle]}></TextInput>
            {
              error.email?<Text style={[errorText]}>{error.email}</Text>:null
            }
          </View>
          
          <View>
            <Text style={[label]}>Password</Text>
            <TextInput 
            value={password} 
            autoCorrect={false} 
            onChangeText={(prev)=>{setPassword(prev)}}
            autoCapitalize="none" 
            secureTextEntry 
            style={[inputStyle]}></TextInput>
            {
              (error.password?<Text style={[errorText]}>{error.password}</Text>:null)  
            }
            {
              (error.passwordLength?<Text style={[errorText]}>{error.passwordLength}</Text>:null)
            }
            
            
          </View>

         
        
          <TouchableOpacity 
          onPress={handleSubmit}
          style={[btn]}>
            <Text style={[btn_text]}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
          
            <Text style={[text1]}>Already have an account? Login</Text>
        
          </TouchableOpacity>

        </View>
    // </KeyboardAvoidingView>

  )
}


const styles = StyleSheet.create({
  maincontainer:{
    height:"100%",
    padding: 50,
    backgroundColor:"white",
  },
  container1:{}, 
  container2:{},
  text1:{
    color:"#D8D9DA",
    fontSize:13.5,
    padding:6,
    fontWeight:'800',
  },
  text2:{},
  headerText:{
    fontSize: 28,
    fontWeight: '600',
    color:"black"
  },

  image:{
    width:"100%",
    height: "100%",
    // resizeMode:"contain",
    resizeMode:"cover",
    // marginBottom:19,
    marginTop:0
  },

  imageView:{
    width:310,
    height: 250,
    marginBottom:10
  },

  label:{
    fontSize: 13,
    color:"black"
  },

  inputStyle:{
    borderWidth:1,
    marginTop:6,
    marginBottom:10,
    borderColor:"#B4B4B3",
    height:42,
    padding:10,
    color:"black",
    borderRadius:10


  },

  btn:{
    height:46,
    marginTop:10,
    marginBottom:4,
    backgroundColor:"#222831",
    display: 'flex',
    alignItems:"center",
    justifyContent: 'center',
    borderRadius:10

  },

  btn_text:{
    color:"white",
    fontSize: 18,
    fontWeight: '800',
    
  },

  keyboardViewContainer:{
    height:"100%",
    backgroundColor:"white"
  },


  errorText:{
    color:"red",
    fontSize:10,
    paddingHorizontal:4,
    marginBottom:3,
    textAlign:"right"

  }
})

const {maincontainer, container1, container2, text1,text2,
  headerText,image,imageView,label,inputStyle,btn,btn_text,keyboardViewContainer,errorText}=styles
export default Register