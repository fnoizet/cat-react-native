import { StyleSheet } from "react-native";

export default StyleSheet.create({
  app: {
    flexDirection: "column",
    flex: 1
  },
  logo: {
    height: 50
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 10,
    textAlign: "center"
  },
  text: {
    lineHeight: 25,
    fontSize: 18,
    marginVertical: 18,
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});
