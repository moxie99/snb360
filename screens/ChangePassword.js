import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as React from "react";
import ProfileHeader from "../components/ProfileHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import InputComponent from "../components/InputComponent";
import Button from "../components/Button";
import { AuthContext } from "../context/AuthContext";
const ChangePassword = ({ navigation }) => {
  const [oldPassword, setOldPassword] = React.useState("");
  const [resetPassword, setResetPassword] = React.useState("");
  const [retypedPassword, setRetypedPassword] = React.useState("");
  const [pwordError, setPwordError] = React.useState("");

  const { password, updatePassword, userId, userToken } =
    React.useContext(AuthContext);

  async function updateProfilePassword() {
    const data = await updatePassword(
      userId,
      resetPassword,
      retypedPassword,
      oldPassword,
      userToken
    );
    console.log(data);
  }

  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View>
        <ProfileHeader title="Change Pasword" />
      </View>
      <View style={{ marginTop: "8%" }}>
        <Text style={{ marginLeft: "10%", paddingBottom: "3%" }}>
          Enter Password
        </Text>
        <Text
          style={{
            color: "red",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          {pwordError}
        </Text>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <InputComponent
            entry={oldPassword}
            setEntry={setOldPassword}
            value={password}
            onChangeText={(value) => setOldPassword(value)}
            textSecure={true}
          />
        </View>
      </View>

      <View>
        <Text style={{ marginLeft: "10%", paddingBottom: "3%" }}>
          Enter New Password
        </Text>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <InputComponent
            entry={resetPassword}
            setEntry={setResetPassword}
            value={resetPassword}
            onChangeText={(value) => setResetPassword(value)}
            textSecure={true}
          />
        </View>
      </View>
      <View>
        <Text style={{ marginLeft: "10%", paddingBottom: "3%" }}>
          Re-type Password
        </Text>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <InputComponent
            entry={retypedPassword}
            setEntry={setRetypedPassword}
            value={retypedPassword}
            onChangeText={(value) => setRetypedPassword(value)}
            textSecure={true}
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
          title="Change Password"
          textColor="white"
          bgColor="#1F4287"
          onPress={async () => {
            await updateProfilePassword();
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

export default ChangePassword;

const styles = StyleSheet.create({});
