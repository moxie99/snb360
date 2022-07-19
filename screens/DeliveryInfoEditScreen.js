import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileHeader from "../components/ProfileHeader";
import InputComponent from "../components/InputComponent";
import SelectList from "react-native-dropdown-select-list";
import Button from "../components/Button";

const DeliveryInfoEditScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View>
        <ProfileHeader title="Delivery Information" />
      </View>
      <View style={{ marginTop: "10%" }}>
        <Text style={{ paddingLeft: "5%", paddingBottom: "2%" }}>
          Full Name
        </Text>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <InputComponent />
        </View>
      </View>
      <View>
        <Text style={{ paddingLeft: "5%", paddingBottom: "2%" }}>
          Delivery Address
        </Text>
        <TextInput
          style={{
            height: 96,
            width: "90%",
            borderRadius: 16,
            borderStyle: "solid",
            borderColor: "red",
            backgroundColor: "#ECF1F8",
            marginLeft: "5%",
          }}
        />
      </View>
      <View
        style={{
          paddingHorizontal: "5%",
          paddingVertical: "5%",
        }}
      >
        <SelectList placeholder="Select State" />
      </View>
      <View
        style={{
          paddingHorizontal: "5%",
          paddingVertical: "5%",
        }}
      >
        <SelectList placeholder="City" />
      </View>
      <View>
        <Text style={{ paddingLeft: "5%", paddingBottom: "2%" }}>Phone</Text>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <InputComponent />
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "5%",
        }}
      >
        <Button title="Save" textColor="white" bgColor="#1F4287" />
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DeliveryInfoEditScreen;

const styles = StyleSheet.create({});
