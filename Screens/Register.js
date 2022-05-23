import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";
// import { API_URL, API_TOKEN } from "react-native-dotenv";

const Login = () => {
  // useEffect(() => {
  //   fetch(`${API_URL}/users`, {
  //     headers: {
  //       Authorization: `Bearer ${API_TOKEN}`,
  //     },
  //   });
  // }, []);

  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text>Register</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Email Address"
          onChangeText={(newValue) => setEmailText(newValue)}
          defaultValue={emailText}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Password"
          onChangeText={(newValue) => setPasswordText(newValue)}
          defaultValue={passwordText}
        />
        <TouchableWithoutFeedback style={styles.btn}>
          <Text>Login</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  form: {
    height: 200,
    width: "90%",
  },
  inputField: {
    height: 45,
    borderColor: "grey",
    borderWidth: 1,
    padding: 12,
    marginBottom: 15,
  },
  btn: {
    padding: 15,
    borderColor: "darkslateblue",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;
