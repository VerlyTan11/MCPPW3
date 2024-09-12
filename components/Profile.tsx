import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Profile = {
  name: string;
  age: number;
};

const Profile = ({ name = "Anonymous", age = 0 }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.teks}>{`Halo nama ku, ${name}!`}</Text>
      <Text style={styles.teks}>{`Umur ku, ${age} tahun`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  teks: {
    fontSize: 32,
    textAlign: "center",
  },
});

export default Profile;
