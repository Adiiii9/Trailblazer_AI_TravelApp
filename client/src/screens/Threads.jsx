import { useContext, useState } from 'react';
import { Alert } from 'react-native';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon5 from 'react-native-vector-icons/FontAwesome6';
import FooterMenu from '../components/FooterMenu'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { postContext } from '../context/postContext';

const Threads = () => {
  const navigation=useNavigation()

  const [posts,setPosts]=useContext(postContext)

  const [title,setTitle]=useState("")
  const [content,setContent]=useState("")

  // const localStorageData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem("@auth");
  //     console.log("LocalStorage ===> ", value);
  //     return value
  //     // You can now use the retrieved value here
  //   } catch (error) {
  //     console.error("Error retrieving data from AsyncStorage:", error);
  //   }
  // }

  const localStorageData = async () => {
    try {
        const value = await AsyncStorage.getItem("@auth");
        // console.log("LocalStorage ===> ", value);
        return value; // Return the value directly
    } catch (error) {
        console.error("Error retrieving data from AsyncStorage:", error);
        return null; // Return null or handle the error appropriately
    }
}

  

  const handlepost=async()=>{
    try {
      if (!title || !content){
        Alert.alert("Please fill all the fields")
      }

      const val= await localStorageData()
      a=JSON.parse(val)
      // val11="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjFhMzJmZTA3M2JhNDU1NzBlZTI2NGEiLCJpYXQiOjE3MTQ1NzAxMTAsImV4cCI6MTcxNTM0NzcxMH0.96VI60NDm3DCEEsDlVJFUTPkvS6WFY_mfiAhuQIKhvc"

      const {data}=axios.post("http://192.168.216.70:8080/api/v1/post/create-post", {title,content},{
        headers: {
          // Authorization: `Bearer ${val}` // Include auth token in headers
          Authorization: val ? `Bearer ${a}` : null,
      }
      } )
      // { timeout: 5000 }) // Timeout in milliseconds
      .then(response => {
      // console.log(response)
      // const {data}=response
      console.log("Submitted",{title,content})
      setPosts([...posts,data?.post])
      Alert.alert("Posted Successfully")
      // Alert.alert(response.data.message)
      navigation.navigate("ThreadPost")
      
      
      
      })
      .catch(error => {
        // Handle error
        console.error('Error:', error);
      });

      

      
    //   const {data}=await axios.post("http://192.168.216.70:8080/api/v1/post/create-post", {title,content});
    //   Alert.alert("submitted",title,content)
      
    } catch (error) {
      console.log("Error thrown :: handlepost() in Threads.jsx :: ",error)
    }

  }

    return (
        <SafeAreaView>
         <View style={[mainContainer]}>
          <ScrollView>
          <View style={[container1]}>
            <Text style={[text1]}><Icon5 name="threads" size={24} color="black"/>  Start a Thread</Text>

            <View style={[container2]}>
              <TextInput 
              style={[input1]}
              placeholder='Add a title'
              placeholderTextColor="grey"
              value={title}
              onChangeText={(prev)=>setTitle(prev)}
              />
              <TextInput 
              style={[input2]}
              placeholder='Add a description'
              placeholderTextColor="grey"
              multiline={true}
              numberOfLines={5}
              value={content}
              onChangeText={(prev)=>setContent(prev)}
              />

              <Pressable onPress={handlepost} style={[btn]}>
                <Text style={[text2]}>Create a thread</Text>
              </Pressable>

              <Pressable onPress={()=>navigation.navigate("ThreadPost")}>
                <Text style={{color:"grey", fontSize:15,fontWeight: 600, padding:4,marginVertical: 15,}}>See All The Posts...</Text>
              </Pressable>
            </View>
            
            
          </View>
    
          <View>
          
          </View>


          </ScrollView>
    
          <FooterMenu></FooterMenu>
         
         
          
        </View>
        </SafeAreaView>
       
      )
    }
    
    
    const styles = StyleSheet.create({
      mainContainer:{
        display:"flex",
        justifyContent:"space-between",
        height: "100%",
        backgroundColor:"white"
      },
      container1:{
        paddingLeft:27,
        marginTop:36
      }, 
      container2:{},
      text1:{
        color:"black",
        fontSize: 27,
        fontWeight: 800,
      },
      text2:{
        color:"white",
        fontSize: 22,
        fontWeight: 600,
      },
      input1:{
        backgroundColor:"#FFFFFF",
        marginTop:24,
        // marginBottom:10,
        marginRight:10,
        borderTopLeftRadius:12,
        borderTopRightRadius:12,
        padding:10,
        borderWidth:0.6,
        borderBottomWidth:0,
        borderColor:"gray",
        color:"black",
        
      },
      input2:{
        backgroundColor:"#FFFFFF",
        // marginTop:24,
        marginBottom:20,
        marginRight:10,
        // borderRadius:12,
        borderBottomLeftRadius:12,
        borderBottomRightRadius:12,
        padding:10,
        textAlignVertical:"top",
        borderWidth:0.6,
        borderTopWidth:0.4,
        borderColor:"gray",
        color:"black",

      },
      btn:{
        backgroundColor:"black",
        borderRadius:10,
        marginRight:10,
        justifyContent:"center",
        alignItems:"center",
        height: 45,


      }
    })
    
    const {mainContainer, container1, container2, text1,text2,input1,input2,btn}=styles
export default Threads