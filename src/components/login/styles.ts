import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const loginStyles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: 18,
  },
  logoWrap: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  brandTitle: {
    fontSize: 29,
    fontWeight: "800",
    color: COLORS.title,
    textAlign: "center",
  },
  brandSubtitle: {
    fontSize: 13,
    color: COLORS.muted,
    textAlign: "center",
    marginTop: 6,
    lineHeight: 18,
    maxWidth: 260,
  },

  card: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 16,
    marginTop: 6,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 16,
  },

  fieldWrap: {
    marginBottom: 14,
  },
  label: {
    fontSize: 11,
    fontWeight: "700",
    color: COLORS.muted,
    marginBottom: 8,
    letterSpacing: 0.6,
  },
  inputWrap: {
    minHeight: 52,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.inputBg,
    borderRadius: 10,
    paddingLeft: 14,
    paddingRight: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  input: {
    flex: 1,
    color: COLORS.text,
    fontSize: 15,
    paddingVertical: 14,
  },

  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
    marginBottom: 18,
  },
  rememberWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  checkboxActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  rememberText: {
    fontSize: 12,
    color: COLORS.muted,
  },
  forgotText: {
    fontSize: 12,
    fontWeight: "700",
    color: COLORS.link,
  },

  button: {
    minHeight: 50,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPressed: {
    backgroundColor: COLORS.primaryDark,
    transform: [{ scale: 0.99 }],
  },
  buttonDisabled: {
    opacity: 0.65,
  },
  buttonInner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },

  banner: {
    marginTop: 18,
    height: 126,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#0f172a",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(9, 20, 43, 0.45)",
  },
  bannerContent: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 12,
  },
  bannerSmall: {
    fontSize: 9,
    color: "#dbeafe",
    fontWeight: "700",
    marginBottom: 4,
  },
  bannerTitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "800",
  },

  footerText: {
    textAlign: "center",
    color: COLORS.muted,
    fontSize: 12,
    marginTop: 24,
  },
  footerLink: {
    color: COLORS.link,
    fontWeight: "700",
  },

  screen: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 18,
    paddingTop: 34,
    paddingBottom: 28,
    justifyContent: "center",
  },
});