import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import SelectList from "react-native-dropdown-select-list";
import api from "../api-config/api_config";
import { useNavigation } from "@react-navigation/native";

const StartWithLocationScreen = () => {
  const [selectedState, setSelectedState] = React.useState(null);
  const [selectedCity, setSelectedCities] = React.useState(null);
  const [_states, _updateStates] = React.useState([]);
  const [_cities, _updateCities] = React.useState([]);
  const [stateWarning, setStateWarning] = React.useState(null);
  const [cityWarning, setCityWarning] = React.useState(null);

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
  const navigation = useNavigation();
  const register = () => {
    if (
      selectedState !== null &&
      selectedCity !== null &&
      selectedState !== 1 &&
      selectedCity !== null
    ) {
      navigation.navigate("ContinueToOnBoard", {
        uniqueid: selectedState,
        states: state,
        location: city,
      });
    } else if (selectedState === null || selectedState === 1) {
      setStateWarning("Please Select a State!!");
    } else if (selectedCity === null || selectedCity === 1) {
      setCityWarning("Please select a City!!");
      return;
    } else if (
      selectedState === null &&
      selectedCity === null &&
      selectedState === 1 &&
      selectedCity === 1
    ) {
      setStateWarning("Please Select a State!!");
      setCityWarning("Please select a City!!");
      return;
    } else if (selectedState !== 1 && selectedCity === 1) {
      setCityWarning("Please select a City!!");
    } else if (selectedState === null && selectedCity === null) {
      return;
    }
  };
  return (
    <SafeAreaView
      style={{
        height: "100%",
        width: "100%",
        // alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <ScrollView
        contentContainerStyle={{
          height: "100%",
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <View>
          <Header title="Login" path="Login" />
        </View>
        <View style={{ paddingLeft: 30, marginTop: 30 }}>
          <Text
            style={{
              fontFamily: "NotoSans_400Regular",
              color: "rgba(0, 0, 0, 1)",
              fontSize: 16,
            }}
          >
            What’s your location?
          </Text>
        </View>
        <View style={{ paddingLeft: 30, marginTop: 20 }}>
          <Text
            style={{
              fontFamily: "NotoSans_400Regular",
              color: "rgba(0, 0, 0, 0.5)",
              fontSize: 14,
            }}
          >
            Service currently available in Nigeria only
          </Text>
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
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ color: "red" }}>{stateWarning}</Text>
        </View>
        <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <SelectList
            setSelected={setSelectedCities}
            data={_cities}
            onSelect={() => {}}
            dropdownItemStyles={{ marginHorizontal: 10, marginVertical: 3 }}
            placeholder="Select City"
          />
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ color: "red" }}>{cityWarning}</Text>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: "10%",
            right: "5%",
            left: "5%",
          }}
        >
          <Button
            textColor="white"
            bgColor="#1F4287"
            title="Next"
            onPress={register}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StartWithLocationScreen;

const styles = StyleSheet.create({});
