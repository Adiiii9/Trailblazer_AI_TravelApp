import { Pressable, StyleSheet, Text, View } from 'react-native'

import Icon from "react-native-vector-icons/AntDesign"
import Icon5 from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons"
import Icon3 from "react-native-vector-icons/Ionicons"
import Icon4 from "react-native-vector-icons/MaterialIcons"

const ProfileComponent = () => {
  return (
    <View style={[mainContainer]}>

      <View style={[container1]}>
        <Text style={[text1]}>Account</Text>
      </View>

      <View style={[container2]}>
        <Pressable>
            <View style={[common2]}>
                {/* <Text style={[common]}><Icon name="heart" size={18} color="black"></Icon>   Favourites</Text> */}
                <Text><Icon style={[iconstyle]} name="heart" size={20} color="black"></Icon><Text style={[common]}>  Favourites</Text></Text>
                {/* <Text style={[common]}>Favourites</Text> */}
                <Text><Icon5 name="right" size={18} color="black"></Icon5></Text>
            </View>
        </Pressable>

        <Pressable>
            <View style={[common2]} >
                {/* <Text style={[common]}><Icon2 name="account-circle" size={22} color="black"></Icon2>  Profile</Text> */}
                <Text><Icon2 name="account-circle" size={22} color="black"></Icon2><Text style={[common]}>  Profile</Text></Text>
                
                <Text><Icon5 name="right" size={18} color="black"></Icon5></Text>
                
            </View>
        </Pressable>

        <Pressable>
            <View style={[common2]}>
                {/* <Text style={[common]}><Icon3 name="settings-sharp" size={19} color="black"></Icon3>  Preferences</Text> */}
                <Text ><Icon3 name="settings-sharp" size={21} color="black"></Icon3><Text style={[common]} >  Preferences</Text></Text>
                
                <Text><Icon5 name="right" size={18} color="black"></Icon5></Text>

            </View>
        </Pressable>
        
        <Pressable>
            <View style={[common2]}>
                {/* <Text style={[common]}><Icon4 name="contact-support" size={20} color="black"></Icon4> Support</Text> */}
                <Text><Icon4 name="contact-support" size={21} color="black"></Icon4><Text style={[common]}>  Support</Text></Text>
                
                <Text><Icon5 name="right" size={18} color="black"></Icon5></Text>

            </View>
        </Pressable>
      </View>

      <View style={[container3]}>
        <Pressable>
            <Text style={[text2]}>
                Sign Out
            </Text>
        </Pressable>
      </View>




    </View>
  )
}
const styles = StyleSheet.create({
    mainContainer:{
        paddingHorizontal:29,

    },
    container1:{
        marginTop:36
    }, 
    container2:{
        marginTop:50,
        // backgroundColor:"plum"
    },

    container3:{
        marginVertical:45,
        backgroundColor:"black",
        height: 52,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:12
    },
    text1:{
        fontSize: 28,
        color:"black",
        fontWeight:"bold"

    },
    text2:{
        color:"white",
        fontSize: 24,
        
        fontWeight:"bold"
    },

    common:{
        fontSize:20,
        fontWeight:"500",
        color:"black",
        // paddingVertical:9

    },

    common2:{
        padding:15,
        borderBottomWidth:0.9,
        borderColor:"grey",
        flexDirection:"row",
        justifyContent:"space-between"

    },

    common3:{
        alignSelf:"flex-end",

    },

    iconstyle:{
        
    }
  })
  
const {mainContainer, container1, container2, container3, text1,text2,common, common2,common3,iconstyle}=styles

export default ProfileComponent;