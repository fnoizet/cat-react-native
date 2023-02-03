import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#302",
    height: 50
  },
  footerText: {
    color: "#FFF",
    textAlign: "right"
  }
});

export default () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Footer</Text>
    </View>
  );
};
