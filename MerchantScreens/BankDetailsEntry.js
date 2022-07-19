import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputComponent from "../components/InputComponent";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const BankDetailsEntry = () => {
  const navigation = useNavigation();
  const congratulations = () => {
    navigation.navigate("MerchantCongratsScreen");
  };
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View
        style={{
          paddingTop: "5%",
          paddingBottom: "10%",
          paddingHorizontal: "3%",
        }}
      >
        <Text style={{ color: "rgba(16, 203, 168, 1)" }}>
          Registration Successful!
        </Text>
      </View>
      <View
        style={{
          paddingTop: "2%",
          paddingBottom: "2%",
          paddingHorizontal: "3%",
        }}
      >
        <Text>Provide your bank account details </Text>
      </View>
      <View
        style={{
          paddingTop: "2%",
          paddingBottom: "2%",
          paddingHorizontal: "3%",
        }}
      >
        <Text>
          Money from any successful sale will be paid into your bank account
        </Text>
      </View>
      <View>
        <Text
          style={{
            paddingTop: "2%",
            paddingBottom: "2%",
            paddingHorizontal: "3%",
          }}
        >
          Account Name
        </Text>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <InputComponent />
        </View>
      </View>
      <View>
        <Text
          style={{
            paddingTop: "2%",
            paddingBottom: "2%",
            paddingHorizontal: "3%",
          }}
        >
          Account Number
        </Text>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <InputComponent />
        </View>
      </View>
      <View>
        <Text
          style={{
            paddingTop: "2%",
            paddingBottom: "2%",
            paddingHorizontal: "3%",
          }}
        >
          Bank Name
        </Text>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <InputComponent />
        </View>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Button
          title="Save"
          textColor="white"
          bgColor="#1F4287"
          onPress={congratulations}
        />
        <TouchableOpacity style={{ paddingVertical: "3%" }}>
          <Text
            style={{
              lineHeight: 19,
              fontSize: 14,
              fontWeight: "600",
              color: "rgba(31, 66, 135, 1)",
            }}
          >
            Not Now
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BankDetailsEntry;

const styles = StyleSheet.create({});
