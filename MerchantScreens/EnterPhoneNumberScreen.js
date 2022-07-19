import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputComponent from "../components/InputComponent";
import Footer from "../components/Footer";
import Fontisto from "react-native-vector-icons/Fontisto";

const height = Dimensions.get("window").height * 0.8;
const heightCard = Dimensions.get("window").height * 0.7;

const EnterPhoneNumberScreen = ({ navigation }) => {
  const navigateToVerifyNumber = () => {
    navigation.navigate("VerifyNumber");
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
        <Text>Enter your business phone number</Text>
      </View>

      <View style={styles.SectionStyle}>
        <Image
          source={require("../assets/flag.png")} //Change your icon image here
          style={styles.ImageStyle}
        />

        <TextInput
          style={{ flex: 1 }}
          placeholder="Phone Number"
          underlineColorAndroid="transparent"
        />
      </View>
      <View
        style={{
          backgroundColor: "#D9D9D9",
          marginHorizontal: "5%",
          position: "absolute",
          top: heightCard,
          left: 0,
          right: 0,
          bottom: 0,
          height: 134,
          paddingHorizontal: "3%",
          paddingVertical: "5%",
        }}
      >
        <Text>Note:</Text>
        <Text style={{ textAlign: "justify" }}>
          Every successful sale attracts a commision fee of 5% (max. of 6000
          NGN) and item insurance charge of 1%
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity>
            <Fontisto name="checkbox-passive" color="#1F4287" size={24} />
          </TouchableOpacity>
          <Text style={{ padding: 10 }}>I agree to the Terms of Service</Text>
        </View>
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
        <Footer title="Continue" onPress={navigateToVerifyNumber} />
      </View>
    </SafeAreaView>
  );
};

export default EnterPhoneNumberScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ECF1F8",
    height: 56,
    borderRadius: 16,
    margin: 10,
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "contain",
    alignItems: "center",
  },
});
