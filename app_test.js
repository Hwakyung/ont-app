import React, { useEffect } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { StyleSheet } from "react-native";
import { useQuery } from "react-apollo-hooks";
import { BUSLIST } from "./MapQueries";

export default function App() {
  const { data, loading, error } = useQuery(BUSLIST, {
    variables: { name: "1호차" }
  });

  useEffect(() => {
    if (data && !loading && !error) {
      const BusList = data.searchAllBusList;
      console.log(BusList.list[0]);
      for (let idx = 0; idx < BusList.list.length; idx++) {
        const X = BusList.list[idx].x;
        const Y = BusList.list[idx].y;
      }
    } else {
      console.log("error!");
    }
  });

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
      <Marker
        coordinate={{ latitude: 35.205429, longitude: 126.811573 }}
        title={"title"}
        description={"description"}
      />
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
    // flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
