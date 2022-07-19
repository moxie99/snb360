import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const width = Dimensions.get("window").width * 0.9;
const InputComponent = ({ placeholder, icon, entry, setEntry, textSecure }) => {
  return (
    <View>
      <StatusBar style="dark" />
      <View style={[{ alignItems: "center" }, styles.container]}>
        <TextInput
          style={styles.inputField}
          placeholder={placeholder}
          underlineColorAndroid="transparent"
          value={entry}
          onChangeText={(value) => setEntry(value)}
          secureTextEntry={textSecure}
          AutoCapitalize={false}
        />
        <MaterialCommunityIcons
          style={{ position: "absolute", right: "6%" }}
          name={icon}
          size={24}
          color="black"
        />
      </View>
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  inputField: {
    width: width,
    height: 48,
    backgroundColor: "#ECF1F8",
    color: "#000",
    borderRadius: 16,
    fontSize: 20,
    padding: 10,
    opacity: 0.9,
    fontWeight: "normal",
  },
  container: {
    flexDirection: "row",
    marginBottom: 30,
  },
});
