import React, { useState } from "react";
import {
  ActivityIndicator,
  View,
  Text,
  Pressable,
  TextInput
} from "react-native";
import store from "../reducers/store";
import { USER_CHANGE } from "../constants";
import authStyles from "./AuthFormStyles";

const sendAuthRequest = function (login: string, pw: string) {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve({
        id: 123,
        firstname: "Fabien",
        lastname: "Noizet",
        age: 39,
        email: "fnoizet@gmail.com"
      });
    }, 500 + Math.random() * 1500);
  });
};

export default () => {
  const [displayForm, setDisplayForm] = useState<Boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginInput, setLogin] = useState("");
  const [pwInput, setPW] = useState("");

  const handleConnexionClick = async () => {
    setIsLoading(true);
    const user = await sendAuthRequest(loginInput, pwInput);
    store.dispatch({
      type: USER_CHANGE,
      payload: user
    });
  };

  return (
    <View style={authStyles.mainPage}>
      {!displayForm ? (
        <View style={authStyles.mainButton}>
          <Text style={authStyles.mainButtonlabel}>
            Vous devez vous connecter pour accéder à l'application
          </Text>
          <br />
          <Pressable
            onPress={() => {
              setDisplayForm(true);
            }}
          >
            <Text style={authStyles.buttonStyles}>Connexion</Text>
          </Pressable>
        </View>
      ) : !isLoading ? (
        <View style={authStyles.form}>
          <Text style={authStyles.formTitle}>Sign In</Text>
          <Text style={authStyles.label}>Login</Text>
          <TextInput
            style={authStyles.formField}
            onChangeText={(value) => setLogin(value)}
          />
          <Text style={authStyles.label}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={authStyles.formField}
            onChangeText={(value) => setPW(value)}
          />
          <View style={authStyles.buttonZone}>
            <View style={authStyles.buttonContainer}>
              <Pressable onPress={handleConnexionClick}>
                <Text style={authStyles.buttonStyles}>Connexion</Text>
              </Pressable>
            </View>
            <View style={authStyles.buttonContainer}>
              <Pressable
                onPress={() => {
                  setDisplayForm(false);
                }}
              >
                <Text style={authStyles.buttonStyles}>Annuler</Text>
              </Pressable>
            </View>
          </View>
        </View>
      ) : (
        <View style={authStyles.loader}>
          <ActivityIndicator />
        </View>
      )}
    </View>
  );
};
