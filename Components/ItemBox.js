import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";

const ItemBox = ({ item, navigation: { navigate } }) => {
  //   console.log(item);

  return (
    <TouchableOpacity style={styles.ItemBox}>
      <View style={styles.ItemBoxView}>
        <View style={{ justifyContent: "space-between" }}>
          <Text>Movie Item</Text>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigate("moviePage")}
          >
            <Text>Interested</Text>
          </TouchableOpacity>
        </View>

        <Image source={require("../Assets/Batman.png")} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ItemBox: {
    width: "90%",
    height: 150,
    borderRadius: 15,
    justifyContent: "center",
    margin: 15,
    padding: 15,
    backgroundColor: "lightskyblue",
  },
  ItemBoxView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    padding: 15,
    backgroundColor: "orange",
    borderRadius: 15,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
});

export default ItemBox;
