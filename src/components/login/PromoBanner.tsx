import { Image, Text, View } from "react-native";
import { loginStyles as styles } from "./styles";

export function PromoBanner() {
  return (
    <View style={styles.banner}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        }}
        style={styles.bannerImage}
      />
      <View style={styles.bannerOverlay} />
      <View style={styles.bannerContent}>
        <Text style={styles.bannerSmall}>MANAGEMENT PORTAL</Text>
        <Text style={styles.bannerTitle}>Operational Excellence</Text>
      </View>
    </View>
  );
}