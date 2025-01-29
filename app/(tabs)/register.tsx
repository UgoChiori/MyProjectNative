


import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';


export default function TabTwoScreen() {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!email || !password) {
      Alert.alert('Please fill in all fields');
      return;
    } 
    Alert.alert('Successfully registered');
    router.push('/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
     <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType='email-address'
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
        />
        <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        />
    <Button title="Register" onPress={handleRegister} />
    <TouchableOpacity onPress={() => router.push('/login')}>
      <Text style={styles.link}>Already have an account? Login</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  link: {
    color: 'blue',
    marginTop: 20,
    textDecorationLine: 'underline',
  }
});
