import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { loginStyles as styles } from "./styles";

export function BrandHeader() {
  return (
    <View style={styles.header}>
      <View style={styles.logoWrap}>
        <Ionicons name="business" size={28} color="#fff" />
      </View>

      <Text style={styles.brandTitle}>Grand Hotel SaaS</Text>

      <Text style={styles.brandSubtitle}>
        Property Management System for modern hospitality staff.
      </Text>
    </View>
  );
}