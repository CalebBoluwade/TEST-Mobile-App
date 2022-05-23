import React from "react";
import {
  Text,
  Button,
  View,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import Header from "../Components/Header";

const PrivacyScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Privacy" style={styles.header} />
      <ScrollView>
        <Text style={styles.body}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Contrary to popular belief, Lorem
          Ipsum is not simply random text. It has roots in a piece of classical
          Latin literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Contrary to popular belief, Lorem
          Ipsum is not simply random text. It has roots in a piece of classical
          Latin literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia.
        </Text>
      </ScrollView>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Button
          title="Decline"
          style={styles.declineButton}
          onPress={() => Alert.alert("Water")}
        />
        <Button
          title="Accept"
          style={styles.acceptButton}
          onPress={() => console.log("Text")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginTop: 30,
  },
  header: {
    fontSize: 35,
    // textAlign: "center",
    color: "darkslateblue",
  },
  body: {
    lineHeight: 30,
  },
  declineButton: {
    color: "tomato",
    backgroundColor: "tomato",
    borderRadius: 25,
    width: 50,
  },
  acceptButton: {
    backgroundColor: "darkslateblue",
    width: 50,
  },
});

export default PrivacyScreen;
