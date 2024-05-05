import { Image } from '@rneui/base'
import { useContext, useState } from 'react'
import { KeyboardAvoidingView, TextInput, TouchableOpacity,Platform,Alert } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { authContext } from '../context/authContext'
// const axios = require('axios');

const Login = ({navigation}) => {
  const [state,setState]=useContext(authContext)

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

  
  const handleSubmit = async() =>{
    try {
      if(handleErrors()){

  
        // const {data}=await axios.post('http://192.168.0.108:3000/api/v1/auth/register',{email,password});
        // const {data}=await axios.post('http://192.168.0.108:8000/api/v1/auth/register',{email,password});
        axios.post("http://192.168.216.70:8080/api/v1/auth/login", {email,password}, { timeout: 5000 }) // Timeout in milliseconds
        .then(response => {
        // console.log(JSON.stringify(data))
        const {data}=response
        console.log("Submitted",{email,password})
        setState(data)
        console.log(JSON.stringify(data))
        AsyncStorage.setItem('@auth',JSON.stringify(data.token));
        Alert.alert(response.data.message);
        setEmail("");
        setPassword("");
        setErrors({});
        navigation.navigate("Home")
        })
        .catch(error => {
          // Handle error
          console.error('Error:', error);
        });

        localStorageData();
        




        
      }

    } catch (error) {
      // alert(error.response.data.message)
      // Alert.alert(error)
      console.log(error)
    }
  }

  const localStorageData = async () => {
    try {
      const value = await AsyncStorage.getItem("@auth");
      console.log("LocalStorage ===> ", value);
      // You can now use the retrieved value here
    } catch (error) {
      console.error("Error retrieving data from AsyncStorage:", error);
    }
  }
  

  
  

  return (
    
      // <KeyboardAvoidingView
      // // behavior="height"
      // // style={[keyboardViewContainer]}
      // // behavior={Platform.OS === "ios" ? "padding" : "height"}

      // >
        <View style={[maincontainer]}>
          <Text style={[headerText]}>Welcome Back!</Text>
          <View style={[imageView]}>
            <Image style={[image]} source={require("../../assets/login.jpg")}/>
          </View>

          {/* <View>
            <Text style={[label]}>Username</Text>
            <TextInput  autoCorrect={false} autoCapitalize="none" style={[inputStyle]}></TextInput>
          </View> */}

          <View>
            <Text style={[label]}>Email</Text>
            <TextInput onChangeText={(prev)=>{setEmail(prev)}} value={email} autoCorrect={false} autoCapitalize="none" style={[inputStyle]}></TextInput>
          </View>
          
          <View>
            <Text style={[label]}>Password</Text>
            <TextInput onChangeText={(prev)=>{setPassword(prev)}} value={password} autoCorrect={false} autoCapitalize="none" secureTextEntry style={[inputStyle]}></TextInput>
          </View>
 
          <TouchableOpacity 
           onPress={handleSubmit}
          style={[btn]}>
            <Text style={[btn_text]}>Login</Text>
          </TouchableOpacity>

          <View>
            <TouchableOpacity onPress={()=>navigation.navigate("Register")} >
            <Text style={[text1]}>Don't have an account? Sign up</Text>
            </TouchableOpacity>
          </View>
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
    marginBottom:10,
    marginTop:10
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
  }
})

const {maincontainer, container1, container2, text1,text2,
  headerText,image,imageView,label,inputStyle,btn,btn_text,keyboardViewContainer}=styles
export default Login;