import { Flex, Heading, Input, Button as NativeBaseButton } from "native-base";
import { useContext, useState } from "react";
import Button from "../../components/Button";
import UserContext from "../../context/user";
import { useNavigation } from "@react-navigation/native";
import { Alert } from 'react-native';
import { register } from "../../services/auth";

export default function Register() {
  const userData = useContext(UserContext);

  const navigator = useNavigation();

  userData.user?.token;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = () => {
  
    register({
      username: username,
      password: password,
    })
      .then(function (response) {
        Alert.alert("Success", "Cadastro efetuado com sucesso. Faça login para continuar.");
      })
      .catch(function (error) {
        console.error("error", error);
        Alert.alert("Error", "Erro ao cadastrar. Verifique se suas informações estão corretas e tente novamente.");
      });
  };
  return (
    <Flex p={5} flex={1} justifyContent="center" alignItems="center">
      <Heading>Cadastre-se</Heading>
      <Input mt={2} onChangeText={(value) => setUsername(value)} />
      <Input mt={2} onChangeText={(value) => setPassword(value)} />
      <Flex width="100%">
        <Button content="Register" handleClick={handleRegister} />
        <NativeBaseButton onPress={() => navigator.navigate('Reset')}>
          Esqueci a minha senha
        </NativeBaseButton>
      </Flex>
    </Flex>
  );
}