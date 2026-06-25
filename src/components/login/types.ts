import { Ionicons } from "@expo/vector-icons";

export type IconName = keyof typeof Ionicons.glyphMap;

export type InputFieldProps = {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  icon: IconName;
  secure?: boolean;
  keyboardType?: "default" | "email-address";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  rightIcon?: IconName;
  onRightPress?: () => void;
};

export type LoginFormState = {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  remember: boolean;
  setRemember: (value: boolean) => void;
  showPassword: boolean;
  setShowPassword: (value: boolean) => void;
  loading: boolean;
  disabled: boolean;
  handleLogin: () => Promise<void>;
};