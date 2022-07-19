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
  const statesAvailable = [];
  let index = 0;
  function getStates() {
    api
      .get("/getstates")
      .then((response) => {
        _updateStates([...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  _states.map((state) => statesAvailable.push(state.states));
  // =========getting cities==============
  let locationState = selectedState;
  let locationCity = selectedCity;
  console.log(locationState);
  console.log(locationCity);
  for (let i = 0; i < statesAvailable.length; i++) {
    if (locationState === statesAvailable[i]) {
      index = i + 1;
    }
  }
  function getCities() {
    api
      .post("/locations", { Tranidtype: 26 })
      .then((response) => {
        _updateCities([...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const citiesAvailable = [];
  for (let i = 0; i < _cities.length; i++) {
    citiesAvailable.push(_cities[i].local_gov_area);
  }
  // ======useEffect hook for both states and cities
  React.useEffect(function () {
    let isMounted = true;
    if (isMounted) {
      getStates();
      getCities();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const navigation = useNavigation();
  const register = () => {
    if (selectedState !== null && selectedCity !== null) {
      navigation.navigate("ContinueToOnBoard", {
        uniqueid: index,
        location: selectedState,
        states: selectedCity,
      });
    } else if (selectedState === null) {
      setStateWarning("Please Select a State!!");
    } else if (selectedCity === null) {
      setCityWarning("Please select a City!!");
    } else if (selectedState === null && selectedCity === null) {
      setStateWarning("Please Select a State!!");
      setCityWarning("Please select a City!!");
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
            data={statesAvailable}
            setSelected={setSelectedState}
            dropdownItemStyles={{ marginHorizontal: 10, marginVertical: 3 }}
            placeholder="Select state"
          />
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ color: "red" }}>{stateWarning}</Text>
        </View>
        <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <SelectList
            data={citiesAvailable}
            setSelected={setSelectedCities}
            dropdownItemStyles={{ marginHorizontal: 10, marginVertical: 3 }}
            placeholder="City"
          />
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ color: "red" }}>{cityWarning}</Text>
        </View>
        <View
          style={{ position: "absolute", bottom: "10%", paddingLeft: "10%" }}
        >
          <View>
            <Button
              textColor="white"
              bgColor="#1F4287"
              title="Next"
              onPress={register}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StartWithLocationScreen;

const styles = StyleSheet.create({});
