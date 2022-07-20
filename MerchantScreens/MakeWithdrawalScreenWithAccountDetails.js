import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";

const MakeWithdrawalScreenWithAccountDetails = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View>
        <ProfileHeader title="Make Withdrawal" />
      </View>
      <View style={{ paddingHorizontal: "3%", paddingVertical: "4%" }}>
        <Text>Bank Details</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: "3%",
          paddingVertical: "4%",
        }}
      >
        <Text>Bank:</Text>
        <Text>Zenith</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: "3%",
          paddingVertical: "4%",
        }}
      >
        <Text>Account Name:</Text>
        <Text>Mark Thuram</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: "3%",
          paddingVertical: "4%",
        }}
      >
        <Text>Account Number:</Text>
        <Text>3344510011</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: "3%",
          paddingVertical: "4%",
        }}
      >
        <Text>To change Bank details, contact our </Text>
        <View>
          <TouchableOpacity>
            <Text style={{ textDecorationLine: "underline" }}>
              Customer Service
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: "10%",
          left: "10%",
          right: "10%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: "5%",
          }}
        >
          <Text>Available Balance:</Text>
          <Text>3,000 NGN</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: "5%",
            paddingVertical: "5%",
          }}
        >
          <Text
            style={{
              borderColor: "#D2D9E7",
              borderWidth: 1,
              borderStyle: "solid",
              paddingVertical: "5%",
              paddingHorizontal: "6%",
            }}
          >
            NGN
          </Text>
          <TextInput
            style={{
              backgroundColor: "#ECF1F8",
              width: "70%",
              height: 56,
              borderRadius: 8,
              padding: 10,
            }}
            placeholder="Input Amount"
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: "3%",
          }}
        >
          <Button title="Withdraw" textColor="white" bgColor="#1F4287" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MakeWithdrawalScreenWithAccountDetails;

const styles = StyleSheet.create({});
