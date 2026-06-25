import { router } from "expo-router";
import { useMemo, useState } from "react";
import { Alert } from "react-native";
import { LoginFormState } from "../components/login/types";
import { supabase } from "../lib/supabase";

export function useLoginForm(): LoginFormState {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [remember, setRemember] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const disabled = useMemo(
    () => loading || !email.trim() || !password.trim(),
    [loading, email, password]
  );

  const handleLogin = async (): Promise<void> => {
    if (!email || !password) {
      Alert.alert("Missing Fields", "Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        Alert.alert("Login Failed", error.message);
        return;
      }

      console.log("LOGIN SUCCESS", data.user);
      router.replace("/dashboard");
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    remember,
    setRemember,
    showPassword,
    setShowPassword,
    loading,
    disabled,
    handleLogin,
  };
}