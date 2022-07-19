import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SelectList from "react-native-dropdown-select-list";
import InputComponent from "../components/InputComponent";
import Footer from "../components/Footer";

const height = Dimensions.get("window").height * 0.8;
const LocationRegistration = ({ navigation }) => {
  const navigateToCategory = () => {
    navigation.navigate("MerchantCategories");
  };
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View
        style={{ paddingTop: "5%", paddingBottom: "10%", paddingLeft: "3%" }}
      >
        <Text>Register as a Merchant</Text>
      </View>
      <View style={{ paddingLeft: "3%" }}>
        <Text>Where is your shop located?</Text>
      </View>
      <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
        <SelectList placeholder="Select state" />
      </View>
      <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
        <SelectList placeholder="City" />
      </View>
      <View style={{ paddingLeft: "3%", paddingBottom: "5%" }}>
        <Text>Note: Only merchant in the above listed cities can register</Text>
      </View>
      <View style={{ paddingLeft: "3%", paddingBottom: "1%" }}>
        <Text>Shop Address</Text>
      </View>
      <View>
        <TextInput
          placeholder="Enter Address"
          style={{
            width: "90%",
            marginLeft: "5%",
            height: 76,
            backgroundColor: "#E2E9F6",
            borderRadius: 16,
            padding: 10,
          }}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "5%",
        }}
      >
        <InputComponent placeholder="Nearest landmark (optional)" />
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
        <Footer title="Next" onPress={navigateToCategory} />
      </View>
    </SafeAreaView>
  );
};

export default LocationRegistration;

const styles = StyleSheet.create({});
