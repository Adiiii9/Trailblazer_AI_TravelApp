import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity,Image, Settings } from 'react-native'
import { SafeAreaView } from 'react-native'
import React, { useContext } from 'react'
import Register from '../screens/Register'
import Login from '../screens/Login'
import Home from '../screens/Home'


import {NavigationContainer, useNavigation} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import { authContext } from '../context/authContext'
import Location from '../screens/Location'
import Discover from '../screens/Discover'
import Profile from '../screens/Profile'
import Icon from "react-native-vector-icons/AntDesign"
import PlacesDetail from '../screens/PlacesDetail'
import PopularCities from './PopularCities'
import LikedMonuments from '../screens/LikedMonuments'
import TopPlacesSeeAll from './TopPlacesSeeAll'
import Threads from '../screens/Threads'
import ThreadPost from '../screens/ThreadPost'
import Discover2 from '../screens/Discover2'

const ScreenMenu=()=>{
    const Stack = createNativeStackNavigator()
    const [state]=useContext(authContext)
    const isauthenticated=state?.user && state?.token
    const navigation=useNavigation()
    

    return (

    
          // <Stack.Navigator initialRouteName='Home'>

            

          //       <Stack.Screen
          //       name="Home"
          //       component={Home}
          //       options={{ 
          //         headerTransparent: true,
          //         headerTitle:"",
          //         headerLeft:()=>(

          //           <View style={[mainContainer]}>
          //             <TouchableOpacity style={[imgContainer]} >
          //             <Image style={[img]} source={require("../../assets/profileIcon.png")} ></Image>
          //             </TouchableOpacity>

          //             <Text style={[text1]}>Hello Jake</Text>


          //           </View>

        
                    
                    

          //         )

          //        }}
          //       />

          //       <Stack.Screen
          //       name="Location"
          //       component={Location}
          //       options={{ headerShown: false }}
          //       />

          //       <Stack.Screen
          //       name="Discover"
          //       component={Discover}
          //       options={{ headerShown: false }}
          //       />

          //       <Stack.Screen
          //       name="Threads"
          //       component={Threads}
          //       options={{ headerShown: false }}
          //       />

          //       <Stack.Screen
          //       name="Profile"
          //       component={Profile}
          //       options={{ headerShown: false }}
          //       />

          //       <Stack.Screen
          //       name="TopPlacesSeeAll"
          //       component={TopPlacesSeeAll}
          //       options={{ headerShown: false }}
          //       />

          //       <Stack.Screen
          //       name="ThreadPost"
          //       component={ThreadPost}
          //       options={{ headerShown: false }}
          //       />


               




          
    
          
          // </Stack.Navigator>

          // Newww

          <Stack.Navigator initialRouteName='Login'>
            {
              isauthenticated?
              (<>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ 
                  headerTransparent: true,
                  headerTitle:"",
                  headerLeft:()=>(

                    <ScrollView>
                    <View style={[mainContainer]}>
                      

                      <View style={[container1]}>
                      <TouchableOpacity onPress={()=>navigation.navigate("Discover")}>
                        <Image style={[img]} source={require("../../assets/profileimg.jpg")}></Image>
                      </TouchableOpacity>

                      </View>

                      <View style={[container2]}>
                        {/* <Text style={[text1]}>Hello, Jake</Text> */}
                        <Text></Text>
                      </View>

                      <View style={[likeConatiner]}>
                        <TouchableOpacity onPress={()=>navigation.navigate("LikedMonuments")}>
                          {/* <Image style={[like]} source={require("../../assets/like.png")} ></Image> */}
                          <Text >
                            <Icon name="heart" color="red" size={28}></Icon>
                          </Text>
                        </TouchableOpacity>
                      </View>
                      
                    </View>
                      </ScrollView>

                  ),

                  

                 }}
                />

                <Stack.Screen
                name="Location"
                component={Location}
                options={{ headerShown: false }}
                />

                <Stack.Screen
                name="Discover"
                component={Discover}
                options={{ headerShown: false }}
                />

          <Stack.Screen
                name="Threads"
                component={Threads}
                options={{ headerShown: false }}
                />



                <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
                />

                <Stack.Screen
                name="PlacesDetail"
                component={PlacesDetail}
                options={{ headerShown: false }}
                // initialParams={{ navigation }} 
                />

                <Stack.Screen
                name="LikedMonuments"
                component={LikedMonuments}
                options={{ headerShown: false }}
                
                />

          <Stack.Screen
                name="TopPlacesSeeAll"
                component={TopPlacesSeeAll}
                options={{ headerShown: false }}
                />

                <Stack.Screen
                name="ThreadPost"
                component={ThreadPost}
                options={{ headerShown: false }}
                />

                <Stack.Screen
                name="Discover2"
                component={Discover2}
                options={{ headerShown: false }}
                />

              
              </>):(<>
                <Stack.Screen 
                name="Register"
                component={Register}
                options={{ headerShown: false }}
                />
          
                <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
                />
                </>)
            }




            
                {/* <Stack.Screen
                name="PopularCities"
                component={PopularCities}
                options={{ headerShown: false }}
                // initialParams={{ navigation }} 
                /> */}

          </Stack.Navigator>


          
      )
}



const styles = StyleSheet.create({
  mainContainer:{
    display:"flex",
    flexDirection:"row",
    width: "100%",
    justifyContent:"space-between",
    alignItems:"center",
    // backgroundColor:"blue"


  },
  container1:{
    // backgroundColor:"plum",
    marginVertical:20,
    // marginHorizontal:10,
    marginLeft:4,
    height:80,
    width: 80,
    borderRadius:40
    
    
    
  }, 
  container2:{
    // backgroundColor:"plum",
    marginVertical:20,
    // marginHorizontal:12,
    justifyContent:"center",
    height:80,
    // width: 20,
    marginRight:"20%"
   
  },
  text1:{
    color:"black",
    fontSize: 30,
    textAlign:"center",
    fontWeight: '600',
  },
  text2:{},
  img:{
    width: "100%",
    height: "100%",
    resizeMode:"contain",
    borderRadius:40,
  },

  imgContainer:{
   
    
    
    

  },
  like:{
    width: "100%",
    height: "100%",
    resizeMode:"contain"
  },

  likeConatiner:{
    // backgroundColor:"plum",
    marginVertical:20,
    // marginHorizontal:70,
    justifyContent:"center",
    marginRight:"10%",
    // alignItems:"flex-end",
    width:36,
    height:80

  }

})

const {mainContainer, container1, container2, text1,text2, img,imgContainer,like,likeConatiner}=styles
export default ScreenMenu





