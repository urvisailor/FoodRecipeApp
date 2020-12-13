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
import {HeaderButton} from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constant/Colors';
const HeaderButtonsCom = (props) => {
  return (
    <HeaderButton {...props} MyIcon={Ionicons} iconSize={23} color={Colors.HeaderButtonColor}></HeaderButton>
  )
}
export default HeaderButtonsCom;