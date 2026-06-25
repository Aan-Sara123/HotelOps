import { View } from "react-native";
import { StatItem } from "./types";
import { StatCard } from "./StatCard";
import { dashboardStyles as styles } from "./styles";

interface StatsGridProps {
  stats: StatItem[];
}

export function StatsGrid({
  stats,
}: StatsGridProps) {
  return (
    <View style={styles.section}>
      <View style={styles.statsGrid}>
        {stats.map((item) => (
          <StatCard
            key={item.id}
            title={item.title}
            value={item.value}
            icon={item.icon as any}
          />
        ))}
      </View>
    </View>
  );
}