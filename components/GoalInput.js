import { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, Modal, Image } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) return; // Prevent empty goals
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText(""); // Clear input after adding goal
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/Goals.png')} />
        <TextInput
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          style={styles.textInput}
          placeholder="My Course Goals!"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#ff526b" />
          </View>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Add Goal" color="#ffa400" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding:16,
    backgroundColor:'#283141'
  },
  image:{
    width:300,
    height:300,
    margin:20

  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ff526b",
    backgroundColor:"#fff",
    padding: 10,
    borderRadius: 5,
    width:"100%",
    color:'#123438',
    padding: 16
  },
  buttonContainer: {
    flexDirection: "row",

  },
  button: {
    borderRadius: 5,
    width: "30%",
    margin: "5%",
  },
});
