import React from "react";
import { View } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import AuthForm from "./components/AuthForm";
import styles from "./AppStyles";
import { RootState } from "./definitions";

import { Provider, useSelector } from "react-redux";
import store from "./reducers/store";

const EmbedApp = () => {
  const user = useSelector((state: RootState) => state.user || null);

  return !user.id ? (
    <AuthForm />
  ) : (
    <View style={styles.app}>
      <Header />
      <Content />
      <Footer />
    </View>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <EmbedApp />
    </Provider>
  );
};

export default App;
