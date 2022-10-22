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
import InputComponent from "../components/InputComponent";
import SelectList from "react-native-dropdown-select-list";
import Button from "../components/Button";
import api from "../api-config/api_config";
import { AuthContext } from "../context/AuthContext";

const DeliveryInfoEditScreen = ({ navigation }) => {
  // variables used to hold values
  let index;
  let state = "";
  let city = "";
  let uniqueid;
  const {
    userId,
    updateProfile,
    userToken,
    location,
    stateLocation,
    shippingAddres,
    deliveryNames,
  } = React.useContext(AuthContext);

  const [selectedState, setSelectedState] = React.useState(null);
  const [selectedCity, setSelectedCities] = React.useState(null);
  const [deliveryPhone, setDeliveryPhone] = React.useState(null);
  const [deliveryName, setDeliveryName] = React.useState(null);
  const [shippingAddress, setShippingAddress] = React.useState(null);
  const [_states, _updateStates] = React.useState([]);
  const [_cities, _updateCities] = React.useState([]);

  // ========getting states array============

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
  uniqueid = selectedState?.toString();
  async function updateUserProfile() {
    const data = await updateProfile(
      userId,
      uniqueid,
      deliveryPhone,
      city,
      state,
      deliveryName,
      shippingAddress,
      userToken
    );
    console.log(data);
  }
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View>
        <ProfileHeader title="Delivery Information" />
      </View>
      <View style={{ marginTop: "10%" }}>
        <Text style={{ paddingLeft: "5%", paddingBottom: "2%" }}>
          Full Name
        </Text>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <InputComponent
            entry={deliveryName}
            setEntry={setDeliveryName}
            value={deliveryName}
            onChangeText={(value) => setDeliveryName(value)}
            textSecure={false}
          />
        </View>
      </View>
      <View>
        <Text style={{ paddingLeft: "5%", paddingBottom: "2%" }}>
          Delivery Address
        </Text>
        <TextInput
          style={{
            height: 96,
            width: "90%",
            borderRadius: 16,
            borderStyle: "solid",
            borderColor: "red",
            backgroundColor: "#ECF1F8",
            marginLeft: "5%",
          }}
          value={shippingAddress}
          onChangeText={(value) => setShippingAddress(value)}
        />
      </View>
      <View
        style={{
          paddingHorizontal: "5%",
          paddingVertical: "5%",
        }}
      >
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
      <View
        style={{
          paddingHorizontal: "5%",
          paddingVertical: "5%",
        }}
      >
        <SelectList
          setSelected={setSelectedCities}
          data={_cities}
          onSelect={() => {}}
          dropdownItemStyles={{ marginHorizontal: 10, marginVertical: 3 }}
          placeholder="Select City"
        />
      </View>
      <View>
        <Text style={{ paddingLeft: "5%", paddingBottom: "2%" }}>Phone</Text>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <InputComponent
            entry={deliveryPhone}
            setEntry={setDeliveryPhone}
            value={deliveryPhone}
            onChangeText={(value) => setDeliveryPhone(value)}
            textSecure={false}
          />
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "5%",
        }}
      >
        <Button
          title="Save"
          textColor="white"
          bgColor="#1F4287"
          onPress={async () => {
            console.log({
              deliveryName,
              deliveryPhone,
              state,
              city,
              shippingAddress,
              selectedState,
              userId,
              userToken,
            });
            updateUserProfile();
          }}
        />
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DeliveryInfoEditScreen;

const styles = StyleSheet.create({});
