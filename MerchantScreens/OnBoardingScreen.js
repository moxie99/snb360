import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputComponent from "../components/InputComponent";
import Button from "../components/Button";
import * as ImagePicker from "expo-image-picker";
import { AuthContext } from "../context/AuthContext";
const height = Dimensions.get("window").height * 0.8;
const OnBoardingScreen = ({ navigation }) => {
  const { userToken } = React.useContext(AuthContext);
  const [image, setImage] = React.useState(null);
  const [businessName, setBusinessName] = React.useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  console.log(image);
  console.log(businessName);
  const uploadImage = async () => {
    // Check if any file is selected or not
    if (image != null) {
      // If file selected then create FormData
      const fileToUpload = image;
      const name = businessName.trim();
      console.log({ fileToUpload, name });
      const data = new FormData();
      data.append("Uploadfile", fileToUpload);
      data.append("Content-Disposition", "form-data");
      data.append("name", name);
      data.append("filename", fileToUpload);
      data.append("Content-Type", "application/octet-stream");
      // Please change file upload URL
      let res = await fetch(
        "https://mbiapi.snb366.com.ng/api/snb360/Uploadmerchprofilepic",
        {
          method: "post",
          body: data,
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + userToken,
          },
        }
      );
      let responseJson = await res.json();
      console.log(responseJson);
      if (responseJson.status == 1) {
        alert("Upload Successful");
      }
    } else {
      // If no file selected the show alert
      alert("Please Select File first");
    }
  };

  const navigateToLocation = () => {
    navigation.navigate("merchantLocation");
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <View
        style={{ paddingTop: "5%", paddingBottom: "10%", paddingLeft: "3%" }}
      >
        <Text>Register as a Merchant</Text>
      </View>
      <View
        style={{
          paddingBottom: "1%",
          paddingLeft: "3%",
        }}
      >
        <Text>Business/Shop Name</Text>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <InputComponent
          entry={businessName}
          setEntry={setBusinessName}
          value={businessName}
          onChangeText={(value) => setBusinessName(value)}
        />
      </View>
      <View
        style={{ paddingTop: "2%", paddingBottom: "2%", paddingLeft: "3%" }}
      >
        <Text>Upload your business logo or any profile picture</Text>
      </View>
      <View
        style={{
          width: "90%",
          height: 108,
          borderRadius: 16,
          borderColor: "#D2D9E7",
          borderWidth: 1,
          borderStyle: "solid",
          marginLeft: "5%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={pickImage}
        >
          <Image
            style={{ width: 24, height: 24, resizeMode: "cover" }}
            source={require("../assets/add_photo_alternate.png")}
          />
          <Text>Add a Photo</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          margin: "20%",
        }}
      >
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
      </View>
      <View
        style={{
          position: "absolute",
          top: height,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ paddingBottom: "2%" }}>
          <Button
            title="Next"
            textColor="white"
            bgColor="#1F4287"
            onPress={async () => {
              uploadImage();
              navigateToLocation();
            }}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={{ fontWeight: "600", fontSize: 16, lineHeight: 19 }}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({});
