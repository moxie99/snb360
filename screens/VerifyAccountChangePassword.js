import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/Header";
import InputComponent from "../components/InputComponent";
import Button from "../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../api-config/api_config";

const VerifyAccountChangePassword = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [code, setCode] = React.useState("");
  const [uniqueid, setuniqueid] = React.useState("");

  const email = route.params.UserName;
  const data = {
    UserName: route.params.UserName,
    uid: uniqueid,
  };

  const codeInput = { uniqueid: code };

  const verifyToHomeScreen = () => {
    api
      .post("/Verifyemailcodeforgetpass", codeInput)
      .then((response) => {
        if (response.status === 200) {
          navigation.navigate("NewPassword", data);
          var id = JSON.parse(response.config.data).uniqueid;
          setuniqueid(id);
        } else {
          console.warn("Invalid Login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(uniqueid);

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
      <View style={{ position: "absolute", bottom: "10%", paddingLeft: "10%" }}>
        <View>
          <Button
            textColor="white"
            bgColor="#1F4287"
            title="Submit"
            onPress={verifyToHomeScreen}
          />
        </View>
      </View>
      <View>
        <Text> email: {route.params.UserName}</Text>
      </View>
    </SafeAreaView>
  );
};

export default VerifyAccountChangePassword;

const styles = StyleSheet.create({});
