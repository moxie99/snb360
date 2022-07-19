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
import { useNavigation } from "@react-navigation/native";

const cardHeight = Dimensions.get("window").height * 0.05;
const ProfileCards = () => {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          width: "90%",
          marginLeft: "5%",
          marginRight: "5%",
          borderRadius: 10,
          height: cardHeight,
          backgroundColor: "white",
          marginTop: 20,
          justifyContent: "space-between",
          flexDirection: "row",
          shadowColor: "#ffffff",
          shadowOffset: { width: 10, height: 10 },
          shadowOpacity: 0.4,
          shadowRadius: 2,
          elevation: 2,
          shadowColor: "#a1a1a1",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 20,
          }}
        >
          <Ionic name="person-add-outline" color="#1F4287" size={24} />
          <Text
            style={{
              paddingLeft: 15,
              color: "#1F4287",
              fontSize: 16,
              fontWeight: "600",
              lineHeight: 22,
            }}
          >
            Profile
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingRight: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Edit")}>
            <Ionic name="chevron-forward-outline" color="#000" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: "90%",
          marginLeft: "5%",
          marginRight: "5%",
          borderRadius: 10,
          height: cardHeight,
          backgroundColor: "white",
          marginTop: 20,
          justifyContent: "space-between",
          flexDirection: "row",
          shadowColor: "#171717",
          shadowOffset: { width: 10, height: 3 },
          shadowOpacity: 0.4,
          shadowRadius: 2,
          elevation: 20,
          shadowColor: "#a1a1a1",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 20,
          }}
        >
          <Ionic name="cart-outline" color="#1F4287" size={24} />
          <Text
            style={{
              paddingLeft: 15,
              color: "#1F4287",
              fontSize: 16,
              fontWeight: "600",
              lineHeight: 22,
            }}
          >
            My Orders
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingRight: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Orders")}>
            <Ionic name="chevron-forward-outline" color="#000000" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: "90%",
          marginLeft: "5%",
          marginRight: "5%",
          borderRadius: 10,
          height: cardHeight,
          backgroundColor: "white",
          marginTop: 20,
          justifyContent: "space-between",
          flexDirection: "row",
          shadowColor: "#171717",
          shadowOffset: { width: 10, height: 3 },
          shadowOpacity: 0.4,
          shadowRadius: 2,
          elevation: 20,
          shadowColor: "#a1a1a1",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 20,
          }}
        >
          <Ionic name="ios-help-circle-outline" color="#1F4287" size={24} />
          <Text
            style={{
              paddingLeft: 15,
              color: "#1F4287",
              fontSize: 16,
              fontWeight: "600",
              lineHeight: 22,
            }}
          >
            My Requests
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingRight: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Requests")}>
            <Ionic name="chevron-forward-outline" color="#000000" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: "90%",
          marginLeft: "5%",
          marginRight: "5%",
          borderRadius: 10,
          height: cardHeight,
          backgroundColor: "white",
          marginTop: 20,
          justifyContent: "space-between",
          flexDirection: "row",
          shadowColor: "#171717",
          shadowOffset: { width: 10, height: 3 },
          shadowOpacity: 0.4,
          shadowRadius: 2,
          elevation: 20,
          shadowColor: "#a1a1a1",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 20,
          }}
        >
          <Ionic name="heart-outline" color="#1F4287" size={24} />
          <Text
            style={{
              paddingLeft: 15,
              color: "#1F4287",
              fontSize: 16,
              fontWeight: "600",
              lineHeight: 22,
            }}
          >
            Saved Items
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingRight: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("SavedItems")}>
            <Ionic name="chevron-forward-outline" color="#000000" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ProfileCards;

const styles = StyleSheet.create({});
