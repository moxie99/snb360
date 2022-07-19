import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Ionic from "react-native-vector-icons/Ionicons";
import ProfileCards from "../components/ProfileCards";

const ProfileScreen = ({ navigation }) => {
  const bannerHeight = Dimensions.get("window").height * 0.3;
  const actionHeight = Dimensions.get("window").height * 0.18;

  return (
    <SafeAreaView>
      <View
        style={{
          width: "100%",
          height: bannerHeight,
          backgroundColor: "#1F4287",
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            // paddingTop: 10,
            paddingRight: 10,
            paddingLeft: 10,
          }}
        >
          <Text style={{ color: "white" }}> Account</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("EditSettings");
            }}
          >
            <Ionic name="settings" color="white" size={24} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
          }}
        >
          <TouchableOpacity
            style={{
              width: 64,
              height: 64,
              borderRadius: "100%",
              backgroundColor: "green",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", lineHeight: 27 }}>M</Text>
          </TouchableOpacity>
          <Text style={{ color: "white", lineHeight: 60 }}>Mark Thuram</Text>
        </View>
      </View>
      <View
        style={{
          width: "90%",
          height: actionHeight,
          backgroundColor: "white",
          marginTop: 30,
          marginLeft: "5%",
          marginRight: "5%",
          justifyContent: "space-between",
          borderRadius: 20,
          paddingLeft: 20,
          paddingTop: 10,
          paddingBottom: 20,
          shadowColor: "#171717",
          shadowOffset: { width: 10, height: 3 },
          shadowOpacity: 0.4,
          shadowRadius: 2,
          elevation: 20,
          shadowColor: "#a1a1a1",
        }}
      >
        <Text
          style={{
            color: "#060D1B",
            lineHeight: 16,
            fontWeight: "500",
            fontSize: 14,
          }}
        >
          Become a Merchant
        </Text>
        <Text
          style={{
            color: "#060D1B",
            lineHeight: 14,
            fontWeight: "400",
            fontSize: 14,
          }}
        >
          Start listing items for sale and respond to customer’s request when
          you register as a merchant. Registration is FREE
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: "#1F4287",
              fontSize: 16,
              lineHeight: 22,
              fontWeight: "600",
            }}
          >
            REGISTER
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <ProfileCards />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
