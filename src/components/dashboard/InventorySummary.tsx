import { Text, View } from "react-native";
import { dashboardStyles as styles } from "./styles";
import { InventoryItem } from "./types";

interface InventorySummaryProps {
  inventory: InventoryItem[];
}

export function InventorySummary({
  inventory,
}: InventorySummaryProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        Inventory Summary
      </Text>

      <View style={styles.inventoryRow}>
        {inventory.map((item) => (
          <View
            key={item.id}
            style={styles.inventoryCard}
          >
            <Text style={styles.inventoryValue}>
              {item.value}
            </Text>

            <Text style={styles.inventoryLabel}>
              {item.label}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}