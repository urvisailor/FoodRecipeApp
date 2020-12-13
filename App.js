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
import MealNavigate from './navigation/MealNavigate';
import {enableScreens} from 'react-native-screens';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import ReducerMeal from './store/reducers/ReducerMeal'
enableScreens();
const rootreducer=combineReducers({
  meals:ReducerMeal
})
const store=createStore(rootreducer);
const App=()=>{
  return(
    //<View style={styles.screen}>
    <Provider store={store}>
        <MealNavigate/>
        </Provider>
    //</View>
  );
};
const styles = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
});

export default App;
