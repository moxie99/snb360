import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";

const ContinueToOnBoard = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const toSignUp = () => {
    navigation.navigate("SignUp", {
      uniqueid: route.params.uniqueid,
      location: route.params.location,
      states: route.params.states,
    });
  };

  return (
    <SafeAreaView
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <View>
        <Header title="Login" path="Login" />
      </View>
      <View style={{ paddingLeft: 30, marginTop: 30 }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "NotoSans_400Regular",
            color: "black",
          }}
        >
          Let's get you onboard
        </Text>
      </View>
      <View style={{ paddingLeft: 30, marginTop: 10 }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "NotoSans_400Regular",
            color: "rgba(0, 0, 0, 0.6)",
          }}
        >
          How will you do like to sign up
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 20,
        }}
      >
        <TouchableOpacity style={styles.gmailLoginBtn}>
          <MaterialCommunityIcons name="gmail" size={24} color="#F44336" />
          <Text
            style={{
              fontFamily: "NotoSans_400Regular",
              fontSize: 14,
              fontWeight: "bold",
              lineHeight: 19,
              color: "#1F4287",
              paddingLeft: 15,
            }}
          >
            Continue with Gmail
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <Button
          textColor="white"
          bgColor="#1F4287"
          title="Sign Up With Email"
          brColor="white"
          onPress={toSignUp}
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: "10%",
          width: "100%",
          fontSize: 14,
          lineHeight: 24,
          padding: "10%",
        }}
      >
        <View>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "NotoSans_400Regular",
              textAlign: "center",
            }}
          >
            By signing up we believe you agree to our Terms of Service
          </Text>
        </View>
        <View>
          <Text>TransidType: {route.params.uniqueid}</Text>
          <Text>Location: {route.params.location}</Text>
          <Text> State: {route.params.states}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ContinueToOnBoard;

const styles = StyleSheet.create({
  gmailLoginBtn: {
    width: 328,
    height: 48,
    borderRadius: 16,
    borderColor: "#1F4287",
    borderWidth: 2,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
