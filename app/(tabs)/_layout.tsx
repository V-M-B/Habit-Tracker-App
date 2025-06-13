import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    // used for bottom tabs navigation
    <Tabs screenOptions={{tabBarActiveTintColor:"red"}}>
      {/* home */}
      <Tabs.Screen name="index" options={{ title:"Home",
      tabBarIcon:({color,focused})=>{
       return focused ? <Entypo name="home" size={24} color={color}  /> :
         <AntDesign name="home" size={24}  />
        
      }
     }} />

      {/* Login */}
      <Tabs.Screen name="login" options={{ title:"Login" }} />
    </Tabs>
  );
}
