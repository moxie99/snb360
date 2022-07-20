import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import EntryFlow from "../EntryFlow";
import Onboarding from "../components/Onboarding";
import ForgotPassword from "../screens/ForgotPassword";
import VerifyAccount from "../screens/VerifyAccount";
import SignUp from "../screens/SignUp";
import ContinueToOnBoard from "../screens/ContinueToOnBoard";
import NewPasswordScreen from "../screens/NewPasswordScreen";
import StartWithLocationScreen from "../screens/StartWithLocationScreen";
import VerifyAccountChangePassword from "../screens/VerifyAccountChangePassword";
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Onboarding"
    >
      <Stack.Screen name="EntryFlow" component={EntryFlow} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      <Stack.Screen
        name="StartWithLocation"
        component={StartWithLocationScreen}
      />
      <Stack.Screen name="ContinueToOnBoard" component={ContinueToOnBoard} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="VerifyAccount" component={VerifyAccount} />
      <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
      <Stack.Screen
        name="VerifyChangePasswordScreen"
        component={VerifyAccountChangePassword}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
