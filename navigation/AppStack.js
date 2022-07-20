import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomNav from "./BottomNav";
import EditProfileScreen from "../screens/EditProfileScreen";
import OrderScreen from "../screens/OrderScreen";
import RequestsScreen from "../screens/RequestsScreen";
import SavedItemsScreen from "../screens/SavedItemsScreen";
import EditSettingScreen from "../screens/EditSettingScreen";
import ChangePasswordScreen from "../screens/ChangePassword";
import DeliveryInfoEditScreen from "../screens/DeliveryInfoEditScreen";
import OnBoardingScreen from "../MerchantScreens/OnBoardingScreen";
import LocationRegistration from "../MerchantScreens/LocationRegistration";
import MerchantCategories from "../MerchantScreens/MerchantCategories";
import EnterPhoneNumberScreen from "../MerchantScreens/EnterPhoneNumberScreen";
import VerifyNumberScreen from "../MerchantScreens/VerifyNumberScreen";
import BankDetailsEntry from "../MerchantScreens/BankDetailsEntry";
import MerchantProfile from "../MerchantScreens/MerchantProfile";
import ProfileCards from "../components/ProfileCards";
import MerchantsRegisteredSuccessful from "../MerchantScreens/MerchantsRegisteredSuccessful";
import MakeWithdrawalScreen from "../MerchantScreens/MakeWithdrawalScreen";
import MakeWithdrawalScreenWithAccountDetails from "../MerchantScreens/MakeWithdrawalScreenWithAccountDetails";
import MerchantEnterBankDetailsLater from "../MerchantScreens/MerchantEnterBankDetailsLater";
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen name="BottomNav" component={BottomNav} />
      <Stack.Screen name="Edit" component={EditProfileScreen} />
      <Stack.Screen name="Orders" component={OrderScreen} />
      <Stack.Screen name="Requests" component={RequestsScreen} />
      <Stack.Screen name="SavedItems" component={SavedItemsScreen} />
      <Stack.Screen name="EditSettings" component={EditSettingScreen} />
      <Stack.Screen name="changePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="DeliveryInfo" component={DeliveryInfoEditScreen} />
      <Stack.Screen name="merchantOnboarding" component={OnBoardingScreen} />
      <Stack.Screen name="merchantLocation" component={LocationRegistration} />
      <Stack.Screen name="MerchantCategories" component={MerchantCategories} />
      <Stack.Screen
        name="EnterPhoneNumber"
        component={EnterPhoneNumberScreen}
      />
      <Stack.Screen name="VerifyNumber" component={VerifyNumberScreen} />
      <Stack.Screen name="BankDetails" component={BankDetailsEntry} />
      <Stack.Screen name="MerchantsProfile" component={MerchantProfile} />
      <Stack.Screen name="ProfileCard" component={ProfileCards} />
      <Stack.Screen
        name="MerchantCongratsScreen"
        component={MerchantsRegisteredSuccessful}
      />
      <Stack.Screen name="Withdrawal" component={MakeWithdrawalScreen} />
      <Stack.Screen
        name="MakeWithDrawal"
        component={MakeWithdrawalScreenWithAccountDetails}
      />
      <Stack.Screen
        name="MerchantEnterBankDetailsLater"
        component={MerchantEnterBankDetailsLater}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
