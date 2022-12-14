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
import Feather from "react-native-vector-icons/Feather";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const MakeWithdrawalScreen = () => {
  const navigation = useNavigation();
  const enterBankDetails = () => {
    // navigation.navigate("MerchantEnterBankDetailsLater");
    navigation.navigate("MakeWithDrawal");
  };
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View>
        <ProfileHeader title="Make Withdrawal" />
      </View>
      <View style={{ paddingHorizontal: "5%", paddingVertical: 20 }}>
        <Text>Bank Details</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <Text>NA</Text>
        <View>
          <TouchableOpacity
            style={{
              width: 107,
              height: 32,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#1F4287",
            }}
            onPress={enterBankDetails}
          >
            <Feather name="plus" size={18} color="#1F4287" />
            <Text>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ paddingHorizontal: "5%", paddingVertical: 20 }}>
        <Text>To change Bank details, contact our Customer Service</Text>
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

export default MakeWithdrawalScreen;

const styles = StyleSheet.create({});
