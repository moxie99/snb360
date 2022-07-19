import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/Header";
import InputComponent from "../components/InputComponent";
import Button from "../components/Button";
import api from "../api-config/api_config";

const ForgotPaswword = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const data = { UserName: email };
  const config = {
    header: {
      "Content-type": "application / json",
    },
  };
  const recoverPassword = () => {
    api
      .post("/forgetpasssendemail", data, config)
      .then((res) => {
        if (
          res.data ===
          "A code has been sent to your email for password recovery"
        ) {
          console.log(res.data);
          navigation.navigate("VerifyChangePasswordScreen", data);
        }
      })
      .catch((err) => console.log(`${err}`));
  };
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View style={{ marginBottom: 20, paddingLeft: 20 }}>
        <Header />
      </View>
      <View style={{ marginBottom: 10, paddingLeft: 30 }}>
        <Text
          style={{
            fontSize: 16,
            color: "#000000",
            fontWeight: "bold",
            fontFamily: "NotoSans_400Regular",
          }}
        >
          Recover Password
        </Text>
      </View>
      <View style={{ marginBottom: 20, paddingLeft: 30 }}>
        <Text
          style={{
            fontSize: 14,
            color: "rgba(0, 0, 0, 0.6)",
            fontStyle: "normal",
            fontFamily: "NotoSans_400Regular",
          }}
        >
          Enter the email address you signed up with.
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <InputComponent
          placeholder="@ Email"
          entry={email}
          setEntry={setEmail}
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: "10%",
          paddingLeft: "10%",
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Button
            bgColor="#1F4287"
            mgBottom={20}
            title="Recover"
            textColor="white"
            onPress={() => {
              recoverPassword();
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPaswword;

const styles = StyleSheet.create({});
