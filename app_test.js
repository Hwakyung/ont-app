import React, { useEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import MarkerList from "./MarkerList";

export default function App(num) {
  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 35.205429,
        longitude: 126.811573,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
    >
      <MarkerList num={num} />
    </MapView>
  );
}

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
    // height: 685,
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  marker: {
    flex: 1
  }
});
