import { Models } from "react-native-appwrite";

export interface Habit extends Models.Document{
    user_id:string;
    title:string;
    description:string;
    frequency:string;
    last_completed:string;
    created_at:string;
    streak_count:number;
}

export interface HabitCompletion extends Models.Document{
    habit_id:string;
    user_id:string;
    completed_at:string;

}