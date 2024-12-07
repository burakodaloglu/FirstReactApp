import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
const SignUpPage = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Image
          source={require("../../assets/images/signUp.png")}
          style={styles.image}
        />
        <Text style={styles.signUp}>Sign Up</Text>
      </View>
      <View style={styles.textInpuContainer}>
        <CustomTextInput
          title="Name"
          isSecureTextEntry={false}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
        <CustomTextInput
          title="Email"
          isSecureTextEntry={false}
          placeholder="Enter your Email"
          value={email}
          onChangeText={setEmail}
        />
        <CustomTextInput
          title="Password"
          isSecureTextEntry={true}
          placeholder="Create your password"
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.signUpOptions}>
        <CustomButton
          buttonText="Sign Up"
          setWidth="80%"
          buttonColor="lightblue"
          pressedButtonColor="gray"
          onPressed={() => {
            console.log(name, email, password);
          }}
        />
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text>Already have an account? Sign In</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  signUp: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    color: "black",
  },
  title: {
    marginBottom: 30,
    padding: 20,
    flex: 2,
    alignItems: "center",
  },
  textInpuContainer: {
    flex: 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  signUpOptions: {
    width: "100%",
    alignItems: "center",
    flex: 2,
    justifyContent: "space-between",
  },
  image: {
    margin: 20,
    width: 150,
    height: 150,
  },
});
