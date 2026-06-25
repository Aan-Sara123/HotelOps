export interface StatItem {
  id: string;
  title: string;
  value: string | number;
  icon: string;
}

export interface ActionItem {
  id: string;
  title: string;
  icon: string;
}

export interface InventoryItem {
  id: string;
  label: string;
  value: number;
}

export interface ActivityItem {
  id: string;
  guestName: string;
  action: string;
  time: string;
  icon: string;
}

export interface DashboardStats {
  availableRooms: number;
  bookedRooms: number;
  checkIns: number;
  checkOuts: number;
  occupancy: number;
}

export interface PropertyInfo {
  name: string;
  role: string;
  ownerName: string;
}