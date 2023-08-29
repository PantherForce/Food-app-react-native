
import { StyleSheet, Text, View, Image,  TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        source={require("./assets/wc.png")}

      />
      <Text style={{
        paddingTop: 24,
        fontSize: 14,
        color: '#f96163',
        fontWeight: 'bold',
        fontFamily: '',

      }}>
        40 + restro serving for you
      </Text>

      <Text style={{
        fontSize: 33,
        fontWeight: 'bold',
        paddingTop: 20,
      }}>
        Eat like a king
      </Text>
     
     <TouchableOpacity style = {{
      backgroundColor : '#f96163' ,
      borderRadius : 12 ,
      paddingVertical : 18,
      marginTop : 40,
      width : '40%',
      alignItems : 'center',
     }} >
      <Text style = {{
        color : '#fff' ,
        fontSize : 14 ,
        fontWeight : 'bold',
      }}> Order now </Text>
     </TouchableOpacity>
      
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
});
