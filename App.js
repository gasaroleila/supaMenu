import React from "react";
import { AppRegistry } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import SignupScreen from "./screens/SignupScreen";
import Loginscreen from "./screens/LoginScreen";
import ScanScreen from "./screens/ScanScreen";
import ListRestaurantsScreen from "./screens/ListRestaurantsScreen";
import MenuOrderedScreen from "./screens/MenuOrderedScreen";

const navigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  Signup: {
    screen:SignupScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  Login:{ 
    screen: Loginscreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  Scan: {
    screen: ScanScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  ListRestaurants: {
    screen: ListRestaurantsScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  MenuOrdered: {
    screen: MenuOrderedScreen,
    navigationOptions: {
      headerShown: false
    }
  },
},
{
  initialRouteName: "Home"
}
);

const AppContainer = createAppContainer(navigator);

function App() {
  return <AppContainer/>
}

if (!__DEV__) {
  require('react-native').unstable_enableLogBox();
}

AppRegistry.registerComponent('Trial', () => App);

export default App