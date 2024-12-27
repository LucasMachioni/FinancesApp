import React from "react";
import {
  ImageBackground,
  View,
  ScrollView,
  Box,
  Button,
  ButtonText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  VStack,
  Alert,
  AlertIcon,
  AlertText,
  InfoIcon,
} from "@gluestack-ui/themed";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../../routes/Stack.routes";

export default function RecoverPassword() {
  type LoginScreenNavigationProp = StackNavigationProp<StackParamList>;

  const navigation = useNavigation<LoginScreenNavigationProp>();

  const navToLogin = () => {
    navigation.navigate("login");
  };

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View flex={1} h="100%" w="100%">
        <ImageBackground
          justifyContent="center"
          alignItems="center"
          flex={1}
          source={require("../../../assets/backgroundImage.jpg")}
        >
          <>
            <VStack>
              <Box
                bg="$textDark950"
                w={"$80"}
                h={"$96"}
                paddingTop={"$10"}
                alignItems="center"
                justifyContent="flex-end"
                flexDirection="column"
                gap={"$12"}
                borderRadius={"$3xl"}
                padding={4}
                paddingBottom={"$16"}
              >
                <Alert mx="$2.5" action="info" variant="solid">
                  <AlertIcon as={InfoIcon} mr="$3" />
                  <AlertText>
                    Informe seu e-mail para enviarmos um link de recuperação de
                    senha!
                  </AlertText>
                </Alert>

                <Box>
                  <FormControlLabel>
                    <FormControlLabelText color="white">
                      Digite o email cadastrado
                    </FormControlLabelText>
                  </FormControlLabel>
                  <Input bgColor="$white" borderColor="$yellow300" w={"85%"}>
                    <InputField
                      type="password"
                      placeholder="Email@example.com"
                    />
                  </Input>
                </Box>

                <Button
                  size="lg"
                  variant="outline"
                  action="primary"
                  isDisabled={false}
                  isFocusVisible={true}
                  borderColor="$yellow300"
                >
                  <ButtonText color="white">Enviar </ButtonText>
                  <AntDesign name="link" size={22} color="white" />
                </Button>
              </Box>
              <Button
                size="sm"
                variant="link"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                onPress={navToLogin}
              >
                <ButtonText>Lembrei minha senha!</ButtonText>
              </Button>
            </VStack>
          </>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}
