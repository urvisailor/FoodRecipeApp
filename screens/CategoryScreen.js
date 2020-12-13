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
  Button,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Categories } from '../data/Categorydata';
import GridCat from '../component/GridCat';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButtonsCom from '../component/HeaderButtonsCom';
import Ionicons from 'react-native-vector-icons/Ionicons';
const CategoryScreen = (props) => {
  const categoryrender = (itemRender) => {
    console.log('data', itemRender.item);
    return <GridCat title={itemRender.item.name} color={itemRender.item.color} onClick={() => {
      props.navigation.navigate({
        routeName: 'CategoryMeal',
        params: {
          CID: itemRender.item.id
        }
      })
    }} />
  }

  return (
    <View>
      <FlatList numColumns={2} data={Categories} renderItem={categoryrender} ></FlatList>
    </View>
  );
};
CategoryScreen.navigationOptions = (nav) => {
  return {
    headerTitle: 'Meal Category',
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButtonsCom}>
          <Ionicons name='ios-menu' size={23} title="menu" onPress={() =>nav.navigation.toggleDrawer()} color='white' style={{paddingLeft:20}}></Ionicons>
          {/* <Item IconName='ios-menu' title="menu" onPress={() =>nav.navigation.toggleDrawer()}></Item> */}
        </HeaderButtons>
      );
    }
  }
};

const styles = StyleSheet.create({
  mainsc: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontstyle: {
    fontFamily: 'GecadeItalic-YzPV2',
  },
  itemstyle: {
    flex: 1,
    margin: 10,
    height: 150,
  }

});

export default CategoryScreen;
