import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, TextInput, View } from "react-native";
import { loginStyles as styles } from "./styles";
import { InputFieldProps } from "./types";

export function InputField({
  label,
  placeholder,
  value,
  onChangeText,
  icon,
  secure,
  keyboardType = "default",
  autoCapitalize = "none",
  rightIcon,
  onRightPress,
}: InputFieldProps) {
  return (
    <View style={styles.fieldWrap}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.inputWrap}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#9ca3af"
          secureTextEntry={secure}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          style={styles.input}
        />

        <Ionicons name={icon} size={18} color="#6b7280" />

        {!!rightIcon && (
          <Pressable onPress={onRightPress} hitSlop={10}>
            <Ionicons name={rightIcon} size={18} color="#6b7280" />
          </Pressable>
        )}
      </View>
    </View>
  );
}