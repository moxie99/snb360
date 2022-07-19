import React from "react";
import AppNavigator from "./navigation/AppNavigation";
import { AuthProvider } from "./context/AuthContext";
import ProfileStartScreen from "./screens/ProfileStartScreen";

const App = () => {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
};

export default App;
