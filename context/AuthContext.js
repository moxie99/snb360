import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext } from "react";
import api from "../api-config/config";
import qs from "qs";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [userToken, setUserToken] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [name, setName] = React.useState("");
  const [stateLocation, setStateLocation] = React.useState("");
  const [locationsid, setLocationsid] = React.useState("");
  const [roles, setRoles] = React.useState(0);
  const [locations, setLocations] = React.useState("");
  const [userId, setUserId] = React.useState(0);
  const [deliveryNames, setDeliveryNames] = React.useState(null);
  const [phoneNo, setPhoneNo] = React.useState(null);
  const [location, setLocation] = React.useState(null);
  const [shippingAddres, setShippingAddres] = React.useState(null);

  const loginToken = async (grant_type, email, password) => {
    setEmail(email);
    setPassword(password);
    try {
      const response = await axios({
        method: "POST",
        url: "https://mbiapi.snb366.com.ng/token",
        data: qs.stringify({
          grant_type: grant_type,
          UserName: email,
          password: password,
        }),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
      });
      AsyncStorage.setItem("userToken", response.data.access_token);
      AsyncStorage.setItem("email", email);
      AsyncStorage.setItem("password", password);
      setUserToken(response.data.access_token);
      return response.data.access_token;
    } catch (error) {
      return console.log(error);
    }
  };

  const login = async (email, password, token) => {
    console.log({ email, password, token });

    try {
      const response = await axios({
        method: "POST",
        url: "https://mbiapi.snb366.com.ng/api/snb360/Logins",
        data: {
          UserName: email,
          password: password,
        },
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });

      AsyncStorage.setItem(
        "deliveryName",
        JSON.stringify(response.data[0].delivery_name)
      );
      AsyncStorage.setItem(
        "phoneNo",
        JSON.stringify(response.data[0].delivery_phone)
      );
      AsyncStorage.setItem("city", JSON.stringify(response.data[0].locations));
      AsyncStorage.setItem(
        "locationsid",
        JSON.stringify(response.data[0].locationsid)
      );
      AsyncStorage.setItem("name", JSON.stringify(response.data[0].name));
      AsyncStorage.setItem("roles", JSON.stringify(response.data[0].roles));
      AsyncStorage.setItem(
        "shiping_address",
        JSON.stringify(response.data[0].shiping_address)
      );
      AsyncStorage.setItem("state", JSON.stringify(response.data[0].state));
      AsyncStorage.setItem("userid", JSON.stringify(response.data[0].userid));
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  };

  const merchantPhoneNumber = async (uid, phoneNumber, token) => {
    console.log("====================================");
    console.log({ uid, phoneNumber, token });
    console.log("====================================");
    /**
    
    "data": "Check your phone for verification code",
    */
    try {
      const response = await axios({
        method: "POST",
        url: "https://mbiapi.snb366.com.ng/api/snb360/sendotpcodemerchant",
        data: {
          Uid: uid,
          phones: phoneNumber,
        },
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const updatePassword = async (
    userId,
    resetPassword,
    retypedPassword,
    oldPassword,
    token
  ) => {
    console.log({ userId, resetPassword, retypedPassword, oldPassword, token });

    try {
      const response = await axios({
        method: "POST",
        url: "https://mbiapi.snb366.com.ng/api/snb360/Profilepasswordupdate",
        data: {
          UID: userId,
          password: resetPassword,
          confirmpassword: retypedPassword,
          oldpassword: oldPassword,
        },
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  };

  const getCategory = async (token) => {
    console.log(token);
    try {
      const response = await axios({
        method: "GET",
        url: "https://mbiapi.snb366.com.ng/api/snb360/getproductmaincategory",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      console.log(response);
    } catch (error) {
      console.log("error is" + error);
    }
  };
  const forgetPasswordToken = (grant_type, email, password) => {
    axios({
      method: "POST",
      url: "https://mbiapi.snb366.com.ng/token",
      data: qs.stringify({
        grant_type: grant_type,
        UserName: email,
        password: password,
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      },
    })
      .then((response) =>
        setUserForgetPasswordToken(response.data.access_token)
      )
      .catch((error) => console.log(error));
  };

  const forgetPasswordLogin = (UID, password, confirmPassword) => {
    axios({
      method: "POST",
      url: "https://mbiapi.snb366.com.ng/api/snb360/Updatepassword",
      data: {
        UID: UID,
        password: password,
        confirmPassword: confirmPassword,
      },
      headers: {
        Authorization: "Bearer" + userToken1,
        "Content-type": "application/json",
      },
    })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  const updateProfile = async (
    userId,
    uniqueid,
    deliveryPhone,
    city,
    state,
    deliveryName,
    shippingAddress,
    token
  ) => {
    console.log("====================================");
    console.log({
      userId,
      uniqueid,
      deliveryPhone,
      city,
      state,
      deliveryName,
      shippingAddress,
      token,
    });
    console.log("====================================");

    try {
      const response = await axios({
        method: "POST",
        url: "https://mbiapi.snb366.com.ng/api/snb360/Updatedeliveryinfo",
        data: {
          UID: userId,
          uniqueid: uniqueid,
          Delivery_phone: deliveryPhone,
          locations: city,
          states: state,
          Delivery_name: deliveryName,
          Shiping_address: shippingAddress,
        },
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      console.log("====================================");
      console.log(response.data);
      console.log("====================================");
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem("userToken");
      let email = await AsyncStorage.getItem("email");
      let password = await AsyncStorage.getItem("password");
      let name = await AsyncStorage.getItem("name");
      let locations = await AsyncStorage.getItem("city");
      let state = await AsyncStorage.getItem("state");
      let locationsid = await AsyncStorage.getItem("locationsid");
      let roles = await AsyncStorage.getItem("roles");
      let userId = await AsyncStorage.getItem("userid");
      let deliveryName = await AsyncStorage.getItem("deliveryName");
      let phoneNo = await AsyncStorage.getItem("phoneNo");
      let city = await AsyncStorage.getItem("city");
      let shipping_Address = await AsyncStorage.getItem("shiping_address");

      if (email !== null && password !== null && userToken !== null) {
        setUserToken(userToken);
        setEmail(email);
        setPassword(password);
        setName(name);
        setLocations(locations);
        setStateLocation(state);
        setLocationsid(locationsid);
        setRoles(roles);
        setUserId(userId);
        setDeliveryNames(deliveryName);
        setPhoneNo(phoneNo);
        setLocation(city);
        setShippingAddres(shipping_Address);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(`is loggedin: ${e.message}`);
    }
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userToken");
    AsyncStorage.removeItem("email");
    AsyncStorage.removeItem("password");
    console.log(userToken);
    setIsLoading(false);
  };

  React.useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        loginToken,
        logout,
        isLoading,
        userToken,
        forgetPasswordToken,
        forgetPasswordLogin,
        email,
        password,
        name,
        locations,
        stateLocation,
        userId,
        locationsid,
        roles,
        updatePassword,
        updateProfile,
        getCategory,
        merchantPhoneNumber,
        deliveryNames,
        phoneNo,
        location,
        shippingAddres,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
