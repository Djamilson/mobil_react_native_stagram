import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Image } from "react-native";
import logo from "./assets/logo.png";

import New from "./pages/new";
import Feed from "./pages/feed";

const Routes = createAppContainer(
  createStackNavigator(
    {      
      Feed,
      New
    },
    {
      defaultNavigationOptions: {
        headerTintColor: "#000",
        headerTitle: <Image style={{ marginHorizontal: 20 }} source={logo} />,
        headerBackTitle: null
      },
      mode: "modal"
    }
  )
);

export default Routes;
