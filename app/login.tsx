import { View, TextInput, Button } from "react-native";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Toast from "react-native-toast-message";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (e) {
      Toast.show({
        type: "error",
        text1: "Login Failed",
      });
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
