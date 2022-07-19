import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileHeader from "../components/ProfileHeader";
import Ionic from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const EditSettingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ paddingLeft: 20 }}>
      <View>
        <ProfileHeader title="Settings" />
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: 20,
          marginTop: 20,
        }}
      >
        <Text>Change Login Password</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("changePassword");
          }}
        >
          <Ionic name="chevron-forward-outline" color="#000000" size={24} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: 20,
          marginTop: 20,
        }}
      >
        <Text>Auto play videos</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="toggle-switch-outline"
            color="#000000"
            size={24}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: 20,
          marginTop: 20,
        }}
      >
        <Text>Delivery Info</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("DeliveryInfo");
          }}
        >
          <MaterialCommunityIcons name="pencil" color="#000000" size={24} />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ paddingTop: 5 }}>Shipping Address</Text>
        <Text style={{ paddingTop: 5 }}>NA</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ paddingTop: 5 }}>Asaba, Delta State</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ paddingTop: 5 }}>Name</Text>
        <Text style={{ paddingTop: 5 }}>NA</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ paddingTop: 5 }}>Phone</Text>
        <Text style={{ paddingTop: 5 }}>NA</Text>
      </View>
      <View
        style={{
          width: "100%",
          height: 4,
          backgroundColor: "#E2E9F6",
          marginTop: 10,
        }}
      ></View>

      <View style={{ marginBottom: 10, marginTop: 10 }}>
        <TouchableOpacity>
          <Text style={{ paddingTop: 5 }}>Delete Account</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginBottom: 10, marginTop: 10 }}>
        <TouchableOpacity>
          <Text>Terms and Privacy</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EditSettingScreen;

const styles = StyleSheet.create({});
