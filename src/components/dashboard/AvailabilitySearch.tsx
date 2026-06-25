import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../constants/colors";
import { dashboardStyles as styles } from "./styles";

interface AvailabilitySearchProps {
  checkInDate?: string;
  checkOutDate?: string;
  onCheckInPress?: () => void;
  onCheckOutPress?: () => void;
  onSearchPress?: () => void;
}

export function AvailabilitySearch({
  checkInDate = "Select Check-In Date",
  checkOutDate = "Select Check-Out Date",
  onCheckInPress,
  onCheckOutPress,
  onSearchPress,
}: AvailabilitySearchProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        Room Availability
      </Text>

      <View style={styles.searchCard}>
        <TouchableOpacity
          style={styles.dateInput}
          activeOpacity={0.8}
          onPress={onCheckInPress}
        >
          <Ionicons
            name="calendar-outline"
            size={20}
            color={COLORS.primary}
          />

          <Text style={styles.dateText}>
            {checkInDate}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.dateInput}
          activeOpacity={0.8}
          onPress={onCheckOutPress}
        >
          <Ionicons
            name="calendar-outline"
            size={20}
            color={COLORS.primary}
          />

          <Text style={styles.dateText}>
            {checkOutDate}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.searchButton}
          activeOpacity={0.85}
          onPress={onSearchPress}
        >
          <Text style={styles.searchButtonText}>
            Search Availability
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}