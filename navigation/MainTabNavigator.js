/* eslint-disable react/display-name */
import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import TabBarIcon from "../components/TabBarIcon";
import { HomeScreen, ProfileScreen } from "../screens/index";

const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? `ios-today` : "md-information-circle"}
          />
        )
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-options" : "md-options"}
          />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    tabBarOptions: {
      activeTintColor: "#eb6e3d"
    }
  }
);

export default bottomTabNavigator;
