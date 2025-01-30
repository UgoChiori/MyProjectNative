import { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { UserContext } from './usercontext';

export default function Profile() {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);

  const handleSave = () => {
    if (!email || !password || !name) {
      Alert.alert('Please fill in all fields');
      return;
    }

    // Update user data in context
    setUser({ email, password, name });

   console.log('Profile updated successfully');
   alert("Profile updated successfully");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
       <TextInput
             style={styles.input}
             placeholder="Name"
             onChangeText={setName}
             value={name}
           />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
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
      <Button title="Save Changes" onPress={handleSave} />
      <TouchableOpacity onPress={() => router.push('/')}>
        <Text style={styles.link}>Back to Home</Text>
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
  },
});