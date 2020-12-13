import React, { version } from 'react';
import {useSelector} from 'react-redux';
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
import MealItemLayout from './MealItemLayout';
const MealList = (props) => {
    const isFavMeals=useSelector(state=>state.meals.FavoriteMeals);
    const MealItemRender=(itemRender)=>{
        const isFavMeal=isFavMeals.some(meal=>meal.id===itemRender.item.id);
        return <MealItemLayout  
         title={itemRender.item.title}  
         complexity={itemRender.item.complexity} 
         duration={itemRender.item.duration}
          affordable={itemRender.item.affordable}
           imageUrl={itemRender.item.imageUrl}
            vegan={itemRender.item.isVegan}
               onMealSelect={()=>{
                    props.navigation.navigate({routeName:'MenuDetail',params:{
            mealID:itemRender.item.id,
            mealTitle:itemRender.item.title,
            isFav:isFavMeal
          }})
        }}/>
      };
    
    return (
        <View style={styles.mainsc}>
            <FlatList data={props.mealdata}  keyExtractor={(item, index) => item.id} renderItem={MealItemRender} style={{ width: '100%', padding: 10 }}></FlatList>
        </View>

    );
}
const styles = StyleSheet.create({
    mainsc: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default MealList;