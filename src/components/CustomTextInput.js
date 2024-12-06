import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const CustomTextInput = ({
  title,
  isSecureTextEntry,
  placeholder,
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputText}>{title}</Text>
      <TextInput
        style={styles.textInputStyle}
        placeholder={placeholder}
        secureTextEntry={isSecureTextEntry}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
  },
  inputText: {
    fontWeight: "bold",
    alignSelf: "flex-start",
    color: "black",
  },
  textInputStyle: {
    textShadowColor: "black",
    borderBottomWidth: 0.5,
    borderColor: "black",
    width: "100%",
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
});
