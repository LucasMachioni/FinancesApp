import React from "react";
import {
  Text,
  ImageBackground,
  View,
  ScrollView,
  Box,
} from "@gluestack-ui/themed";
import LoginContainer from "./LoginContainer";

export default function Background() {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View flex={1} h="100%" w="100%">
        <ImageBackground
          justifyContent="center"
          alignItems="center"
          flex={1}
          source={require("../../assets/backgroundImage.jpg")}
        >
          <LoginContainer />
        </ImageBackground>
      </View>
    </ScrollView>
  );
}
