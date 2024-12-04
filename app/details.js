import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; // useRouter kancasını import et

export default function DetailsScreen() {
  const router = useRouter(); // useRouter ile router nesnesini al

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details Screen</Text>
      <Button title="Geri Dön" onPress={() => router.back()} /> {}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
