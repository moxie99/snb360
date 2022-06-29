import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import Button from "./Button";
import Swiper from "react-native-swiper";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_400Regular_Italic,
  NotoSans_700Bold,
  NotoSans_800ExtraBold,
  NotoSans_900Black,
} from "@expo-google-fonts/noto-sans";

const Onboarding = ({ navigation }) => {
  const [appIsReady, setAppIsReady] = useState(false);
  let [fontsLoaded] = useFonts({
    NotoSans_400Regular,
    NotoSans_400Regular_Italic,
    NotoSans_700Bold,
    NotoSans_800ExtraBold,
    NotoSans_900Black,
  });

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await AsyncStorage.setItem("@viewedOnboarding ", "true");
      } catch (e) {
        console.log("error ", e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady && !fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "black",
      }}
    >
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../assets/headerIcon.png")}
            style={styles.headerIcon}
          />
          <Text style={styles.headerText}>SnB360</Text>
        </View>
        <View style={{ height: 266, width: "100%", marginTop: 20 }}>
          <Image source={require("../assets/img.gif")} style={styles.img} />
        </View>
        <Swiper
          autoplay={true}
          autoplayTimeout={3}
          showsButtons={false}
          showsPagination={false}
          autoplayDirection={true}
        >
          <View style={styles.slide}>
            <Text style={styles.slideText}>
              Browse through millions of items nationwide and enjoy competitive
              prices
            </Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.slideText}>
              Make a request for an item you are unable to find and have a
              merchant reach out to you
            </Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.slideText}>
              Create a virtual shop with your phone and sell to thousands of
              customer with ease
            </Text>
          </View>
        </Swiper>
        <View>
          <Button
            textColor="black"
            bgColor="white"
            title="Get Started"
            mgBottom={30}
            onPress={() => navigation.navigate("HomeScreen")}
          />
          <Button
            textColor="white"
            bgColor="black"
            title="Login"
            mgBottom={100}
            brColor="white"
            brWidth={1}
            brSolid="solid"
            onPress={() => navigation.navigate("LoginScreen")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    height: "100%",
    backgroundColor: "black",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  headerIcon: {
    height: 40,
    width: 40,
  },
  headerText: {
    color: "white",
    padding: 10,
    fontFamily: "NotoSans_400Regular",
    fontSize: 18,
  },
  img: {
    width: "100%",
    height: "100%",
  },

  btnLogIn: {
    width: 328,
    height: 48,
    backgroundColor: "black",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "white",
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 20,
  },
  slideText: {
    color: "white",
    textAlign: "center",
    fontFamily: "NotoSans_400Regular",
    fontSize: 18,
    lineHeight: 24.52,
  },
});
