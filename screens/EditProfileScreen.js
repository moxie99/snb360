import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import ProfileHeader from "../components/ProfileHeader";
import Ionic from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../context/AuthContext";

const headerHeight = Dimensions.get("window").height * 0.09;
const cardHeight = Dimensions.get("window").height * 0.05;

const EditProfileScreen = ({ navigation }) => {
  const { logout, email, name, deliveryNames } = useContext(AuthContext);
  return (
    <SafeAreaView>
      <View
        style={{
          width: "100%",
          height: headerHeight,
          paddingLeft: 10,
          backgroundColor: "white",
        }}
      >
        <ProfileHeader title="Profile" />
      </View>
      <View style={{ marginTop: 3, backgroundColor: "white" }}>
        <View style={{ width: "100%", height: headerHeight, paddingLeft: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingBottom: 10,
            }}
          >
            <Ionic name="mail-outline" color="black" size={24} />
            <Text
              style={{
                paddingLeft: 10,
                lineHeight: 19,
                fontSize: 14,
                fontWeight: "500",
                color: "#060D1B",
              }}
            >
              Email
            </Text>
          </View>
          <Text
            style={{
              paddingLeft: 35,
              fontSize: 14,
              fontWeight: "400",
              lineHeight: 17,
            }}
          >
            {email}
          </Text>
        </View>
        <View style={{ width: "100%", height: headerHeight, paddingLeft: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingBottom: 10,
              justifyContent: "space-between",
              paddingRight: 20,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionic name="person-outline" color="black" size={24} />
              <Text
                style={{
                  paddingLeft: 10,
                  color: "#060D1B",
                  fontWeight: "500",
                  lineHeight: 19,
                  fontSize: 14,
                }}
              >
                Your Name
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("changePassword");
                }}
              >
                <Ionic name="pencil-outline" color="black" size={24} />
              </TouchableOpacity>
            </View>
          </View>
          <Text
            style={{
              paddingLeft: 35,
              color: "#000000",
              fontWeight: "400",
              lineHeight: 17,
              fontSize: 14,
            }}
          >
            {deliveryNames !== null
              ? JSON.parse(deliveryNames)
              : JSON.parse(name)}
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 10, backgroundColor: "white" }}>
        <View style={{ width: "100%", height: cardHeight, paddingLeft: 10 }}>
          <TouchableOpacity
            onPress={() => {
              logout();
            }}
          >
            <Text
              style={{
                color: "black",
                fontWeight: "600",
                lineHeight: 19,
                fontSize: 14,
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "100%", height: cardHeight, paddingLeft: 10 }}>
          <TouchableOpacity>
            <Text
              style={{
                color: "black",
                fontWeight: "600",
                lineHeight: 19,
                fontSize: 14,
              }}
            >
              FAQ
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "100%", height: cardHeight, paddingLeft: 10 }}>
          <TouchableOpacity>
            <Text
              style={{
                color: "black",
                fontWeight: "600",
                lineHeight: 19,
                fontSize: 14,
              }}
            >
              Contact Us
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({});
