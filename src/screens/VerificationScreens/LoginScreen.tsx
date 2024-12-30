import React from "react";
import { View, Text, Box, Image, AlertCircleIcon, FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlHelper, FormControlHelperText, FormControlLabel, FormControlLabelText, Input, InputField } from "@gluestack-ui/themed";

export default function Login() {
  return (
    <View flex={1}>
      <Box flex={2} alignItems="center" justifyContent="center" top={"$16"} w={"100%"}>
        <Box bottom={"$56"}>
          <Image
            size="md"
            source={require("../../../assets/coin-bag.png")}
            alt="Ícone de moedas"
          />
        </Box>
        <Box bottom={"$56"}>
          <Text fontSize={24} fontWeight={"$bold"} color="black">
            Finances
          </Text>
        </Box>
        <Box bottom={"$32"}>
          <Text fontSize={20} fontWeight={"$bold"} color="black">
            Entrar
          </Text>
        </Box>
        <Box bottom={"16%"}>
          <Text fontSize={14} color="black">
            Insira seus dados para acessar sua {"\n                           "}
            conta!
          </Text>
          
       
        </Box>       
          <FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={true} >
            <FormControlLabel mb='$1' w={272}>
              <FormControlLabelText>E-mail</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                type="text"
                defaultValue=""
                placeholder="E-mail@example.com"
              />
            </Input>
          </FormControl>
      </Box>
      

      
    </View>
  );
}
