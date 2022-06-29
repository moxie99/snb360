import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({ navigation }) => {
  //==========call this function when user logs out================================
  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem("@viewedOnboarding");
    } catch (error) {
      console.error(error);
    }
  };

  // ============ user logs out =================
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("LoginScreen")}
        style={styles.homeBtn}
      >
        <Text style={styles.homebtn__text}>BEGIN QUIZ</Text>
      </TouchableOpacity>
    </View>
  );
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
