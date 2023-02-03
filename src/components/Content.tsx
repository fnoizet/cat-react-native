import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  Pressable,
  ActivityIndicator,
  View,
  Image,
  StyleSheet
} from "react-native";
import catAPI from "../services/catAPI";

const styles = StyleSheet.create({
  buttonStyles: {
    color: "#FFF",
    backgroundColor: "#604",
    textAlign: "center",
    paddingVertical: 10
  }
});

export default () => {
  const [loadedImage, setLoadedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const processImage = (res) => {
    if (res.length > 0) {
      setLoadedImage(res[0].url);
      setIsLoading(false);
    }
  };

  const loadImage = useCallback(() => {
    const call = catAPI.getImage();
    call.then(processImage);
  }, []);

  useEffect(() => {
    loadImage();
  }, [loadImage]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        display: "flex"
      }}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Image
            source={{ uri: loadedImage }}
            style={{ flex: 1 }}
            resizeMode="contain"
          />
          <Pressable onPress={loadImage} style={styles.buttonStyles}>
            <Text style={{ color: "#FFF" }}>Changer d'image</Text>
          </Pressable>
        </>
      )}
    </View>
  );
};
