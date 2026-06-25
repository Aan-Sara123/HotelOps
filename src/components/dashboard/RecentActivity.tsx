import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { COLORS } from "../../constants/colors";
import { dashboardStyles as styles } from "./styles";
import { ActivityItem } from "./types";

interface RecentActivityProps {
  activities: ActivityItem[];
}

export function RecentActivity({
  activities,
}: RecentActivityProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        Recent Activity
      </Text>

      <View style={styles.activityCard}>
        {activities.map((activity, index) => (
          <View
            key={activity.id}
            style={[
              styles.activityItem,
              index !== activities.length - 1 && {
                borderBottomWidth: 1,
                borderBottomColor: "#f1f5f9",
              },
            ]}
          >
            <Ionicons
              name={
                activity.icon as keyof typeof Ionicons.glyphMap
              }
              size={22}
              color={COLORS.primary}
            />

            <View style={styles.activityContent}>
              <Text style={styles.activityName}>
                {activity.guestName}
              </Text>

              <Text style={styles.activityAction}>
                {activity.action}
              </Text>
            </View>

            <Text style={styles.activityTime}>
              {activity.time}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}