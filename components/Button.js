import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function Button({
  title,
  textColor,
  bgColor,
  mgBottom,
  brColor,
  brWidth,
  brStyle,
  onPress,
}) {
  return (
    <View>
      <TouchableOpacity
        style={{
          height: 48,
          width: 328,
          backgroundColor: bgColor,
          marginBottom: mgBottom,
          borderRadius: 16,
          justifyContent: "center",
          alignItems: "center",
          borderColor: brColor,
          borderWidth: brWidth,
          borderStyle: brStyle,
        }}
        onPress={onPress}
      >
        <Text
          style={{
            color: textColor,
            fontSize: 14,
            fontFamily: "NotoSans_400Regular",
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
