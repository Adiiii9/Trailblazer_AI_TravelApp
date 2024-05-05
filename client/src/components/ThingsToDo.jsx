import { Pressable, StyleSheet, Text, View } from 'react-native'



const ThingsToDo = ({place}) => {
  return (
    <View style={[mainContainer]}>
        <Text style={[text1]}>Things to do</Text>
        <View style={[container1]}>
        {
            place.thingsToDo.slice(0,6).map((site)=>(
                <Pressable >
                    <View style={[container2]}>
                        <Text style={[text2]}>{site}</Text>
                    </View>
                </Pressable>


            ))
        }
        </View>
        <View>
            <Text></Text>
        </View>
      
    </View>
  )
}



const styles = StyleSheet.create({
    mainContainer:{
        // backgroundColor:"blue",
        width: 340,
    },
    container1:{
        flexDirection:"row",
        flexWrap:"wrap",
        gap:12,
        marginVertical:9
    }, 
    container2:{
        // backgroundColor:"plum",
        borderRadius:12,
        borderWidth:1
        
        
    },
    text1:{
        fontSize:22,
        color:"black",
        marginVertical:6,

        fontWeight: '700',
    },
    text2:{
        fontSize: 15,
        color:"black",
        marginRight:20,
        marginVertical:10,
        paddingLeft:9,
        fontWeight: 'bold',
    }
  })
  
  const {mainContainer, container1, container2, text1,text2}=styles
export default ThingsToDo