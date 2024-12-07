import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";
import Loading from "../components/Loading";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Welcome</Text>

      <Image
        source={require("../../assets/images/signIn.png")}
        style={styles.image}
      />

      <CustomTextInput
        title="E-mail"
        isSecureTextEntry={false}
        placeholder="Enter your E-mail"
        value={email}
        onChangeText={setEmail}
      />

      <CustomTextInput
        title="Password"
        isSecureTextEntry={true}
        placeholder="Enter your Password"
        value={password}
        onChangeText={setPassword}
      />

      <CustomButton
        buttonText="Login"
        setWidth="80%"
        onPressed={() => setIsLoading(true)}
        buttonColor="lightblue"
        pressedButtonColor="gray"
      />

      <CustomButton
        buttonText="Sign Up"
        setWidth="30%"
        onPressed={() => navigation.navigate("SignUp")}
        buttonColor="lightblue"
        pressedButtonColor="gray"
      />

      {isLoading ? (
        <Loading changeIsLoading={() => setIsLoading(false)} />
      ) : null}
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    margin: 20,
    width: 150,
    height: 150,
  },
});
