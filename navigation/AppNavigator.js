//import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";
import {
  AuthLoadingScreen,
  HomeScreen,
  ProfileScreen,
  SignInScreen,
  SignUpScreen
} from "../screens/index.js";

import MainTabNavigator from "./MainTabNavigator";

const AppStack = createStackNavigator({
  Main: MainTabNavigator,
  Home: HomeScreen,
  Profile: ProfileScreen
});
const AuthStack = createStackNavigator({
  Login: SignInScreen,
  SignUp: SignUpScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Main: MainTabNavigator,
      Auth: AuthStack,
      AuthLoading: AuthLoadingScreen,
      App: AppStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
