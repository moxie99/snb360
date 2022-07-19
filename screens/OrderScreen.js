import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileHeader from "../components/ProfileHeader";

const OrderScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View>
        <ProfileHeader title="My Orders" />
      </View>
      <View
        style={{
          paddingTop: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: 200,
            height: 200,
            borderRadius: "100%",
            backgroundColor: "#F7F8FA",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ height: 100, width: 120 }}
            source={require("../assets/clipboard.png")}
          />
        </View>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>No Orders Yet</Text>
      </View>
      <View style={{ width: "70%", marginLeft: "15%" }}>
        <Text style={{ textAlign: "center" }}>
          Items you have ordered for will display here
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
