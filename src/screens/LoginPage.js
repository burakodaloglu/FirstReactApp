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

const LoginPage = ({ navigation }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/login.png")}
        style={styles.image}
      />

      <Text>Welcome {result}</Text>
      <Text>E-mail</Text>
      <TextInput
        inputMode="email"
        placeholder="Enter your E-mail"
        style={styles.textInputStyle}
        onChangeText={setName}
        value={name}
      />

      <Text>Password</Text>
      <TextInput
        secureTextEntry={true}
        placeholder="Enter your Password"
        style={styles.textInputStyle}
        onChangeText={setLastName}
        value={lastName}
      />
      <Pressable
        onPress={() => setIsLoading(true)}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "gray" : "lightblue",
          },
          styles.button,
        ]}
      >
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate("SignUp")}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "gray" : "lightblue",
            marginTop: 20,
          },
          styles.signupButton,
        ]}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>

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
  textInputStyle: {
    borderWidth: 1,
    width: "80%",
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: "center",
  },
  button: {
    width: "80%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
  image: {
    marginBottom: 20,
    width: 200,
    height: 200,
  },
  signupButton: {
    width: "30%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
