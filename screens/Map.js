import React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Text, View, AsyncStorage, StyleSheet } from "react-native";
import Styled from "styled-components/native";

export default () => {
  console.log("chek");
  return (
    <View style={styles.container}>
      <Text>KakaoMap 변경 필요</Text>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 33.450701,
          longitude: 126.570667,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  map: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
