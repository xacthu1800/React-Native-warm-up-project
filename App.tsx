import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textFront}>Hi my name is Bin and i'm </Text>
      <Text style={styles.header}> i'm learning computer science
        <Text style={styles.headerchild}>NESTED</Text>
        </Text>
      <StatusBar style="auto" />
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
  textFront:{
    color: "green",
    fontSize: 27,
    padding: 10 ,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "pink"
  },
  header:{
    padding: 20, 
    backgroundColor: "pink",
    textAlign: "center",
    fontSize: 30,
    color: "blue",
    fontWeight: "bold"
  },
  headerchild:{
    padding: 0, 
    backgroundColor: "grey",
    textAlign: "center",
    fontSize: 30,
    color: "red",

  }
  
});
