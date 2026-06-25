import "react-native-url-polyfill/auto";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://mcwjyhzkbuunwpvdlpwc.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jd2p5aHprYnV1bndwdmRscHdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4NTgyMDEsImV4cCI6MjA5NzQzNDIwMX0.zEIFn3PtLpP3ON6834oX2c2GD8kXeuBDo6j0Ucz48OI";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);