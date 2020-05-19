import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList
} from "react-native";
import InputItem from "./Components/InputItem";
import DisplayItem from "./Components/DisplayItem";

export default function App() {
  const [enteredItem, setEnteredItem] = useState("");
  const [itemsArray, addItems] = useState([]);
  const [addButtonState, addButtonStateToggle] = useState(true);

  const itemInputHandler = enteredText => {
    setEnteredItem(enteredText);
    if (enteredText === "") {
      addButtonStateToggle(true);
    } else {
      addButtonStateToggle(false);
    }
  };

  const addItemHandler = () => {
    addItems([
      ...itemsArray,
      { value: enteredItem, id: Math.random().toString() }
    ]);
    setEnteredItem("");
    addButtonStateToggle(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Shopping List</Text>
      <InputItem
        inputHandler={itemInputHandler}
        value={enteredItem}
        onPressHandler={addItemHandler}
        buttonDisable={addButtonState}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={itemsArray}
        renderItem={items => (
          <DisplayItem
            onDelete={() => console.log("disable")}
            value={items.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },

  header: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },

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
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "deepskyblue"
  }
});
