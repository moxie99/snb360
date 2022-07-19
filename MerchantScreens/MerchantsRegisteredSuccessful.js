import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const MerchantsRegisteredSuccessful = () => {
  const navigation = useNavigation();
  const navigateToProfile = () => {
    navigation.navigate("MerchantsProfile");
  };
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "white",
          height: 72,
          width: "100%",
          justifyContent: "center",
          paddingHorizontal: 10,
        }}
      >
        <Image
          source={require("../assets/congrats.png")}
          style={{ width: 40, height: 40 }}
        />
      </View>
      <View style={{ alignItems: "center", justifyContent: "space-between" }}>
        <View style={{ marginTop: "30%" }}>
          <Text
            style={{
              color: "#10CBA8",
              fontSize: 18,
              fontWeight: "600",
              lineHeight: 25,
            }}
          >
            Congratulation!
          </Text>
        </View>
        <View style={{ marginTop: "5%" }}>
          <Text
            style={{
              color: "#000000",
              fontSize: 12,
              fontWeight: "400",
              lineHeight: 17,
            }}
          >
            Your registration was successful
          </Text>
        </View>
        <View style={{ marginTop: "9%" }}>
          <Text
            style={{
              color: "#000000",
              fontSize: 14,
              fontWeight: "400",
              lineHeight: 24,
              paddingHorizontal: "10%",
              textAlign: "center",
            }}
          >
            You can start listing items for sale and respond to request
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "7%",
          }}
        >
          <View>
            <Button
              title="Add Items For Sale"
              textColor="white"
              bgColor="#1F4287"
            />
          </View>
          <View style={{ marginTop: "3%" }}>
            <TouchableOpacity onPress={navigateToProfile}>
              <Text
                style={{
                  color: "#1F4287",
                  fontSize: 14,
                  fontWeight: "600",
                  lineHeight: 19,
                }}
              >
                Not Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MerchantsRegisteredSuccessful;

const styles = StyleSheet.create({});
