import { KeyboardAvoidingView, Platform, ScrollView, StatusBar, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BrandHeader } from "../components/login/BrandHeader";
import { FooterNote } from "../components/login/FooterNote";
import { LoginCard } from "../components/login/LoginCard";
import { PromoBanner } from "../components/login/PromoBanner";
import { loginStyles as styles } from "../components/login/styles";
import { COLORS } from "../constants/colors";
import { useLoginForm } from "../hooks/useLoginForm";

export default function LoginScreen() {
  const form = useLoginForm();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.bg} />

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? insets.top : 20}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            styles.scrollContent,
            { paddingBottom: Math.max(insets.bottom, 28) }
          ]}
          bounces={false}
        >
          <BrandHeader />
          <LoginCard form={form} />
          <PromoBanner />
          <FooterNote />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}