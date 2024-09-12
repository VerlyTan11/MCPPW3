import { StyleSheet, TextInput, View } from 'react-native';
import { useState } from 'react';
import Counter from './components/Counter.tsx';
import Profile from './components/Profile.tsx';

export default function App() {
  const [count, setCount] = useState(0);
  const [DisplayNama, setDisplayNama] = useState("Anonymous");
  const [profileCount, setProfileCount] = useState(0);
  const [profileNama, setProfileNama] = useState("Anonymous");

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handlePassValue = () => {
    setProfileNama(DisplayNama);
    setProfileCount(count);
  };
  
  return (
    <View style={styles.container}>
      <Profile name={profileNama} age={profileCount} />
      
      <Counter
        value={count}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        handlePassValue={handlePassValue}
      />

      <TextInput
        style={styles.inputField}
        placeholder="Input your name here"
        onChangeText={setDisplayNama}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 8,
    borderRadius: 4,
    marginTop: 10,
    width: 300,
    fontSize: 18,
    textAlign: "center",
  },
});