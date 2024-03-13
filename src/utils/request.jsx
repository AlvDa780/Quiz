import React from 'react'
import { supabase } from "../utils/supabase";


export const InsertUser = async (user) => {
  
    await supabase.from("users").insert(user);

} 