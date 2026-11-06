// src/app/(app)/services/debts.tsx
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DebtsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.warningCard}>
        <Text style={styles.warningTitle}>Ваши задолженности*</Text>
        <Text style={styles.warningSub}>
          *На данный момент информация может быть не точной
        </Text>
      </View>

      <TouchableOpacity style={styles.semesterCard}>
        <Text style={styles.semesterTitle}>Четвертый семестр</Text>
        <Text style={styles.semesterSub}>
          Нажмите, чтобы увидеть задолженности
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5", padding: 15 },
  warningCard: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    marginBottom: 15,
  },
  warningTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
  warningSub: { fontSize: 12, color: "#666" },
  semesterCard: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
  },
  semesterTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
  semesterSub: { fontSize: 12, color: "#666" },
});
