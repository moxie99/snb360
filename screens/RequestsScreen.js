import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileHeader from "../components/ProfileHeader";
import Ionic from "react-native-vector-icons/Ionicons";

const RequestsScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#E5E5E5", height: "100%" }}>
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
        <Text>Request List is Empty</Text>
      </View>
      <View
        style={{
          width: "70%",
          marginLeft: "15%",
        }}
      >
        <Text style={{ textAlign: "center" }}>
          Make a request of the item you seek for and merchants that has it will
          contact you
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          height: 70,
          backgroundColor: "white",
          position: "absolute",
          bottom: 0,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
        }}
      >
        <Ionic name="add" color="blue" size={24} />
        <Text style={{ padding: 10, color: "blue" }}>New Requests</Text>
      </View>
    </SafeAreaView>
  );
};

export default RequestsScreen;

const styles = StyleSheet.create({});
