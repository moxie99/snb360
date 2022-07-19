import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import InputComponent from "../components/InputComponent";
import Button from "../components/Button";
const ChangePassword = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View>
        <ProfileHeader title="Change Pasword" />
      </View>
      <View style={{ marginTop: "8%" }}>
        <Text style={{ marginLeft: "10%", paddingBottom: "3%" }}>
          Enter Password
        </Text>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <InputComponent />
        </View>
      </View>

      <View>
        <Text style={{ marginLeft: "10%", paddingBottom: "3%" }}>
          Enter New Password
        </Text>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <InputComponent />
        </View>
      </View>
      <View>
        <Text style={{ marginLeft: "10%", paddingBottom: "3%" }}>
          Re-type Password
        </Text>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <InputComponent />
        </View>
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "5%",
        }}
      >
        <Button
          title="Change Password"
          textColor="white"
          bgColor="#1F4287"
          onPress={() => {
            navigation.navigate("merchantLocation");
          }}
        />
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({});
