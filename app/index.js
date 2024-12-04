import React from "react";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "../src/screens/LoginPage";
import SignUpPage from "../src/screens/SignUpPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationIndependentTree>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
      </Stack.Navigator>
    </NavigationIndependentTree>
  );
}
