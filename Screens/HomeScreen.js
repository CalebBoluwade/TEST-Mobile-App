import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
} from "react-native";
import Header from "../Components/Header";
import ItemBox from "../Components/ItemBox";

import colors from "../Config/Colors";

const HomeScreen = () => {
  const [isLoading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const getMoviesFromApiAsync = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://reactnative.dev/movies.json");
      const json = await response.json();
      setItems(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMoviesFromApiAsync();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Movie Listing" />

      <ScrollView>
        <View style={styles.content}>
          <ItemBox />

          <ItemBox />

          <ItemBox />

          <ItemBox />
        </View>
      </ScrollView>

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={[
            { key: "Devin" },
            { key: "Dan" },
            { key: "Dominic" },
            { key: "Jackson" },
            { key: "James" },
            { key: "Joel" },
            { key: "John" },
            { key: "Jillian" },
            { key: "Jimmy" },
            { key: "Julie" },
          ]}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.dark,
    flex: 1,
  },

  content: {
    alignItems: "center",
  },
});

export default HomeScreen;
