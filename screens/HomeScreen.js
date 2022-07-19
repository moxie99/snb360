import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import ProfileScreen from "./ProfileScreen";
import ProfileStartScreen from "./ProfileStartScreen";

const HomeScreen = () => {
  // const { logout } = useContext(AuthContext);

  return <SafeAreaView></SafeAreaView>;
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeBtn: {
    width: "100%",
    backgroundColor: "#BDE0FE",
    padding: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20%",
  },
});
