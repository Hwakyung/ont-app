import React, { useEffect, useState } from "react";
import { Marker } from "react-native-maps";
import { StyleSheet, Text, View } from "react-native";
import { useQuery } from "react-apollo-hooks";
import { BUSLIST } from "./MapQueries";
import ModalPage from "./ModalPage";

export default function App(num) {
  const [listData, setData] = useState([]);
  const [modalValue, setModal] = useState(false);

  const { data, loading, error } = useQuery(BUSLIST, {
    variables: { name: num.num.num }
  });

  useEffect(() => {
    if (data && !loading && !error) {
      const BusList = data.searchAllBusList.list;
      console.log("app에서의 결과", BusList);
      setData(BusList);
    } else {
      console.log("error!");
    }
  }, [data, loading, error]);

  const onClick = () => {
    console.log("hello");
  };

  return (
    <View>
      {listData.map(temp => {
        // console.log("반환 안에서의결과", temp);
        return (
          <Marker
            style={styles.container}
            key={temp.name}
            coordinate={{ latitude: temp.x, longitude: temp.y }}
            title={temp.name}
            onCalloutPress={() => onClick()}
          ></Marker>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    width: 50,
    height: 50
  },
  map: {
    // height: 685,
    flex: 1,
    position: "absolute"
  }
});
