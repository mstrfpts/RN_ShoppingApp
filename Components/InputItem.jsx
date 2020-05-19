import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const InputItem = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter Item"
        style={styles.input}
        onChangeText={props.inputHandler}
        value={props.value}
        clearButtonMode="always"
      />

      <Button
        title="ADD"
        onPress={props.onPressHandler}
        disabled={props.buttonDisabler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 5
  },

  clear: {
    marginLeft: -20
  }
});

export default InputItem;
