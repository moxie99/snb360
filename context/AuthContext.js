import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext } from "react";
import api from "../api-config/config";
import qs from "qs";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [userToken, setUserToken] = React.useState(null);
  const [userForgetPasswordToken, setUserForgetPasswordToken] =
    React.useState(null);

  let userToken1;
  const loginToken = (grant_type, email, password) => {
    axios({
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
    })
      .then((response) => {
        // login(email, password);
        // userToken1 = response.data.access_token;
        setUserToken(response.data.access_token);
        console.log(response.data.access_token);
        // login(email, password);
      })
      .catch((error) => console.log(error));
  };

  const login = (email, password) => {
    axios({
      method: "POST",
      url: "https://mbiapi.snb366.com.ng/api/snb360/Logins",
      data: {
        UserName: email,
        password: password,
      },
      header: {
        Authorization: "Bearer" + userToken,
        "Content-type": "application/json",
      },
    })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
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
      header: {
        Authorization: "Bearer" + userToken1,
        "Content-type": "application/json",
      },
    })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);

    AsyncStorage.removeItem("userToken");
    console.log(userToken);
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    let userToken;
    try {
      // setIsLoading(true);
      let userToken = await AsyncStorage.getItem("userToken");
      setUserToken(userToken);
      setIsLoading(false);
    } catch (e) {
      console.log(`is loggedin: ${e.message}`);
    }
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
