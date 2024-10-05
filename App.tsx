import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState<number>(0)

  const handleIncrese = () =>{
    setCount(count+1)
  }

  return (
    <View style={styles.container}>
      <Text style={{ 
        fontSize: 30,
        fontWeight: "400"
      }}>
        count: {count}
      </Text>
      <View>
        <Button 
        color={"red"}
        title='increase' onPress={handleIncrese}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
