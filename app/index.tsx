import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
export default function Index() {
  return (
    <View
      style={styles.View}
    >
      <Text>Tracker</Text>
      <Link href="/login" style={styles.Link}>
        Go to Login
        </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  View:{
     flex: 1,
        justifyContent: "center",
        alignItems: "center",
  },
  Link:{ marginTop: 20 ,backgroundColor:"blue",height:20,width:100,borderRadius:10,alignContent:"center",justifyContent:"center",textAlign:"center" ,textAlignVertical:"center",color:"white",fontSize:16}
});