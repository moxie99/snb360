import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import Header from "../components/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import InputComponent from "../components/InputComponent";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
const LoginScreen = () => {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const { loginToken, login } = useContext(AuthContext);

  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header title="Create Account" path="StartWithLocation" />
        <View>
          <Text
            style={{
              color: "#a1a1a1",
              fontSize: 40,
              paddingTop: 20,
              fontFamily: "NotoSans_400Regular",
              paddingLeft: 20,
            }}
          >
            Login
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: "NotoSans_400Regular",
              fontSize: 16,
              paddingTop: 10,
              color: "#000",
              paddingLeft: 20,
            }}
          >
            Welcome back to your market place...
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 20,
          }}
        >
          <TouchableOpacity style={styles.gmailLoginBtn}>
            <MaterialCommunityIcons name="gmail" size={24} color="#F44336" />
            <Text
              style={{
                fontFamily: "NotoSans_400Regular",
                fontSize: 14,
                fontWeight: "bold",
                lineHeight: 19,
                color: "#1F4287",
                paddingLeft: 15,
              }}
            >
              Login with Google
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", marginTop: 30 }}>
          <InputComponent
            placeholder="@ Email"
            entry={email}
            setEntry={setEmail}
            value={email}
            onChangeText={(value) => setEmail(value)}
            textSecure={false}
          />
          <InputComponent
            placeholder="🔒 Password"
            icon="eye-off"
            entry={password}
            setEntry={setPassword}
            value={password}
            onChange={(value) => setPassword(value)}
            textSecure={true}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text
              style={{
                position: "absolute",
                right: "10%",
                fontSize: 14,
                color: "#000",
                lineHeight: 19,
                fontFamily: "NotoSans_400Regular",
              }}
            >
              Recover Password
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 60, alignItems: "center" }}>
          <Button
            textColor="white"
            bgColor="#1F4287"
            title="Login"
            brColor="white"
            onPress={() => {
              // login("password", email, password);
              loginToken("password", email, password);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    paddingLeft: 10,
  },
  gmailLoginBtn: {
    width: 328,
    height: 48,
    borderRadius: 16,
    borderColor: "#1F4287",
    borderWidth: 2,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
