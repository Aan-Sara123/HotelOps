import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { dashboardStyles as styles } from "./styles";

interface DashboardHeaderProps {
  hotelName: string;
  role: string;
  ownerName: string;
  onMenuPress?: () => void;
  onProfilePress?: () => void;
}

export function DashboardHeader({
  hotelName,
  role,
  ownerName,
  onMenuPress,
  onProfilePress,
}: DashboardHeaderProps) {
  const initials = ownerName
    .split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <TouchableOpacity onPress={onMenuPress}>
          <Ionicons
            name="menu"
            size={28}
            color="#1f2937"
          />
        </TouchableOpacity>

        <View style={styles.hotelInfo}>
          <Text
            style={styles.hotelName}
            numberOfLines={1}
          >
            {hotelName}
          </Text>

          <Text style={styles.roleText}>
            {role}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.avatar}
        onPress={onProfilePress}
      >
        <Text style={styles.avatarText}>
          {initials}
        </Text>
      </TouchableOpacity>
    </View>
  );
}