import { Text } from "react-native";
import { loginStyles as styles } from "./styles";

export function FooterNote() {
  return (
    <Text style={styles.footerText}>
      New here? <Text style={styles.footerLink}>Contact your administrator</Text>
    </Text>
  );
}