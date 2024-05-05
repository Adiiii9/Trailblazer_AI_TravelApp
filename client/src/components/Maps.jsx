import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Maps = () => {
  return (
    <View style={styles.container}>
      <MapView
      provider='google'

        style={styles.map}
        // initialRegion={{
        //   latitude: 37.78825,
        //   longitude: -122.4324,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421,
        // }}
      >
        {/* <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="Marker Title"
          description="Marker Description"
        /> */}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
   
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  map: {
    // ...StyleSheet.absoluteFillObject,
    // flex:1
    width: 200,
    height: 200,
  },
});

export default Maps;


// import React from 'react';
// import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
// import MapView from 'react-native-maps';

// const Maps = () => {
//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <MapView
//           provider='google' // make sure to import PROVIDER_GOOGLE
//           style={styles.map}
//           initialRegion={{
//             latitude: 37.78825,
//             longitude: -122.4324,
//             latitudeDelta: 0.5,
//             longitudeDelta: 0.5,
//           }}
//         />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   map: {
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//   },
// });

// export default Maps;
