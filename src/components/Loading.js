import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const Loading = (props) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => props.changeIsLoading()}
        style={[{}, styles.closeButtonContainer]}
      >
        <Text style={styles.closeButton}>X</Text>
      </Pressable>

      <ActivityIndicator size="large" color="white" />
      <Text style={styles.loginText}>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    height: "100%",
  },
  loginText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
  closeButtonContainer: {
    backgroundColor: "white",
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 10,
    right: 10,
  },
  closeButton: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
});
