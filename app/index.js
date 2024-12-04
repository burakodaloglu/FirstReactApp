import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [result, setResult] = useState("");

  console.log(name);
  console.log(lastName);

  return (
    <View style={styles.container}>
      <Text>Welcome {result}</Text>
      <Text>Name</Text>
      <TextInput
        placeholder="Enter your Name"
        style={styles.textInputStyle}
        onChangeText={setName}
        value={name}
      />

      <Text>Last Name</Text>
      <TextInput
        placeholder="Enter your Last Name"
        style={styles.textInputStyle}
        onChangeText={setLastName}
        value={lastName}
      />
      <Pressable
        onPress={() => setResult(name + " " + lastName)}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "gray" : "lightblue",
          },
          styles.button,
        ]}
      >
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
    </View>
  );
}

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
});
