import { StyleSheet, Text, View, Image, Modal, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const height = Dimensions.get("window").height * 0.73;
const ProfileStartScreen = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          paddingTop: 10,
          paddingLeft: 5,
          paddingRight: 5,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
          elevation: 10,
          height: 90,
        }}
      >
        <Image source={require("../assets/iconHead.png")} />
        <View
          style={{ flexDirection: "row", paddingLeft: 5, paddingRight: 20 }}
        >
          <MaterialIcons name="notifications-none" size={24} color="black" />
          <MaterialCommunityIcons
            name="cart-outline"
            size={24}
            color="black"
            style={{ paddingLeft: 20 }}
          />
        </View>
      </View>
      {/* <View style={{ position: "absolute", bottom: -height, left: "40%" }}>
        <MaterialCommunityIcons
          name="plus"
          size={30}
          color="green"
          style={{ paddingLeft: 20, zIndex: 100 }}
        />
      </View> */}
    </SafeAreaView>
  );
};

export default ProfileStartScreen;

const styles = StyleSheet.create({});
