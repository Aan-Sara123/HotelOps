import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { COLORS } from "../../constants/colors";
import { dashboardStyles as styles } from "./styles";

interface FloatingActionButtonProps {
  onPress?: () => void;
}

export function FloatingActionButton({
  onPress,
}: FloatingActionButtonProps) {
  return (
    <TouchableOpacity
      style={styles.fab}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <Ionicons
        name="add"
        size={30}
        color="#ffffff"
      />
    </TouchableOpacity>
  );
}