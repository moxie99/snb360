import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SelectList from "react-native-dropdown-select-list";
import InputComponent from "../components/InputComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Footer from "../components/Footer";
import api from "../api-config/api_config";

const height = Dimensions.get("window").height * 0.8;
const LocationRegistration = ({ navigation }) => {
  const [selectedState, setSelectedState] = React.useState(null);
  const [selectedCity, setSelectedCities] = React.useState(null);
  const [_states, _updateStates] = React.useState([]);
  const [_cities, _updateCities] = React.useState([]);
  const [stateWarning, setStateWarning] = React.useState(null);
  const [cityWarning, setCityWarning] = React.useState(null);
  const [shopAddress, setShopAddress] = React.useState(null);
  const [landmark, setLandmark] = React.useState(null);

  // ========getting states array============
  let index;
  function getStates() {
    api
      .get("/getstates")
      .then((response) => {
        let newArray = response.data.map((item) => {
          return { key: item.state_id, value: item.states };
        });
        _updateStates(newArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // ==========getting cities function =============
  function getCities() {
    api
      .post("/locations", { Tranidtype: index })
      .then((response) => {
        let newArray = response.data.map((item) => {
          return { key: item.ids, value: item.local_gov_area };
        });
        _updateCities(newArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  React.useEffect(function () {
    let isMounted = true;
    if (isMounted) {
      getStates();
      setMerchantLocationDetails();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  let state = "";
  let city = "";

  let states = _states;
  let citiesToPick = _cities;
  states.map((_state, i) => {
    if (i + 1 === selectedState) {
      state = _state.value;
    }
  });
  citiesToPick.map((_city, i) => {
    if (i + 1 === selectedCity) {
      city = _city.value;
    }
  });
  const navigateToCategory = () => {
    navigation.navigate("MerchantCategories");
  };

  const setMerchantLocationDetails = async () => {
    try {
      await AsyncStorage.setItem("stateId", JSON.stringify(selectedState));
      await AsyncStorage.setItem("locationCity", city);
      await AsyncStorage.setItem("landmark", landmark);
      await AsyncStorage.setItem("shopAddress", shopAddress);
      await AsyncStorage.setItem("locationState", state);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View
        style={{ paddingTop: "5%", paddingBottom: "10%", paddingLeft: "3%" }}
      >
        <Text>Register as a Merchant</Text>
      </View>
      <View style={{ paddingLeft: "3%" }}>
        <Text>Where is your shop located?</Text>
      </View>
      <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
        <SelectList
          setSelected={setSelectedState}
          data={_states}
          onSelect={() => {
            index = selectedState.toString();
            getCities();
          }}
          dropdownItemStyles={{ marginHorizontal: 10, marginVertical: 3 }}
          placeholder="Select state"
        />
      </View>
      <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
        <SelectList
          setSelected={setSelectedCities}
          data={_cities}
          onSelect={() => {}}
          dropdownItemStyles={{ marginHorizontal: 10, marginVertical: 3 }}
          placeholder="Select City"
        />
      </View>
      <View style={{ paddingLeft: "3%", paddingBottom: "5%" }}>
        <Text>Note: Only merchant in the above listed cities can register</Text>
      </View>
      <View style={{ paddingLeft: "3%", paddingBottom: "1%" }}>
        <Text>Shop Address</Text>
      </View>
      <View>
        <TextInput
          placeholder="Enter Address"
          style={{
            width: "90%",
            marginLeft: "5%",
            height: 76,
            backgroundColor: "#E2E9F6",
            borderRadius: 16,
            padding: 10,
          }}
          value={shopAddress}
          onChangeText={(value) => {
            setShopAddress(value);
          }}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "5%",
        }}
      >
        <InputComponent
          placeholder="Nearest landmark (optional)"
          entry={landmark}
          setEntry={setLandmark}
          value={landmark}
          onChangeText={(value) => setLandmark(value)}
        />
      </View>
      <View
        style={{
          position: "absolute",
          top: height,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Footer
          title="Next"
          onPress={() => {
            navigateToCategory();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default LocationRegistration;
