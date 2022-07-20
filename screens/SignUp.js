import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import * as React from "react";
import qs from "qs";
import Header from "../components/Header";
import InputComponent from "../components/InputComponent";
import Button from "../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../api-config/api_config";
import axios from "axios";

const SignUp = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [name, setName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [showPassword, setShowPassword] = React.useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(true);
  const [emailError, setEmailError] = React.useState(null);
  const [nameError, setNameError] = React.useState(null);
  const [passwordError, setPasswordError] = React.useState(null);

  const data = {
    Firstnm: name,
    UserName: email,
    password: password,
    uniqueid: route.params.uniqueid,
    locations: route.params.states,
    states: route.params.location,
  };

  const signUpToVerify = () => {
    axios({
      method: "POST",
      url: "https://mbiapi.snb366.com.ng/api/snb360/register",
      data: qs.stringify({
        Firstnm: name,
        UserName: email,
        password: password,
        uniqueid: route.params.uniqueid,
        locations: route.params.states,
        states: route.params.location,
      }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      },
    })
      .then((response) => {
        console.log(response.data);
        if (response.data === "Email already exist") {
          setEmailError(response.data);
        } else if (password === null && email === null && name === null) {
          setEmailError("Please enter a valid email");
          setPasswordError("Please enter a valid password");
          setNameError("Please enter a valid name");
        } else if (
          response.data === "Registration not successful" ||
          email === null
        ) {
          setEmailError("Please enter a valid email");
        } else if (
          response.data === "Registration not successful" ||
          password === null
        ) {
          setPasswordError("Please enter a valid password");
        } else if (
          response.data === "Registration not successful" ||
          name === null
        ) {
          setNameError("Please enter a valid name");
        } else if (
          response.data === "Check your email for verification code" &&
          email !== null &&
          password !== null &&
          name !== null
        ) {
          navigation.navigate("VerifyAccount", data);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View>
        <Header title="Login" path="Login" />
      </View>
      <View style={{ paddingLeft: 30 }}>
        <Text
          style={{
            fontSize: 40,
            color: "rgba(0, 0, 0, 0.6)",
            fontFamily: "NotoSans_400Regular",
          }}
        >
          Sign Up
        </Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <View>
          <InputComponent
            bgColor="#1F4287"
            mgBottom={20}
            title="Your Name"
            textColor="white"
            placeholder="👱Your Name"
            entry={name}
            setEntry={setName}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "red" }}>{nameError}</Text>
        </View>
        <View>
          <InputComponent
            bgColor="#1F4287"
            mgBottom={20}
            title="Your Name"
            textColor="white"
            placeholder="@ Email"
            entry={email}
            setEntry={setEmail}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "red" }}>{emailError}</Text>
        </View>
        <View>
          <InputComponent
            bgColor="#1F4287"
            mgBottom={20}
            title="Your Email"
            textColor="white"
            placeholder="🔒 Password"
            icon="eye-off"
            entry={password}
            setEntry={setPassword}
            textSecure={true}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "red" }}>{passwordError}</Text>
        </View>
      </View>
      <View
        style={{
          paddingLeft: 30,
          marginTop: 20,
          fontFamily: "NotoSans_400Regular",
        }}
      >
        <Text>minimum of 6 characters</Text>
      </View>
      <View
        style={{
          paddingLeft: 30,
          marginTop: -20,
          fontFamily: "NotoSans_400Regular",
        }}
      ></View>
      <View style={{ marginTop: 60, alignItems: "center" }}>
        <Button
          textColor="white"
          bgColor="#1F4287"
          title="Sign Up"
          brColor="white"
          onPress={signUpToVerify}
        />
      </View>
      <View>
        <Text>TransidType: {route.params.uniqueid}</Text>
        <Text>Location: {route.params.location}</Text>
        <Text> State: {route.params.states}</Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
