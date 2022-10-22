import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import BottomNav from "./BottomNav";
import MerchantStack from "./MerchantStack";

const AppNavigator = () => {
  const { isLoading, userToken, roles } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {userToken === null ? (
        <AuthStack />
      ) : userToken !== null && roles === "1" ? (
        <AppStack />
      ) : userToken !== null && roles === "2" ? (
        <AppStack />
      ) : null}
    </NavigationContainer>
  );
};

export default AppNavigator;
