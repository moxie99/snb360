import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Ionic from "react-native-vector-icons/Ionicons";
import SearchScreen from "../screens/SearchScreen";
import ModalScreen from "../screens/ModalScreen";
import InboxScreen from "../screens/InboxScreen";
import ProfileStartScreen from "../screens/ProfileStartScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
            size = focused ? size + 8 : size + 5;
          } else if (route.name === "Search") {
            iconName = focused ? "search-sharp" : "search-outline";
            size = focused ? size + 8 : size + 5;
          } else if (route.name === "Plus") {
            iconName = focused ? "add" : "add-outline";
            size = focused ? size + 12 : size + 20;
            color = "#10CBA8";
          } else if (route.name === "Messages") {
            iconName = focused ? "mail" : "mail-outline";
            size = focused ? size + 8 : size + 5;
          } else if (route.name === "Profile") {
            iconName = focused
              ? "person-circle-sharp"
              : "person-circle-outline";
            size = focused ? size + 8 : size + 5;
          }
          return <Ionic name={iconName} color={color} size={size} />;
        },
        headerShown: false,
      })}
      tabBarOptions={{
        activeTintColor: "#1F4287",
        inactiveTintColor: "#1f4287",
        showLabel: false,
        style: {
          backgroundColor: "transparent",
          height: 100,
          zIndex: 1,
        },
      }}
    >
      <Tab.Screen name="Home" component={ProfileStartScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen
        name="Plus"
        component={ModalScreen}
        mode="modal"
        headerMode="none"
      />
      <Tab.Screen name="Messages" component={InboxScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
