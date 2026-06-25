import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { COLORS } from "../../constants/colors";
import { dashboardStyles as styles } from "./styles";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: keyof typeof Ionicons.glyphMap;
}

export function StatCard({
  title,
  value,
  icon,
}: StatCardProps) {
  return (
    <View style={styles.statCard}>
      <View style={styles.statHeader}>
        <Text style={styles.statTitle}>
          {title}
        </Text>

        <Ionicons
          name={icon}
          size={20}
          color={COLORS.primary}
        />
      </View>

      <Text style={styles.statValue}>
        {value}
      </Text>
    </View>
  );
}