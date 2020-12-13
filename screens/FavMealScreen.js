/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import MealList from '../component/MealList';
import {useSelector} from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { HeaderButtonsCom } from '../component/HeaderButtonsCom';
import Ionicons from 'react-native-vector-icons/Ionicons';
const FavMealScreen=(props)=>{
  const FavMeal=useSelector(state=>state.meals.FavoriteMeals); 
 // const FavMeal=Meals.filter(meal=>meal.id=='m1' || meal.id=='m2');
 //console.log(FavMeal);
 if(FavMeal.length<=0 || !FavMeal)
 {
   console.log("in Fav!!");
   return(
     <View style={styles.mainsc}>
       <Text style={{fontSize:30}}>No Favorite Meal Added!!</Text>
     </View>
   )
 }
 else{
  return <MealList mealdata={FavMeal} navigation={props.navigation} />;
 }
};
FavMealScreen.navigationOptions=(nav)=>{
  return{
    headerTitle:'My Favorites',
    headerLeft:()=>{
      return(
        <HeaderButtons HeaderButtonComponent={HeaderButtonsCom}>
           <Ionicons name='ios-menu' size={23} title="menu" onPress={() =>nav.navigation.toggleDrawer()} color='white' style={{paddingLeft:20}}></Ionicons>
        </HeaderButtons>
      );
    }
  }
}
const styles = StyleSheet.create({
   mainsc:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
   }
});

export default FavMealScreen;
