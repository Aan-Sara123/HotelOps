import { useMemo } from "react";
import {
  ActionItem,
  ActivityItem,
  DashboardStats,
  InventoryItem,
  PropertyInfo,
  StatItem,
} from "../components/dashboard/types";

export function useDashboardData() {
  // Later this comes from Supabase
  const property: PropertyInfo = {
    name: "HotelOps Demo Hotel",
    role: "OWNER",
    ownerName: "Hotel Owner",
  };

  // Dashboard Stats
  const stats: DashboardStats = {
    availableRooms: 14,
    bookedRooms: 32,
    checkIns: 8,
    checkOuts: 12,
    occupancy: 68,
  };

  // Stat Cards
  const statCards: StatItem[] = useMemo(
    () => [
      {
        id: "1",
        title: "Available Rooms",
        value: stats.availableRooms,
        icon: "bed-outline",
      },
      {
        id: "2",
        title: "Booked Rooms",
        value: stats.bookedRooms,
        icon: "calendar-outline",
      },
      {
        id: "3",
        title: "Check-Ins",
        value: stats.checkIns,
        icon: "log-in-outline",
      },
      {
        id: "4",
        title: "Check-Outs",
        value: stats.checkOuts,
        icon: "log-out-outline",
      },
    ],
    [stats]
  );

  // Quick Actions
  const quickActions: ActionItem[] = [
    {
      id: "1",
      title: "New Booking",
      icon: "add-circle-outline",
    },
    {
      id: "2",
      title: "Check-In",
      icon: "enter-outline",
    },
    {
      id: "3",
      title: "Check-Out",
      icon: "exit-outline",
    },
  ];

  // Inventory Summary
  const inventory: InventoryItem[] = [
    {
      id: "1",
      label: "Available",
      value: 14,
    },
    {
      id: "2",
      label: "Occupied",
      value: 32,
    },
    {
      id: "3",
      label: "Maintenance",
      value: 4,
    },
  ];

  // Recent Activity
  const recentActivities: ActivityItem[] = [
    {
      id: "1",
      guestName: "John Mathew",
      action: "Checked In",
      time: "10 min ago",
      icon: "log-in-outline",
    },
    {
      id: "2",
      guestName: "Sarah Thomas",
      action: "Checked Out",
      time: "25 min ago",
      icon: "log-out-outline",
    },
    {
      id: "3",
      guestName: "Robert George",
      action: "Payment Received",
      time: "1 hour ago",
      icon: "cash-outline",
    },
    {
      id: "4",
      guestName: "Anna Joseph",
      action: "Booking Created",
      time: "2 hours ago",
      icon: "calendar-outline",
    },
  ];

  return {
    property,
    stats,
    statCards,
    quickActions,
    inventory,
    recentActivities,
  };
}