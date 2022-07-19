import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ModalScreen = ({ navigation }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <View
        style={{
          padding: "7%",
          margin: "10%",
          borderRadius: 8,
          backgroundColor: "white",
          shadowColor: "#4048b7",
          shadowOffset: {
            width: 8.4,
            height: 8.4,
          },
          shadowOpacity: 0.74,
          shadowRadius: 30,
          elevation: 10,
        }}
      >
        <Text
          style={{
            color: "#AF0707",
            fontSize: 16,
            lineHeight: 22,
            fontWeight: "600",
            paddingBottom: 10,
          }}
        >
          Oops!
        </Text>
        <Text
          style={{
            color: "#060D1B",
            fontSize: 14,
            lineHeight: 24,
            fontWeight: "400",
            paddingBottom: 10,
          }}
        >
          You have to register as a merchant to list items for sale or respond
          to customers request.
        </Text>
        <Text
          style={{
            color: "#060D1B",
            fontSize: 14,
            lineHeight: 24,
            fontWeight: "400",
            paddingBottom: 10,
          }}
        >
          Registration is FREE
        </Text>
        <View
          style={{
            paddingLeft: "30%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontWeight: "600",
                lineHeight: 19,
                fontSize: 14,
              }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 100,
              height: 30,
              backgroundColor: "#1F4287",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 16,
            }}
            onPress={() => {
              navigation.navigate("merchantOnboarding");
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "600",
                lineHeight: 19,
                fontSize: 14,
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({});
