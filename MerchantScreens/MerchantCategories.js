import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionic from "react-native-vector-icons/Ionicons";
import Footer from "../components/Footer";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const height = Dimensions.get("window").height * 0.8;
const MerchantCategories = ({ navigation }) => {
  const { userToken, getCategory } = React.useContext(AuthContext);
  const [stateLoc, setStateLoc] = React.useState("");
  const [statesIdLoc, setStatesIdLoc] = React.useState("");
  const [cityLoc, setCityLoc] = React.useState("");
  const [landmarkLoc, setLandmarkLoc] = React.useState("");
  const [shopAdressLoc, setShopAdressLoc] = React.useState("");

  React.useEffect(function () {
    let isMounted = true;
    if (isMounted) {
      getCategory(userToken);
      getMerchantLocationDetails();
    }
    return () => {
      isMounted = false;
    };
  }, []);
  const navigateToEnterPhoneNumber = () => {
    navigation.navigate("EnterPhoneNumber");
  };
  const getMerchantLocationDetails = async () => {
    try {
      // const statesId = JSON.parse(await AsyncStorage.getItem("stateId"));
      // setStatesIdLoc(statesId);
      const city = await AsyncStorage.getItem("locationCity");
      setCityLoc(city);
      const landmark = await AsyncStorage.getItem("landmark");
      setLandmarkLoc(landmark);
      const shopAddress = await AsyncStorage.getItem("shopAddress");
      setShopAdressLoc(shopAddress);
      const states = await AsyncStorage.getItem("locationState");
      setStateLoc(states);
    } catch (error) {
      console.log(error);
    }
  };

  console.log({ stateLoc, statesIdLoc, cityLoc, landmarkLoc, shopAdressLoc });

  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View
        style={{ paddingTop: "5%", paddingBottom: "10%", paddingLeft: "3%" }}
      >
        <Text>Register as a Merchant</Text>
      </View>
      <View
        style={{ paddingTop: "2%", paddingBottom: "2%", paddingLeft: "3%" }}
      >
        <Text>Choose category of items you sell</Text>
      </View>
      <View
        style={{ paddingTop: "2%", paddingBottom: "2%", paddingLeft: "3%" }}
      >
        <Text>Add at least one category</Text>
      </View>
      <View
        style={{ paddingTop: "3%", paddingBottom: "5%", paddingLeft: "3%" }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.12)",
            width: 122,
            height: 32,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            borderRadius: 16,
            borderSize: 1,
            borderStyle: "solid",
            borderColor: "rgba(0, 0, 0, 0.12)",
            padding: 4,
          }}
        >
          <Text>Add Category</Text>
          <Ionic name="add" color="#F95F68" size={24} />
        </TouchableOpacity>
      </View>

      <View>
        <Text>{JSON.parse(AsyncStorage.getItem("stateId"))}</Text>
      </View>
      <View
        style={{
          position: "absolute",
          position: "absolute",
          top: height,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Footer title="Next" onPress={navigateToEnterPhoneNumber} />
      </View>
    </SafeAreaView>
  );
};

export default MerchantCategories;

const styles = StyleSheet.create({});
