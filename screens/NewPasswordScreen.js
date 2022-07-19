import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useContext } from "react";
import Header from "../components/Header";
import InputComponent from "../components/InputComponent";
import Button from "../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";

const NewPasswordScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const { forgetPasswordToken, forgetPasswordLogin } = useContext(AuthContext);
  const email = route.params.UserName;
  const action = () => {
    if (password === confirmPassword) {
    }
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
      <View
        style={{
          paddingLeft: 30,
          marginBottom: 10,
          marginTop: 30,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "rgba(0, 0, 0, 1)",
          }}
        >
          Setup New Password
        </Text>
      </View>
      <View style={{ paddingLeft: 30, marginBottom: 10 }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "NotoSans_400Regular",
          }}
        >
          You can now set up a new password
        </Text>
      </View>
      <View style={{ paddingLeft: 30 }}>
        <Text>minimum of 6 characters</Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <InputComponent
          bgColor="#1F4287"
          mgBottom={20}
          title="Your Name"
          textColor="white"
          placeholder="🔒 Enter New Password"
          icon="eye-off"
          entry={password}
          setEntry={setPassword}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: 5 }}>
        <InputComponent
          bgColor="#1F4287"
          mgBottom={20}
          title="Your Name"
          textColor="white"
          placeholder="🔒 Enter New Password"
          icon="eye-off"
          entry={confirmPassword}
          setEntry={setConfirmPassword}
        />
      </View>
      <View style={{ position: "absolute", bottom: "10%", paddingLeft: "10%" }}>
        <View>
          <Button
            textColor="white"
            bgColor="#1F4287"
            title="Save and Continue"
          />
        </View>
      </View>
      <View>
        <Text> email: {route.params.UserName}</Text>
        <Text> password: {route.params.uid}</Text>
      </View>
    </SafeAreaView>
  );
};

export default NewPasswordScreen;

const styles = StyleSheet.create({});
