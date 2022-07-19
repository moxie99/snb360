import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function Footer({ title, onPress }) {
  const navigation = useNavigation();
  return (
    <View style={styles.consumerHeader}>
      <View style={styles.toolbar}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Entypo name="arrow-long-left" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={{
            backgroundColor: "#1F4287",
            borderRadius: 16,
            width: 164,
            height: 47,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={onPress}
        >
          <Text style={styles.topContainerTxt}>{title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
  },
  consumerHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  toolbarTxt: {
    color: "#21334F",
    fontSize: 14,
    fontFamily: "Manrope_400Regular",
  },
  topContainerTxt: {
    fontSize: 14,
    fontFamily: "NotoSans_700Bold",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    padding: 10,
  },
});

export default Footer;
