import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../constants/colors";
import { dashboardStyles as styles } from "./styles";
import { ActionItem } from "./types";

interface QuickActionsProps {
  actions: ActionItem[];
  onActionPress?: (action: ActionItem) => void;
}

export function QuickActions({
  actions,
  onActionPress,
}: QuickActionsProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        Quick Actions
      </Text>

      <View style={styles.actionsRow}>
        {actions.map((action) => (
          <TouchableOpacity
            key={action.id}
            style={styles.actionCard}
            activeOpacity={0.8}
            onPress={() => onActionPress?.(action)}
          >
            <Ionicons
              name={action.icon as keyof typeof Ionicons.glyphMap}
              size={28}
              color={COLORS.primary}
            />

            <Text style={styles.actionLabel}>
              {action.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}