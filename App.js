import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";
import { View, Text, AsyncStorage, StyleSheet, CheckBox } from "react-native";
import { InMemoryCache } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo-hooks";
import apolloClientOptions from "./apollo";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import Map from "./app_test";
import RNPickerSelect from "react-native-picker-select";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [client, setClient] = useState(null);

  const bus = [
    {
      label: "1호차",
      value: "1호차"
    },
    { label: "2호차", value: "2호차" },
    { label: "3호차", value: "3호차" }
  ];

  const [num, setNum] = useState("1호차");

  const preLoad = async () => {
    try {
      await Font.loadAsync({
        ...Ionicons.font
      });
      await Asset.loadAsync([require("./assets/logo.png")]);
      const cache = new InMemoryCache();
      await persistCache({
        cache,
        storage: AsyncStorage
      });
      const client = new ApolloClient({
        cache,
        ...apolloClientOptions
      });
      setLoaded(true);
      setClient(client);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    preLoad();
  }, []);

  const onValueChange = e => {
    console.log(e);
    setNum(e);
  };

  return loaded && client ? (
    <ApolloProvider client={client}>
      <View style={styles.dropdown} pointerEvents="box-none">
        {/* <Dropdown
          label="busList"
          data={bus}
          onChangeText={value => onChangeText(value)}
        /> */}
        <RNPickerSelect
          items={bus}
          onValueChange={value => onValueChange(value)}
        ></RNPickerSelect>
      </View>
      <View style={{ flex: 1 }}>
        <Map num={num} />
      </View>
    </ApolloProvider>
  ) : (
    <AppLoading />
  );
}

const styles = StyleSheet.create({
  dropdown: {
    position: "relative",
    paddingTop: 20,
    paddingLeft: 10,
    width: "50%",
    height: "12%",
    justifyContent: "center",
    alignContent: "center"
  }
});
