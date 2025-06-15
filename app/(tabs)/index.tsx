import { collectionId, databaseId, databases } from "@/lib/appwrite";
import { useAuth } from "@/lib/auth-context";
import { Habit } from "@/types/database.type";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Query } from "react-native-appwrite";
import { Button, Text } from "react-native-paper";



export default function Index() {
  const { signOut,user } = useAuth();
  const [habits,setHabits]=useState<Habit[]>()

  useEffect(() => {
    fetchHabits();
  }, [user]);
  
  const fetchHabits =async ()=>{
    try {
      const response = await databases.listDocuments(
        databaseId,
        collectionId,
        [Query.equal("user_id",user?.$id??"")]
      );
      console.log(response.documents);
      
      setHabits(response.documents as Habit[]);
    } catch (error) {
      console.log(error);
      
    }
  }



  return (
    <View style={styles.container}>
      <View style={styles.View}> 
        <Text variant="headlineSmall"> Today's Habit </Text>
        <Button mode="text" onPress={signOut}>
          SignOut
        </Button>
      </View>

      {habits?.length === 0 ? (
        <View>
          <Text>
            No Habits yet. Add your first Habit
          </Text>
        </View>
      ) : (
        habits?.map((habits,key)=>(
          <View key={key}>
            <Text>
              {habits.title}
            </Text>
            <Text>
              {habits.description}
            </Text>
            <View>
              <View>
                <MaterialCommunityIcons name="fire" size={18} 
                  color={"#ff9800"}
                />
                <Text>
                  {habits.streak_count} day streak
                </Text>
              </View>
              <View>
                <Text>
                  {habits.frequency.charAt(0).toUpperCase()+habits.frequency.slice(1)}
                </Text>
              </View>
            </View>
          </View>
        ))
      )}
    </View>
  );  // Added missing closing brace here
}

const styles = StyleSheet.create({
  View:{
     flex: 1,
        justifyContent: "center",
        alignItems: "center",
  },
container:{
  
}
});