import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputComponent from "../components/InputComponent";
import Button from "../components/Button";

const height = Dimensions.get("window").height * 0.8;
const VerifyNumberScreen = ({ navigation }) => {
  const navigateToBankDetails = () => {
    navigation.navigate("BankDetails");
  };
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View
        style={{ paddingTop: "5%", paddingBottom: "10%", paddingLeft: "3%" }}
      >
        <Text>Register as a Merchant</Text>
      </View>
      <View
        style={{ paddingTop: "5%", paddingBottom: "3%", paddingLeft: "3%" }}
      >
        <Text>Verify Phone</Text>
      </View>
      <View>
        <Text
          style={{
            color: "rgba(22, 153, 129, 1)",
            paddingVertical: "3%",
            paddingLeft: "3%",
          }}
        >
          We have sent a 4-digit OTP to your phone
        </Text>
      </View>
      <View style={{ paddingLeft: "3%", paddingBottom: "1%" }}>
        <Text>Enter Code</Text>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <InputComponent />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: "3%",
          paddingRight: "2%",
        }}
      >
        <TouchableOpacity>
          <Text>Resend Code</Text>
        </TouchableOpacity>
        <Text>1:00</Text>
      </View>
      <View
        style={{
          position: "absolute",
          top: height,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ paddingBottom: "2%" }}>
          <Button
            title="Verify"
            textColor="white"
            bgColor="#1F4287"
            onPress={navigateToBankDetails}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={{ fontWeight: "600", fontSize: 16, lineHeight: 19 }}>
              Back
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyNumberScreen;

const styles = StyleSheet.create({});
