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
    ImageBackground,
} from 'react-native';
import Colors from '../constant/Colors';
const MealItemLayout = (props) => {
    return (
        <View style={styles.MainScreen}>
        <TouchableOpacity onPress={props.onMealSelect}>
                <View style={{...styles.MyRow,...styles.MealHeader}}>
                    <ImageBackground source={{uri:props.imageUrl}} style={styles.ImageBg}>
                    <Text style={styles.Mytitle}>{props.title}</Text>
                    </ImageBackground>
                </View>
                <View style={{...styles.MyRow,...styles.MealDetails}}>
                   <Text style={styles.details}>{props.complexity.toUpperCase()}</Text>
                   <Text style={styles.details}>{props.affordable.toUpperCase()}</Text>
                   <Text style={styles.details}>{props.duration}m</Text>
                </View>                                    
           
        </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    MainScreen:{
       // flex:1
       height:200,
       width:'100%',
       backgroundColor:Colors.ContrasColor,
       marginBottom:20,
       borderRadius:5,
       overflow:'hidden',
    }, 
    Mytitle:{
        fontFamily:'GecadeBold-BWXdw',
        fontSize:20,
        paddingVertical:5,
        paddingHorizontal:20,
        color:'white',
        backgroundColor:'rgba(0,0,0,0.7)',
        },   
    MyRow:{
            flexDirection:'row',            
        },
        MealHeader:{
            height:'85%',
        },
        MealDetails:{
            height:'15%',
            justifyContent:'space-between',
            alignItems:'flex-end',
        },
        ImageBg:{
            width:'100%',
            height:'100%',
            justifyContent:'flex-end',
            textAlign:'center',
        },
        details:{
            color:Colors.FontColor,
            fontSize:20,
            padding:5,
            fontFamily:'GecadeBoldItalic-8Mgrn',
        }
});
  
export default MealItemLayout;