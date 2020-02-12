import React, { useEffect, useState } from "react";
import { Marker } from "react-native-maps";
import { StyleSheet, Button, Text, View } from "react-native";
import { useQuery } from "react-apollo-hooks";
import { BUSLIST } from "./MapQueries";
import Modal from "react-native-modal";

export default ({ modalvalue }) => {
  const [isClose, setClose] = useState(false);
  return (
    <View>
      <Modal isVisible={modalvalue}>
        <View style={{ flex: 1 }}>
          <Text>I am the modal content!</Text>
          <Button title="hide modal" onPress={isClose} />
        </View>
      </Modal>
    </View>
  );
};
