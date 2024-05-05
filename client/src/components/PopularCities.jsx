import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import cities from "../data/cities"
import heritage from "../data/heritage"
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

setfav=false
    
const PopularCities = () => {
  const navigation=useNavigation()

  const [favouriteMonument, setFavouriteMonument]=useState([]);

  const handleFavourites=()=>{

    (!setfav)?( <Icon3 name='hearto' size={27} color="red" ></Icon3>):(<Icon3 name='hearto' size={27} color="black" ></Icon3>)
    
  }


  return (
    <View>
      <View style={[container1]}>
        <Text style={[text1]}>Explore</Text>
        <TouchableOpacity>
        <Text style={[text3]}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
            cities.map(({_id,city})=>(
                <View key={_id} style={[container3]}>
                    <Text style={[text2]}>{city}</Text>
                </View>
            ))

        }
      </ScrollView>

      <View style={[container1]}>
        <Text style={[text1]}>Top places to visit</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("TopPlacesSeeAll",{
          heritage
        })}>
        <Text style={[text3]}>See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        {
           heritage.slice(0, 6).map((site) => (
            <Pressable onPress={()=>navigation.navigate("PlacesDetail",{
              places:site
            })}>
              <View key={site.name} style={[siteContainer]}>
              <View style={[siteContainer2]}>
              <Image source={{ uri: site.imageURL }} style={image} />
              </View>

              <View style={[siteContainer3]}>
                <View style={[siteContainer4]}>
                  <Text style={[name1,common]}>{site.name}</Text>
                  <Text style={[rating1,common]}>
                     <Icon name='star' size={18} color="turquoise"></Icon>  {site.rating}</Text>
                </View>

              <Text style={[city1]}>
              <Icon2 name="map-marker-alt" size={14} color="grey" /> {site.city}</Text>

              <View style={[siteContainer5]}>
              <Text style={[cost1]}>
              <Icon name='rupee' size={12} color="black"></Icon> {site.cost}
              </Text>

              <TouchableOpacity onPress={handleFavourites}>
              <Text style={[hearticon]}>
                <Icon3 name='hearto' size={27} color="black" ></Icon3>
                </Text>
              </TouchableOpacity>


              </View>

              </View>
              
            </View>

            </Pressable>

            
          ))
        }
      </ScrollView>


    </View>
  )
}


const styles = StyleSheet.create({
    container1:{
        justifyContent:"space-between",
        flexDirection: 'row',
        // backgroundColor:"blue",

        marginVertical:13
    },
    text1:{
        fontSize: 22,
        color:"black",
        fontWeight: '500',
        marginRight:12
    },

    text2:{
        fontSize: 16,
        color:"black",
        textAlign:"center"

    },
    text3:{
      fontSize: 18,
      color:"grey",
      fontWeight: '500',
      marginRight:12,
      marginTop:3

    },

    container3:{
        width:120,
        height: 42,
        marginRight:6,
        backgroundColor:"plum",
        borderRadius: 12,
        marginVertical:6,
        justifyContent:"center"
    },

    siteContainer: {
      // marginBottom: 20,
      marginVertical: 9,
      backgroundColor:"#F9FBE7",
      // backgroundColor:"turquoise",
      marginRight:16,
      width: 266,
      height: 312,
      display:"flex",
      flexDirection:"column",
      borderRadius:18,
      
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.24,
      shadowRadius: 2.84,
      elevation: 3,

    },
    image: {
      width: 236,
      height: 176,
      // marginBottom: 10,
      marginHorizontal:15,
      marginVertical:10,
      borderRadius: 15,
      

    },
    name1: {
      fontSize: 20,
      fontWeight: '800',
      marginLeft:16,
      marginVertical:6
      
    },

    city1: {
      color:"grey",
      fontSize: 15,
      marginLeft:16.6,
      fontWeight: '500',
      marginBottom:6,
      marginTop:6,
      
      
      
    },
    cost1: {
      fontSize: 14.5,
      marginBottom: 5,
      marginLeft:18,
      marginVertical:6,
      color:"navy",
      fontWeight: '600',
      
    },
    rating1: {
      fontSize: 18,
      marginRight:16,
      marginVertical:6
      
    },
    siteContainer2:{
      width: "100%",
      height: 186,
      // backgroundColor:"blue",
      borderRadius:18,
    },

    common:{
      color:"black"
    },
    siteContainer3:{
      marginVertical:10
    },

    siteContainer4:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
    },

    siteContainer5:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",

    },

    hearticon:{
      marginRight:22,
  
      marginBottom: 5,
      
      marginTop:1,
    }

    

})

const {text1,text2, container1,container2, container3, siteContainer, siteContainer2, 
  name1, cost1, rating1,city1,image, common, siteContainer3, siteContainer4, siteContainer5, hearticon, text3}=styles
export default PopularCities