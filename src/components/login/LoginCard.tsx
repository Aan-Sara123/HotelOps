import { Ionicons } from "@expo/vector-icons";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { loginStyles as styles } from "./styles";
import { LoginFormState } from "./types";
import { InputField } from "./InputField";

type Props = {
  form: LoginFormState;
};

export function LoginCard({ form }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Staff Login</Text>

      <InputField
        label="WORK EMAIL"
        placeholder="name@grandhotel.com"
        value={form.email}
        onChangeText={form.setEmail}
        icon="mail-outline"
        keyboardType="email-address"
      />

      <InputField
        label="PASSWORD"
        placeholder="••••••••"
        value={form.password}
        onChangeText={form.setPassword}
        icon="lock-closed-outline"
        secure={!form.showPassword}
        rightIcon={form.showPassword ? "eye-off-outline" : "eye-outline"}
        onRightPress={() => form.setShowPassword(!form.showPassword)}
      />

      <View style={styles.rowBetween}>
        <Pressable
          style={styles.rememberWrap}
          onPress={() => form.setRemember(!form.remember)}
        >
          <View style={[styles.checkbox, form.remember && styles.checkboxActive]}>
            {form.remember && <Ionicons name="checkmark" size={12} color="#fff" />}
          </View>
          <Text style={styles.rememberText}>Remember Me</Text>
        </Pressable>

        <Pressable>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </Pressable>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          form.disabled && styles.buttonDisabled,
          pressed && !form.disabled && styles.buttonPressed,
        ]}
        onPress={form.handleLogin}
        disabled={form.disabled}
      >
        {form.loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <View style={styles.buttonInner}>
            <Text style={styles.buttonText}>Login to Dashboard</Text>
            <Ionicons name="log-in-outline" size={18} color="#fff" />
          </View>
        )}
      </Pressable>
    </View>
  );
}