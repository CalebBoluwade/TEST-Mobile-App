import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
} from "react-native";

const WelcomeScreen = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        resizeMode: "contain",
      }}
      source={require("../Assets/Batman.png")}
    >
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "#fff" }}>Hello World</Text>
        <Button
          title="Get Started"
          style={styles.loginButton}
          onPress={() =>
            Alert.alert(
              "User not signed in",
              "User will not enjoy full features of this app unless signed in with an account",
              [
                { text: "Log In", onPress: () => console.log("Logged In") },
                {
                  text: "Sign Up",
                  onPress: () => console.log("Go to Sign up page"),
                },
              ]
            )
          }
        />
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.form}
          placeholder="username"
          onChange={(e) => setUserName(e.target.value)}
        />

        <TextInput
          style={styles.form}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    margin: 0,
  },
  buttonArea: {
    height: 75,
    width: "100%",
  },
  loginButton: {
    color: "#fff",
    backgroundColor: "lightskyblue",
    padding: 15,
  },
  form: {
    width: "90%",
    height: 150,
    backgroundColor: "#fff",
  },
  input: {
    width: "90%",
    height: 50,
    border: "1px solid red",
    borderRadius: 7,
    padding: 10,
    borderWidth: 0.5,
  },
  appLogo: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
});

export default WelcomeScreen;
