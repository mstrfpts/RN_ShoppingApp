import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const DisplayItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{`${props.value}(${props.quantity})`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "deepskyblue"
  }
});

export default DisplayItem;
