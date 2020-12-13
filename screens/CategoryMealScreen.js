/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Categories } from '../data/Categorydata';
import {Meals} from '../data/Categorydata';
import MealList from '../component/MealList';
import {useSelector} from 'react-redux';
import {StyleSheet,View,Text} from 'react-native';
const CategoryMealScreen = (props) => {
  const CatID = props.navigation.getParam("CID");
  const avaMeal=useSelector(state=>state.meals.filteredmeals);
  const FilteredMeal=avaMeal.filter(meal=>meal.categoryIDs.indexOf(CatID)>=0);  
  if(FilteredMeal.length==0)
  {
    return(
      <View style={styles.mainsc}>
        <Text style={{fontSize:20}}>No Meal Available or you have filtered it out!</Text>
      </View>
    )
  }
  return <MealList mealdata={FilteredMeal} navigation={props.navigation}/>;
};
CategoryMealScreen.navigationOptions = (Data) => {
  const cid = Data.navigation.getParam("CID");
  const SelCat = Categories.find(cat => cat.id === cid);
  return {
    headerTitle: SelCat.name,
  }
}

const styles=StyleSheet.create({
  mainsc:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
export default CategoryMealScreen;
