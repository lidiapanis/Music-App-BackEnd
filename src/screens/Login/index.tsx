import { Flex, Heading, Input } from "native-base";
import { Alert } from "react-native";
import { useContext, useState } from "react";
import Button from "../../components/Button";
import UserContext from "../../context/user";
import { login } from "../../services/auth";

export default function Login() {
  const userData = useContext(UserContext);

  userData.user?.token;
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    login({
      username: username,
      password: password,
    })
      .then(function (response) {
        userData.setUser({
          name: "Lidia",
          email: "teste@teste.com",
          token: response.data.token,
        });
      })
      .catch(function (error) {
        console.error("error", error);
        Alert.alert("Error", "Usuário ou Senha inválido. Verifique e tente novamente");
      });
  };

  return (
    <Flex p={5} flex={1} justifyContent="center" alignItems="center">
      <Heading>Login</Heading>
      <Input mt={2} onChangeText={(value) => setUsername(value)} />
      <Input mt={2} onChangeText={(value) => setPassword(value)} />
      <Flex width="100%">
        <Button content="Entrar" handleClick={handleLogin} />
      </Flex>
    </Flex>
  );
}