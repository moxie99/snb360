import { Text, View, TouchableOpacity, Dimensions } from "react-native";
import React from "react";

const width = Dimensions.get("window").width * 0.9;
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
          width: width,
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
            fontFamily: "NotoSans_700Bold",
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
