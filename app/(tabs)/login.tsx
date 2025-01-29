import { useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { TextInput, Button } from "react-native-paper";

const Login = () => {
const router = useRouter();

  return (


    <View style={styles.container}>
   
      <Image
        source={require("../../assets/images/logo.jpg")}
        style={styles.logo}
      />

    
      <TextInput
        label="Email"
        mode="outlined"
        style={styles.input}
        left={<TextInput.Icon icon="email" />}
      />

  
      <TextInput
        label="Password"
        mode="outlined"
        secureTextEntry
        style={styles.input}
        left={<TextInput.Icon icon="lock" />}
      />

  
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => console.log("Login pressed")}
      >
        Login
      </Button>

   
      <TouchableOpacity onPress={() => console.log("Forgot Password pressed")}>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.text}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => {
  console.log("Navigating to /register");
  router.push("/register");
}}>
          <Text style={styles.link}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 30,
  },
  input: {
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  button: {
    marginTop: 10,
    paddingVertical: 8,
    backgroundColor: "#6200ee",
  },
  link: {
    color: "#6200ee",
    textAlign: "center",
    marginTop: 15,
  },
  signupContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    color: "#000",
  },
});

export default Login;
