/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useCallback, useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Switch
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { HeaderButtonsCom } from '../component/HeaderButtonsCom';
import Ionicons from 'react-native-vector-icons/Ionicons';
import  Colors  from '../constant/Colors';
import {useDispatch} from 'react-redux';
import {SetFilterAction} from '../store/actions/ActionMeal';
const FilterComponent=(props)=>{
  return(
    <View style={styles.filterstyle}>
        <Text style={{ fontSize: 20 }}>{props.textval}</Text>
        <Switch
          value={props.lbl}
          onValueChange={props.onToggle}
          thumbColor={Colors.ContrasColor}
          trackColor={{true:Colors.ContrasColor}}
        ></Switch>
      </View>
  );
}
const FilterScreen = (props) => {
  const [isglutenFree, setglutenFree] = useState(false);
  const [isVegan, setVegan] = useState(false);
  const dispatch=useDispatch();
   const {navigation}=props;
  const SaveFilters=useCallback(()=>{
    const MyFilters={
        gluten:isglutenFree,
        Vegan:isVegan
    }
    dispatch(SetFilterAction(MyFilters))
  },[isglutenFree,isVegan,dispatch]);

  useEffect(()=>{
    navigation.setParams({save:SaveFilters})
  },[SaveFilters])

  return (
    <View style={styles.mainsc}>
      <Text style={styles.title}>Available Filters</Text>
      <FilterComponent lbl={isglutenFree} textval='Gluten-Free' onToggle={val => setglutenFree(val)}/>
      <FilterComponent lbl={isVegan} textval='isVegan' onToggle={val => setVegan(val)}/>      
    </View>
  );
};
FilterScreen.navigationOptions = (nav) => {
  return {
    headerTitle: 'Filter Meals',
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButtonsCom}>
          <Ionicons name='ios-menu' size={23} title="menu" onPress={() => nav.navigation.toggleDrawer()} color='white' style={{ paddingLeft: 20 }}></Ionicons>
        </HeaderButtons>
      );
    },
    headerRight:()=>{
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButtonsCom}>
          <Ionicons name='ios-save' size={23} title="save" onPress={nav.navigation.getParam('save')} color='white' style={{ paddingLeft: 20 }}></Ionicons>
        </HeaderButtons>
      );
    }
  }
}
const styles = StyleSheet.create({
  //  mainsc:{
  //      flex:1,
  //      alignItems:'center',
  //  },
  title: {
    fontSize: 30,
    textAlign: 'center'
  },
  filterstyle: {
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'space-between',
    marginHorizontal: 20,
    width:'90%'
  }
});

export default FilterScreen;
