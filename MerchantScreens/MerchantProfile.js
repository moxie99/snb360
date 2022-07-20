import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Ionic from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import ProfileCards from "../components/ProfileCards";
import { useNavigation } from "@react-navigation/native";

const heightBanner = Dimensions.get("window").height * 0.3;
const paymentCardheight = Dimensions.get("window").height * 0.2;
const salesHeight = Dimensions.get("window").height * 0.15;
const width = Dimensions.get("window").width;
const MerchantProfile = () => {
  const navigation = useNavigation();
  const navigateToPayment = () => {
    navigation.navigate("Withdrawal");
  };
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          height: 70,
          top: 0,
          backgroundColor: "#1F4287",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View>
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "500",
            }}
          >
            Account
          </Text>
        </View>
        <View>
          <Ionic size={24} name="settings-outline" color="white" />
        </View>
      </View>

      <ScrollView>
        <View
          style={{
            backgroundColor: "#1F4287",
            width: width,
            height: heightBanner,
          }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View
              style={{
                backgroundColor: "#6BF692",
                height: 74,
                width: 74,
                borderRadius: "50%",
              }}
            ></View>
            <View
              style={{
                backgroundColor: "#ffffff",
                width: 24,
                height: 24,
                borderRadius: "50%",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: "22%",
              }}
            >
              <Ionic size={20} name="pencil" color="black" />
            </View>
            <View>
              <Text
                style={{
                  color: "white",
                  paddingTop: "5%",
                  fontWeight: "600",
                  fontSize: 18,
                  lineHeight: 25,
                }}
              >
                Mark Thuram
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            width: "90%",
            height: paymentCardheight,
            marginLeft: "5%",
            // position: "absolute",
            // top: "90%",
            borderRadius: "5%",
            shadowColor: "#a1a1a1",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 2,
            justifyContent: "space-between",
            paddingHorizontal: 10,
            marginTop: "-7%",
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 15,
            }}
          >
            <Text
              style={{
                color: "#060D1B",
                fontWeight: "400",
                fontSize: 12,
                lineHeight: 15,
              }}
            >
              Available Balance
            </Text>
            <Text
              style={{
                color: "#060D1B",
                fontWeight: "400",
                fontSize: 12,
                lineHeight: 15,
              }}
            >
              0 NGN
            </Text>
          </View>
          <View>
            <Text>Unsettled Transactions: #️ 0</Text>
          </View>
          <View style={{ paddingBottom: 20 }}>
            <TouchableOpacity
              style={{
                borderColor: "#1F4287",
                width: "80%",
                marginLeft: "10%",
                height: 40,
                borderStyle: "solid",
                borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8",
              }}
              onPress={navigateToPayment}
            >
              <Text
                style={{
                  color: "#1F4287",
                  fontSize: 14,
                  fontWeight: "600",
                  lineHeight: 19,
                }}
              >
                Withdraw
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginTop: "5%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",

            height: salesHeight,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              height: salesHeight,
              borderRadius: "5%",
              shadowColor: "#a1a1a1",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 2,
              elevation: 2,
              width: "40%",
              justifyContent: "space-around",
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                color: "#1F4287",
                fontWeight: "500",
                fontSize: 16,
                lineHeight: 22,
              }}
            >
              Listed Items
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  color: "#1F4287",
                  fontWeight: "700",
                  fontSize: 24,
                  lineHeight: 24,
                  paddingRight: "2%",
                }}
              >
                0
              </Text>
              <Text
                style={{
                  color: "#1F4287",
                  fontWeight: "400",
                  fontSize: 14,
                  lineHeight: 24,
                }}
              >
                items
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "white",
              height: salesHeight,
              borderRadius: "5%",
              shadowColor: "#a1a1a1",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 2,
              elevation: 2,
              width: "40%",
              justifyContent: "space-around",
              paddingHorizontal: 10,
            }}
          >
            <View>
              <Text
                style={{
                  color: "#1F4287",
                  fontWeight: "400",
                  fontSize: 16,
                  lineHeight: 22,
                }}
              >
                My Sales
              </Text>
              <Text
                style={{
                  color: "#AF0707",
                  fontWeight: "400",
                  fontSize: 12,
                  lineHeight: 16.34,
                }}
              >
                +2 new orders
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  color: "#1F4287",
                  fontWeight: "700",
                  fontSize: 24,
                  lineHeight: 24,
                  paddingRight: "2%",
                }}
              >
                0
              </Text>
              <Text
                style={{
                  color: "#1F4287",
                  fontWeight: "400",
                  fontSize: 14,
                  lineHeight: 24,
                }}
              >
                sales
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3%",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#1F4287",
              width: 328,
              height: 40,
              justifyContent: "space-between",
              paddingHorizontal: 12,
              borderRadius: 8,
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "500",
                fontSize: 14,
                lineHeight: 19,
              }}
            >
              Download invoice template
            </Text>
            <Feather name="download" size={18} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <ProfileCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MerchantProfile;

const styles = StyleSheet.create({});
