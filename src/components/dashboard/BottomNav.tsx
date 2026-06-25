import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../constants/colors";
import { dashboardStyles as styles } from "./styles";

export type BottomNavTab =
  | "dashboard"
  | "bookings"
  | "rooms"
  | "reports";

interface BottomNavProps {
  activeTab: BottomNavTab;
  onTabPress?: (tab: BottomNavTab) => void;
}

export function BottomNav({
  activeTab,
  onTabPress,
}: BottomNavProps) {
  const tabs = [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: "home-outline",
      activeIcon: "home",
    },
    {
      key: "bookings",
      label: "Bookings",
      icon: "calendar-outline",
      activeIcon: "calendar",
    },
    {
      key: "rooms",
      label: "Rooms",
      icon: "bed-outline",
      activeIcon: "bed",
    },
    {
      key: "reports",
      label: "Reports",
      icon: "bar-chart-outline",
      activeIcon: "bar-chart",
    },
  ] as const;

  return (
    <View style={styles.bottomNav}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;

        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.navItem}
            activeOpacity={0.8}
            onPress={() =>
              onTabPress?.(tab.key)
            }
          >
            <Ionicons
              name={
                (isActive
                  ? tab.activeIcon
                  : tab.icon) as keyof typeof Ionicons.glyphMap
              }
              size={22}
              color={
                isActive
                  ? COLORS.primary
                  : COLORS.muted
              }
            />

            <Text
              style={[
                styles.navLabel,
                isActive &&
                  styles.navLabelActive,
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}