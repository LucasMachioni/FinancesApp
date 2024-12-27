import React from "react";
import {
  ImageBackground,
  View,
  ScrollView,
} from "@gluestack-ui/themed";
import LoginContainer from "../../components/LoginContainer";

export default function Login() {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View flex={1} h="100%" w="100%">
        <ImageBackground
          justifyContent="center"
          alignItems="center"
          flex={1}
          source={require("../../../assets/backgroundImage.jpg")}
        >
          <LoginContainer />
        </ImageBackground>
      </View>
    </ScrollView>
  );
}
