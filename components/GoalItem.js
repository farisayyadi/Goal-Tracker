import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#d1d1d1",
    margin: 8,
    borderRadius: 5,
  },
  pressItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "#3e4654",
    fontSize: 16,
    padding: 10,
    fontWeight:"bold"
  },
});
