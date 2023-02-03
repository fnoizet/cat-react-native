import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainPage: {
    backgroundColor: "#302",
    height: "100%"
  },
  buttonStyles: {
    color: "#FFF",
    backgroundColor: "#604",
    textAlign: "center",
    paddingVertical: 10
  },
  mainButton: {
    margin: "auto"
  },
  mainButtonlabel: {
    color: "#FFF"
  },
  form: {
    margin: "auto",
    width: 300,
    border: "1px solid #ccc",
    padding: 10,
    backgroundColor: "#FFF"
  },
  formTitle: {
    marginBottom: 20,
    marginHorizontal: "auto",
    paddingHorizontal: 10,
    fontSize: 20,
    backgroundColor: "#FFF",
    textAlign: "center"
  },
  formField: {
    border: "1px solid black",
    marginVertical: 10
  },
  label: {
    marginBottom: -10
  },
  buttonZone: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10
  },
  buttonContainer: {
    flexGrow: 1
  },
  loader: {
    margin: "auto"
  }
});
