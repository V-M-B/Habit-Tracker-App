import { collectionId, databaseId, databases } from '@/lib/appwrite'
import { useAuth } from '@/lib/auth-context'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ID } from 'react-native-appwrite'
import { Button, SegmentedButtons, TextInput, useTheme } from 'react-native-paper'

const Frequencies=["Daily","Weekly","Monthly","Yearly"]
type frequency =(typeof Frequencies)[number]


const AddHabitScreen = () => {
  const [title,setTitle]=useState<string>("");
  const [description,setDescription]=useState<string>("");
  const [frequency,setFrequency]=useState<frequency>("daily");
  const [error,setError]=useState<string>("")
  const { user } = useAuth();
  const router = useRouter()
  const theme=useTheme();

const handelSubmit= async ()=>{
  if(!user) return;

  try{
  await databases.createDocument(
    databaseId,
    collectionId,
    ID.unique(),
    {
      user_id: user.$id,
      title,
      description,
      frequency,
      streak_count:0,
      last_completed: new Date().toISOString(),
      created_at:new Date().toISOString()
    }

  );

  router.back()
  }
  catch(error)
  {
      if(error instanceof Error){
        setError(error.message)
        return;
      }
      setError("There Was a Error While creating the habit ")
  }
    
};


  return (
    <View style={styles.container}>
        <TextInput label='Title' mode="outlined"style={styles.input} onChangeText={setTitle}/>

        <TextInput label='Description' mode="outlined" style={styles.input} onChangeText={setDescription}/>

        <View style={styles.frequencycontainer}>
        {/* freq */}
        <SegmentedButtons 
        value={frequency}
        onValueChange={(value)=>{
          setFrequency(value as frequency)
        }}

        buttons={Frequencies.map((freq) => ({
          value: freq,
          label: freq.charAt(0).toUpperCase() + freq.slice(1),
        }))}
        />
        </View>
        <Button
        mode="contained"
        disabled={!title || !description}
        onPress={handelSubmit}
        >
          Add Habit
        </Button>
           {error && <Text style={{ color: theme.colors.error }}> {error}</Text>}

      
    </View>
  )
}

export default AddHabitScreen



const styles =StyleSheet.create({
  container: {
    flex:1,
    padding:16,
    backgroundColor:"f5f5f5",
    justifyContent:"center"
  },
  input: {
    marginBottom: 16,
  },
  frequencycontainer:{
      marginBottom: 24,
  },

}) 
