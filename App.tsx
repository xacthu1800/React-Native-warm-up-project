import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState<number>(0)
  const [name, setName] = useState<string>("")
  const [age, setAge] = useState<number>(0)


  const handleIncrese = () =>{
    setCount(count+1)
  }



  return (
    <View style={styles.container}>
      <View>
        
        <Text style={{fontSize:30}}>Name : {name}</Text>
        <TextInput 
          multiline
          autoCapitalize={"characters"}
          onChangeText={(value)=>setName(value)}
          style={{
            borderColor: "green",
            borderWidth: 1,
            width: 200,
            padding: 35
          }}
        
         />  
      </View>
      <View>
        <Text style={{fontSize:30}}>Age: {age}</Text>
        <TextInput 
        keyboardType='number-pad'
        multiline
        onChangeText={(value)=>setAge(+value)}
        style={{
          borderColor: "green",
          borderWidth: 1,
          width: 200,
          padding: 35
        }}
        
         />  
      </View>

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
