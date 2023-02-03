import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { USER_DISCONNECT } from "../constants";
import store from "../reducers/store";

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#302",
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    color: "#FFF",
    lineHeight: 50,
    paddingHorizontal: 32
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    backgroundColor: "#604"
  },
  buttonText: {
    color: "#FFF"
  }
});

export default () => {
  const disconnect = () => {
    store.dispatch({ type: USER_DISCONNECT, payload: null });
  };

  return (
    <View style={styles.header}>
      <Text style={styles.title}>APP TEST</Text>
      <Pressable onPress={disconnect} style={styles.button}>
        <Text style={styles.buttonText}>Log Out</Text>
      </Pressable>
    </View>
  );
};
