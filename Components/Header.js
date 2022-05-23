import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";

const Header = ({ title }) => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerContent}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 70,
    padding: 15,
    backgroundColor: "darkslateblue",
  },
  headerContent: {
    color: "#fff",
    textAlign: "center",
    fontSize: 23,
  },
});

export default Header;
