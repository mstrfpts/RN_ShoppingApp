import React from "react";
import { View, TextInput, Button, StyleSheet, Modal, Text } from "react-native";

const InputItem = props => {
  console.log("props", props);
  return (
    <Modal visible={props.visible} animationType={"slide"}>
      <View style={styles.rootContainer}>
        <View style={styles.inputContainer}>
          <Text>Item:</Text>
          <TextInput
            placeholder="Enter Item"
            style={styles.inputItem}
            onChangeText={props.itemInputHandler}
            value={props.item}
            clearButtonMode="always"
          />
          <Text style={{ marginLeft: -6, marginHorizontal: 3 }}>X</Text>
          <TextInput
            placeholder="1"
            style={styles.inputQuantity}
            onChangeText={props.itemQuantityInputHandler}
            value={props.itemQuantity + ""}
            clearButtonMode="always"
          />
        </View>
        <View style={styles.buttonsQuantity}>
          <View style={styles.buttonSquare}></View>
          <View style={styles.buttonSquare}>
            <Button title="-" onPress={props.itemQuantityDecreaseHandler} />
          </View>

          <View style={styles.buttonSquare}>
            <Button title="+" onPress={props.itemQuantityIncreaseHandler} />
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button
              title="ADD"
              onPress={props.addItemHandler}
              disabled={props.buttonDisabler}
            />
          </View>

          <View style={styles.button}>
            <Button title="Close" onPress={props.closeInputOverlay} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    margin: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    //borderColor: "red",
    //borderWidth: 1
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
    //borderColor: "blue",
    //borderWidth: 1
  },

  inputItem: {
    width: "60%",
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    margin: 10
  },

  inputQuantity: {
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    //margin: 10,
    width: "20%"
  },

  clear: {
    marginLeft: -20
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    paddingHorizontal: 22
  },

  buttonsQuantity: {
    borderColor: "green",
    borderWidth: 1,
    flexDirection: "row",

    marginHorizontal: 1
  },

  buttonSquare: {
    width: 40,
    margin: 5
  },

  button: {
    flex: 0.5,
    marginHorizontal: 5
  }
});

export default InputItem;
