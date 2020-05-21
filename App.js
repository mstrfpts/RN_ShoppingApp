import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
  Modal
} from "react-native";
import _ from "lodash";
import InputItem from "./Components/InputItem";
import DisplayItem from "./Components/DisplayItem";

export default function App() {
  const [enteredItem, setItemText] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemsArray, setItemsArray] = useState([]);
  const [completedItemArray, addToCompletedItems] = useState([]);
  const [inputOverlayState, setInputOverlay] = useState(false);
  const [addButtonState, setAddButton] = useState(true);

  const itemQuantityInputHandler = enteredItemQuantity => {
    console.log("derd, enteredItem", enteredItemQuantity);
    console.log("derd, enteredItem1", typeof enteredItemQuantity);
    if (enteredItemQuantity == "") {
      setItemQuantity("");
    } else if (!isNaN(enteredItemQuantity)) {
      setItemQuantity(parseInt(enteredItemQuantity));
    }
  };

  const itemQuantityIncreaseHandler = change => {
    setItemQuantity(itemQuantity + 1);
  };

  const itemQuantityDecreaseHandler = change => {
    setItemQuantity(itemQuantity - 1);
  };

  const itemInputHandler = enteredText => {
    setItemText(enteredText);
    if (enteredText === "") {
      setAddButton(true);
    } else {
      setAddButton(false);
    }
  };

  const showIntputOverlayHandler = () => {
    setInputOverlay(true);
  };

  const closeIntputOverlayHandler = () => {
    setInputOverlay(false);
  };

  const addItemHandler = () => {
    setItemsArray([
      ...itemsArray,
      {
        value: enteredItem,
        id: Math.random().toString(),
        quantity: itemQuantity
      }
    ]);
    setItemText("");
    setAddButton(true);
    setItemQuantity(1);
  };

  const removeItemHandler = id => {
    setItemsArray(itemsArray => {
      return itemsArray.filter(item => item.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Shopping List</Text>
      <Button title="Add new Item" onPress={showIntputOverlayHandler} />
      <InputItem
        itemInputHandler={itemInputHandler}
        itemQuantityInputHandler={itemQuantityInputHandler}
        itemQuantityDecreaseHandler={itemQuantityDecreaseHandler}
        itemQuantityIncreaseHandler={itemQuantityIncreaseHandler}
        item={enteredItem}
        itemQuantity={itemQuantity}
        addItemHandler={addItemHandler}
        buttonDisabler={addButtonState}
        closeInputOverlay={closeIntputOverlayHandler}
        visible={inputOverlayState}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={itemsArray}
        renderItem={items => (
          <DisplayItem
            id={items.item.id}
            onDelete={removeItemHandler}
            value={items.item.value}
            quantity={items.item.quantity}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    //borderColor: "black",
    //borderWidth: 1,
    flex: 1
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
