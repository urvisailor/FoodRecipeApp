/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';
//import { Meals } from '../data/Categorydata';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButtonsCom from '../component/HeaderButtonsCom';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import { ToggleFavAction } from '../store/actions/ActionMeal';
const MealDetailsScreen = (props) => {
  const mealID = props.navigation.getParam("mealID");
  const avaMeals = useSelector(state => state.meals.meals);
  const mealselected = avaMeals.find(meal => meal.id === mealID);
  const FavMealHeartToggle = useSelector(state => state.meals.FavoriteMeals.some(meal => meal.id === mealID));
  const dispatch = useDispatch();
  // console.log("Fav-->", FavMealHeartToggle);
  const toggleFavMethod = useCallback(() => {
    dispatch(ToggleFavAction(mealID));
  }, [dispatch, mealID]);

  useEffect(() => {
    props.navigation.setParams({ ToggleFavParam: toggleFavMethod });
  }, [toggleFavMethod]);

   useEffect(() => {
     props.navigation.setParams({ isFav: FavMealHeartToggle });
   }, [FavMealHeartToggle]);

  return (
    <ScrollView>
      <Image source={{ uri: mealselected.imageUrl }} style={styles.image}></Image>
      <View style={styles.details}>
        <Text styles={styles.fonts}>{mealselected.duration}m</Text>
        <Text styles={styles.fonts}>{mealselected.complexity.toUpperCase()}</Text>
        <Text styles={styles.fonts}>{mealselected.affordable.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {
        mealselected.ingredients.map(ingredient => <Text key={ingredient} style={styles.items}>{ingredient}</Text>)
      }
      <Text style={styles.title}>Steps</Text>
      {
        mealselected.steps.map(step => <Text key={step} style={styles.items}>{step}</Text>)
      }
    </ScrollView>
  );
};
const RightButton = (props) => {
  //console.log(props.FavP);
  // const iconn='';
  // if(props.ChangeIcon){
  //   iconn='heart';
  // }else{
  //   iconn='hearto';
  // }
  //const iconn=props.ChangeIconn;
  //console.log(iconn);
  return (
    <HeaderButtons HeaderButtonComponent={HeaderButtonsCom}>
      <Ionicons name='star' size={23} title="Fav" onPress={props.FavP}  style={{ paddingRight: 20 }}></Ionicons>
    </HeaderButtons>
  )
}
MealDetailsScreen.navigationOptions = (navigationdata) => {
  // const mealID = navigationdata.navigation.getParam("mealID");
  const Fav = navigationdata.navigation.getParam("ToggleFavParam");
  const isFav = navigationdata.navigation.getParam("isFav");
  //console.log("isFav", isFav);
  //console.log(Fav);
  //const mealselected = Meals.find(meal => meal.id === mealID);
  const Title = navigationdata.navigation.getParam("mealTitle");
  return {
    headerTitle: Title,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButtonsCom}>
          <Ionicons name={isFav?'heart':'heart-dislike'} color='white' size={23} title="Fav" onPress={Fav}  style={{ paddingRight: 20 }}></Ionicons>
        </HeaderButtons>
      );
    }
  }
};
const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  image: {
    width: '100%',
    height: 300
  },
  fonts: {
    fontSize: 25,
  },
  title: {
    // fontFamily:'GecadeBoldItalic-8Mgrn',
    fontSize: 23,
    textAlign: 'center'
  },
  items: {
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    borderWidth: 1,
    fontSize: 20
  }
});

export default MealDetailsScreen;
