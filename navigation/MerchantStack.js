import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomNavMerchant from "./BottomNavMerchant";
const Stack = createNativeStackNavigator();
const MerchantStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomNav" component={BottomNavMerchant} />
    </Stack.Navigator>
  );
};

export default MerchantStack;
