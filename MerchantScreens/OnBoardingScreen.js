import {
  Dimensions,
  Image,
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
const OnBoardingScreen = ({ navigation }) => {
  const navigateToLocation = () => {
    navigation.navigate("merchantLocation");
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <View
        style={{ paddingTop: "5%", paddingBottom: "10%", paddingLeft: "3%" }}
      >
        <Text>Register as a Merchant</Text>
      </View>
      <View
        style={{
          paddingBottom: "1%",
          paddingLeft: "3%",
        }}
      >
        <Text>Business/Shop Name</Text>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <InputComponent />
      </View>
      <View
        style={{ paddingTop: "2%", paddingBottom: "2%", paddingLeft: "3%" }}
      >
        <Text>Upload your business logo or any profile picture</Text>
      </View>
      <View
        style={{
          width: "90%",
          height: 108,
          borderRadius: 16,
          borderColor: "#D2D9E7",
          borderWidth: 1,
          borderStyle: "solid",
          marginLeft: "5%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 24, height: 24, resizeMode: "cover" }}
          source={require("../assets/add_photo_alternate.png")}
        />
        <Text>Add a Photo</Text>
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
            title="Next"
            textColor="white"
            bgColor="#1F4287"
            onPress={navigateToLocation}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={{ fontWeight: "600", fontSize: 16, lineHeight: 19 }}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({});
