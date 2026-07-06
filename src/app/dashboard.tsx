import { ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AvailabilitySearch } from "../components/dashboard/AvailabilitySearch";
import { BottomNav } from "../components/dashboard/BottomNav";
import { DashboardHeader } from "../components/dashboard/DashboardHeader";
import { FloatingActionButton } from "../components/dashboard/FloatingActionButton";
import { InventorySummary } from "../components/dashboard/InventorySummary";
import { QuickActions } from "../components/dashboard/QuickActions";
import { RecentActivity } from "../components/dashboard/RecentActivity";
import { StatsGrid } from "../components/dashboard/StatsGrid";
import { dashboardStyles as styles } from "../components/dashboard/styles";
import { useDashboardData } from "../hooks/useDashboardData";

import { useRouter } from "expo-router";

export default function DashboardScreen() {
  const router = useRouter();
  const { property, statCards, quickActions, inventory, recentActivities } =
    useDashboardData();

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#f3f4f8" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <DashboardHeader
          hotelName={property.name}
          role={property.role}
          ownerName={property.ownerName}
        />

        <StatsGrid stats={statCards} />

        <QuickActions
          actions={quickActions}
          onActionPress={(action) => {
            console.log(action.title);
          }}
        />

        <AvailabilitySearch
          onCheckInPress={() => console.log("Check-In Date")}
          onCheckOutPress={() => console.log("Check-Out Date")}
          onSearchPress={() => console.log("Search Availability")}
        />

        <InventorySummary inventory={inventory} />

        <RecentActivity activities={recentActivities} />
      </ScrollView>

      <FloatingActionButton
        onPress={() => {
          console.log("Create Booking");
        }}
      />

      <BottomNav
        activeTab="dashboard"
        onTabPress={(tab) => {
          router.push(`/${tab}` as any);
        }}
      />
    </SafeAreaView>
  );
}
