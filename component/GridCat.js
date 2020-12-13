import React, { version } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

const GridCat = (props) => {
  let Touchablecom=TouchableOpacity;
  if(Platform.OS=="android" && Platform.Version>=21){
    Touchablecom=TouchableNativeFeedback;
  }
    return(
      <View style={styles.itemstyle}>
        <Touchablecom        
        onPress={props.onClick}        
        >
        <View style={{...styles.gridCard,...{backgroundColor:props.color}}}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </Touchablecom>
      </View>
    )
}
const styles = StyleSheet.create({    
    itemstyle: {
      flex: 1,
      margin: 10,
      height: 150,
    },
    gridCard:{
        flex:1,
        padding:20,
        alignItems:'flex-end',
        borderRadius:20,
        elevation:5,
    },
    title:{
        fontFamily: 'GecadeItalic-YzPV2',
        fontSize:30,
        textAlign:'right'
    }
  
  });
  
export default GridCat;