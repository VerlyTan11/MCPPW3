import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface ICounter {
  handleIncrement: () => void;
  handleDecrement: () => void;
  handlePassValue: () => void;
  value: number;
}

const Counter = ({
  handleDecrement,
  handleIncrement,
  handlePassValue,
  value,
}: ICounter) => {
  return (
    <View>
      <Text style={styles.counterText}>{value}</Text>
      <TouchableOpacity onPress={handleIncrement} style={styles.button}>
        <Text style={styles.buttonText}>Increment</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleDecrement} style={styles.button}>
        <Text style={styles.buttonText}>Decrement</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePassValue} style={styles.button}>
        <Text style={styles.buttonText}>PassValue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  counterText: {
    fontSize: 32,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: "center",
    width: 300,
    height: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default Counter;
