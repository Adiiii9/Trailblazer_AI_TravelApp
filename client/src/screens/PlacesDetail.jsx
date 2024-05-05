import { Image } from '@rneui/base'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import FooterMenu from '../components/FooterMenu'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import heritage from '../data/heritage';
import ThingsToDo from '../components/ThingsToDo';
import BookTicketButton from '../components/BookTicketButton';

const PlacesDetail = ({route}) => {
    const {places}=route.params
    const navigation=useNavigation()
  return (
    <View style={[mainContainer]}>
        <ScrollView>
            <View style={[container1]}>
                
                <Image style={[image1]} source={{uri:places.imageURL}}>
                    <Pressable onPress={()=>navigation.navigate("Home")} style={[btn1]}>
                    <Text >
                        <Icon  name='arrow-left' size={22} color="black"></Icon>
                    </Text>
                    </Pressable>
                </Image>
                {/* <Text style={[text1]}>{places.name}</Text> */}
            </View>
            <View>
                <View style={[container2]}>
                    <Text style={[text3]}>{places.name}</Text>
                    <Text style={[rating1]}>
                     <Icon name='star' size={24} color="turquoise"></Icon>  {places.rating}</Text>
                </View>
                <View style={[container3]}>
                    <Text style={[text2]}><Icon2 name="map-marker-alt" size={15} color="grey" /> {places.city}</Text>
                </View>

                <View style={[container4]}>
                    <Text style={[text4]}>{places.description}</Text>
                </View>

                <BookTicketButton></BookTicketButton>

                <View style={[container5]}>
                    <Text style={[text5]}>Restaurant's to try</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {
                            
                               <View style={[cafeContainer]}>
                                <Pressable>
                                <View  style={[commonImageContainer]}>
                                    <Image style={[img]} source={{uri:places.cafeURL1}}>
                                        <Text style={[hotelname]}>{places.famousRestaurantsNearby[0]}</Text>
                                    </Image>
                                </View>
                                </Pressable>

                                <Pressable>
                                <View  style={[commonImageContainer]}>
                                    <Image style={[img]} source={{uri:places.cafeURL2}}>
                                        <Text style={[hotelname]}>{places.famousRestaurantsNearby[1]}</Text>
                                    </Image>
                                </View>
                                </Pressable>

                                <Pressable>
                                <View  style={[commonImageContainer]}>
                                    <Image style={[img]} source={{uri:places.cafeURL3}}>
                                        <Text style={[hotelname]}>{places.famousRestaurantsNearby[2]}</Text>
                                    </Image>
                                </View>
                                </Pressable>

                                <Pressable>
                                <View  style={[commonImageContainer]}>
                                    <Image style={[img]} source={{uri:places.cafeURL4}}>
                                        <Text style={[hotelname]}>{places.famousRestaurantsNearby[3]}</Text>
                                    </Image>
                                </View>
                                </Pressable>

                                </View>

                        }
                    </ScrollView>

                    <ThingsToDo place={places}></ThingsToDo>


                </View>
            </View>
        </ScrollView>
        <FooterMenu></FooterMenu>
    </View>
  )
}


const styles = StyleSheet.create({
    mainContainer:{
        display: 'flex',
        justifyContent:"space-between",
        height: "100%",
        backgroundColor:"white",
    },
    container1:{
        width: "100%",
        height:288,
        backgroundColor:"blue",

    }, 
    container2:{
        paddingLeft:22,
        marginTop:9,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    container3:{
        paddingLeft:26,
        marginTop:9


    },
    text1:{
        color:"black"
    },
    text2:{
        fontSize: 18,
        fontWeight: '500',
        color:"grey"
        
    },
    image1:{
        width: "100%",
        height: "100%",
    },

    btn1:{
        width: 40,
        height: 40,
        backgroundColor:"white",
        marginHorizontal:20,
        marginVertical:18,
        borderRadius:10,
        padding:8,
        shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.24,
      shadowRadius: 2.84,
      elevation: 5,
    },

    text3:{
        color:"black",
        fontSize: 33,
        fontWeight:"bold",
        
    },
    rating1:{
        marginTop:13,
        marginRight:18,
        color:"black",
        fontSize: 21,
        fontWeight: '500',
    },
    text4:{
        color:"#040D12",
        fontSize: 14.5,
        fontWeight: '400',
        textAlign:"justify"
        

    },

    container4:{
        marginVertical:16,
        paddingLeft:26,
        paddingRight:20,
    
    },

    container5:{
        marginVertical:16,
        paddingLeft:26,
        
    },

    text5:{
        fontSize:22,
        color:"black",
        marginVertical:6,
        fontWeight: '700',

    },

    commonImageContainer:{
        width: 200,
        height: 200,
        // backgroundColor:"blue",
        marginRight:15,
        


        
    },

    cafeContainer:{
        marginVertical:16,
        marginLeft:0,
        flexDirection:"row"
        

    },

    img:{
        width: 300,
        height: 200,
        // alignItems:"center",
        justifyContent:"flex-end",
        borderRadius:24
        

        
        // resizeMode:"cover"
    },

    hotelname:{
        fontSize: 28,
        fontWeight: '800',
        color:"#FEFBF6",
        marginBottom:12,
        marginLeft:10,
        flexWrap:"wrap",
        overflow:"hidden"
        
        // paddingHorizontal:6,


    }



  })
  
  const {mainContainer, container1, container2,container3,container4,container5,text5,commonImageContainer,img,
    text1,text2,text4,image1,btn1,btn2,btn3,text3,rating1,cafeContainer, hotelname}=styles
export default PlacesDetail;