import React from "react";
import { Text, View } from "react-native";

const moviePage = ({ navigation: { goBack } }) => {
  return (
    <View>
      <Button onPress={() => goBack()} title="Go Back" />
      <Text>Movie Page</Text>
    </View>
  );
};

export default moviePage;
