import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/Header";
import InputComponent from "../components/InputComponent";
import Button from "../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../api-config/api_config";

const VerifyAccount = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [code, setCode] = React.useState("");
  const [codeError, setCodeError] = React.useState("");
  const [codeSuccess, setCodeSuccess] = React.useState("");
  const data = {
    Firstnm: route.params.Firstnm,
    UserName: route.params.UserName,
    password: route.params.password,
    uniqueid: route.params.uniqueid,
    locations: route.params.locations,
    states: route.params.states,
    code: code,
  };

  const codeInput = { uniqueid: code };

  const verifyToHomeScreen = () => {
    api
      .post("/Verifyemailcode", codeInput)
      .then((response) => {
        console.log(response.data);
        if (response.data === "Verification failed") {
          console.warn("Invalid Code");
          setCodeError("Invalid Code");
        } else if (response.data === "Verification Successful") {
          setCodeSuccess("Verification Successful");
          navigation.navigate("Login", data);
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView
      style={{
        height: "100%",
        width: "100%",
        // alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <View>
        <Header />
      </View>
      <View style={{ marginTop: 20, paddingLeft: 30 }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "NotoSans_400Regular",
            fontWeight: "bold",
            textAlign: "justify",
          }}
        >
          Verify your account
        </Text>
      </View>
      <View style={{ marginTop: 20, paddingLeft: 30 }}>
        <Text
          style={{
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: 14,
            fontStyle: "normal",
            lineHeight: 25,
          }}
        >
          A 4 digit verification code has been sent to your email
          Example@email.com
        </Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <InputComponent
          placeholder="Input Code"
          entry={code}
          setEntry={setCode}
        />
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "red", fontStyle: "italic" }}>{codeError}</Text>
      </View>
      <View style={{ marginTop: 10, paddingLeft: 30 }}>
        <Text
          style={{
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: 14,
            fontStyle: "normal",
            lineHeight: 25,
          }}
        >
          If you don’t see the email in your inbox, check your spam folder
        </Text>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            color: "green",
            fontStyle: "italic",
            fontWeight: "bold",
            fontSize: 14,
          }}
        >
          {codeSuccess}
        </Text>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          right: "5%",
        }}
      >
        <View>
          <Button
            textColor="white"
            bgColor="#1F4287"
            title="Verify and Continue"
            onPress={verifyToHomeScreen}
          />
        </View>
      </View>
      <View>
        <Text>TransidType: {route.params.uniqueid}</Text>
        <Text>Location: {route.params.locations}</Text>
        <Text> State: {route.params.states}</Text>
        <Text> name: {route.params.Firstnm}</Text>
        <Text> email: {route.params.UserName}</Text>
        <Text> password: {route.params.password}</Text>
      </View>
    </SafeAreaView>
  );
};

export default VerifyAccount;

const styles = StyleSheet.create({});
