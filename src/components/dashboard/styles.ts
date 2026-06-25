import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const dashboardStyles = StyleSheet.create({
  // Screen
  screen: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 100,
  },

  // Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: COLORS.card,
    paddingHorizontal: 16,
    paddingVertical: 14,

    borderRadius: 16,
    marginBottom: 16,
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  hotelInfo: {
    marginLeft: 12,
  },

  hotelName: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.title,
  },

  roleText: {
    fontSize: 12,
    color: COLORS.muted,
    marginTop: 2,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,

    backgroundColor: COLORS.primary,

    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  // Section
  section: {
    marginBottom: 18,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 10,
  },

  // Stats Grid
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  statCard: {
    width: "48%",

    backgroundColor: COLORS.card,
    borderRadius: 14,

    padding: 14,
    marginBottom: 12,

    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 2,
  },

  statHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  statTitle: {
    fontSize: 12,
    color: COLORS.muted,
  },

  statValue: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.text,
    marginTop: 8,
  },

  // Occupancy Card
  occupancyCard: {
    backgroundColor: COLORS.card,
    borderRadius: 14,
    padding: 16,
  },

  progressTrack: {
    height: 10,
    borderRadius: 10,
    backgroundColor: "#e5e7eb",
    marginTop: 12,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: COLORS.primary,
    borderRadius: 10,
  },

  occupancyValue: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.primary,
  },

  // Quick Actions
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  actionCard: {
    width: "31%",
    backgroundColor: COLORS.card,
    borderRadius: 14,
    paddingVertical: 16,

    alignItems: "center",
    justifyContent: "center",
  },

  actionLabel: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: "600",
    color: COLORS.text,
    textAlign: "center",
  },

  // Availability Search
  searchCard: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 16,
  },

  dateInput: {
    height: 50,

    backgroundColor: COLORS.inputBg,

    borderWidth: 1,
    borderColor: COLORS.border,

    borderRadius: 12,

    paddingHorizontal: 14,
    marginBottom: 12,

    flexDirection: "row",
    alignItems: "center",
  },

  dateText: {
    marginLeft: 10,
    color: COLORS.text,
    fontSize: 14,
  },

  searchButton: {
    backgroundColor: COLORS.primary,
    height: 50,
    borderRadius: 12,

    alignItems: "center",
    justifyContent: "center",
  },

  searchButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },

  // Inventory
  inventoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  inventoryCard: {
    width: "31%",
    backgroundColor: COLORS.card,
    borderRadius: 14,
    paddingVertical: 14,

    alignItems: "center",
  },

  inventoryValue: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.primary,
  },

  inventoryLabel: {
    fontSize: 12,
    color: COLORS.muted,
    marginTop: 4,
  },

  // Activity
  activityCard: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 14,
  },

  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },

  activityContent: {
    flex: 1,
    marginLeft: 12,
  },

  activityName: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.text,
  },

  activityAction: {
    fontSize: 12,
    color: COLORS.muted,
    marginTop: 2,
  },

  activityTime: {
    fontSize: 11,
    color: COLORS.muted,
  },

  // FAB
  fab: {
    position: "absolute",

    bottom: 90,
    right: 20,

    width: 60,
    height: 60,

    borderRadius: 30,

    backgroundColor: COLORS.primary,

    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 8,
  },

  // Bottom Navigation
  bottomNav: {
    position: "absolute",

    left: 0,
    right: 0,
    bottom: 0,

    height: 75,

    backgroundColor: COLORS.card,

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingBottom: 8,
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },

  navLabel: {
    fontSize: 11,
    marginTop: 4,
    color: COLORS.muted,
  },

  navLabelActive: {
    color: COLORS.primary,
    fontWeight: "700",
  },
});