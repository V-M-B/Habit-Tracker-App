import { useAuth } from "@/lib/auth-context";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
export default function Index() {
  const { signOut } = useAuth();
  return (
    <View
      style={styles.View}
    >
      <Text>Tracker</Text>
      <Button mode="text" onPress={signOut}>
        SignOut
      </Button>
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