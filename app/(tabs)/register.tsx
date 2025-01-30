import { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  // Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";
import { UserContext } from "../usercontext";
import {Formik} from 'formik';
import * as Yup from 'yup';
import React from "react";

export default function TabTwoScreen() {
  const router = useRouter();
  const { setUser } = useContext(UserContext);



 

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required')
  .min(6, 'Password must be at least 6 characters')
  .matches(/[A-Z]/, 'Password must contain an uppercase letter')
  .matches(/[0-9]/, 'Password must contain at least a number')
  .matches(/[!@#$%^&*()]/, 'Password must contain a special character'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match')
  .required('Confirm Password is required')

});



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <Formik
      initialValues={{name: '', email:'', password: '', confirmPassword:''}}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setUser(values);
        Alert.alert("Successfully Registered!")
        router.push('/');
      }}
      >
        {({handleChange, handleBlur, handleSubmit, values, errors, touched}) =>(
          <>
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
            />
            {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              value={values.confirmPassword}
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <Text style={styles.error}>{errors.confirmPassword}</Text>
            )}

<Button
        mode="contained"
        style={styles.button}
        onPress={() => console.log("Login pressed")}
      >
       Register
      </Button>

            <TouchableOpacity onPress={() => router.push("/login")}>
              <Text style={styles.link}>Already have an account? Login</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    height: 50,
    width: "90%",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
  button: {
    marginTop: 15,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#6200ee",
    borderRadius: 8,
    width: "90%",
    alignItems: "center",
    shadowColor: "#6200ee",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    color: "#6200ee",
    textAlign: "center",
    marginTop: 20,
    textDecorationLine: "underline",
    fontSize: 14,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//     backgroundColor: "#fff",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: "80%",
//   },
//   error: {
// color: "red",
// fontSize: 12,
// marginBottom: 10
//   },
//   input: {
//     height: 40,
//     width: "80%",
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
//   link: {
//     color: "#6200ee",
//     textAlign: "center",
//     marginTop: 20,
//     textDecorationLine: "underline",
//   },
//   button: {
//     marginTop: 10,
//     paddingVertical: 8,
//     backgroundColor: "#6200ee",
//   },
// });
