import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CategoryScreen from '../screens/CategoryScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MenuDetailsScreen from '../screens/MenuDetailsScreen';
import FavMealScreen from '../screens/FavMealScreen';
import Colors from '../constant/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import MealDetailsScreen from '../screens/MenuDetailsScreen';
import FilterScreen from '../screens/FilterScreen';
const defaultoptions = {
    headerStyle: {
        backgroundColor: Colors.ContrasColor
    },
    headerTitleStyle:{
        fontFamily:'Gecade-RpXnE'
    },
    headerTintColor: Colors.FontColor
}
const MealNavigate = createStackNavigator({
    Categories: {
        screen: CategoryScreen,
    },
    CategoryMeal: {
        screen: CategoryMealScreen,
    },
    MenuDetail: {
        screen: MenuDetailsScreen,
    }
}, {
    defaultNavigationOptions: defaultoptions
});
const FavNavigation = createStackNavigator({
    Favorites: FavMealScreen,
    Mealdetail: MealDetailsScreen
}, {
    defaultNavigationOptions: defaultoptions
});
const tabConfig = {
    Meal: {
        screen: MealNavigate,
        navigationOptions: {
            tabBarIcon: (info) => {
                return <Ionicons name='ios-restaurant' size={25} color={info.tintColor} />;
            },
            tabBarColor: Colors.ContrasColor,
            tabBarLabel:'Meals'
        },
    },
    Fav: {
        screen: FavNavigation,
        navigationOptions: {
            tabBarIcon: (info) => {
                return <Ionicons name='ios-star' size={25} color={info.tintColor} />;
            },
            tabBarColor: Colors.ContrasColor,
            tabBarLabel:'Favorites'
        },
    }
}
const tabNav = Platform.OS == 'android' ? createMaterialBottomTabNavigator(tabConfig, {
    activeTintColor: Colors.ContrasColor,
    shifting: true
}
) :
    createBottomTabNavigator(tabConfig, {
        tabBarOptions: {
            activeTintColor: Colors.ContrasColor
        }
    });

const filternavigator = createStackNavigator({
    FilterMeals: FilterScreen
}, {
    defaultNavigationOptions: defaultoptions
})

const MainNavigator = createDrawerNavigator({
    Meals: tabNav,
    FilterMeals: filternavigator
},{
    contentOptions:{
        activeTintColor:Colors.ContrasColor,
        lableStyle:{
           fontFamily:'Gecade-RpXnE' ,
           fontSize:23,
        }
    }
})
export default createAppContainer(MainNavigator);
