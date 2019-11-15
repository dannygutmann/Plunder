import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";
import {
  AuthLoadingScreen,
  LoginScreen,
  SignUpPage
} from "../screens/index.js";

import MainTabNavigator from "./MainTabNavigator";

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Profile: ProfileScreen
});
const AuthStack = createStackNavigator({
  Login: LoginScreen,
  SignUp: SignUpPage
});

export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);

/*
TODO:

- Finish AppNavigator File based off this documentation:
    https://reactnavigation.org/docs/en/auth-flow.html
    https://snack.expo.io/@react-navigation/auth-flow-v3

- Create Screens found in file, based off snack

- Write Screens based off this video. Good style:
    https://www.youtube.com/watch?v=L0ZsVjh2zBo

- Make Database Rules:
    https://firebase.google.com/docs/database/security/quickstart#sample-rules

- Set up Screens routes based off index.js
    https://github.com/FullstackAcademy/boilermaker/tree/master/client/components

    - Screens flow
    AuthLoading -> Login -> ?(SignUp -> Login) -> Home Screen

*/
