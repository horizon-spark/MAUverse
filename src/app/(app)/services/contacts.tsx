// src/app/(app)/services/contacts.tsx
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function ContactsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchCard}>
        <Text style={styles.searchTitle}>Поиск контактов преподавателя</Text>
        <View style={styles.inputRow}>
          <TextInput style={styles.input} placeholder="Введите ФИО" />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Найти</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Контактные данные преподавателя</Text>
        <Text style={styles.teacherName}>ЛЯШ ОЛЕГ ИВАНОВИЧ</Text>
        <Text style={styles.teacherRole}>заведующий кафедрой</Text>
        <Text style={styles.contactText}>Почта: lyash.oi@mauniver.ru</Text>
        <Text style={styles.contactText}>Тел.: -</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5", padding: 15 },
  searchCard: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
  searchTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#0055A5",
  },
  input: { flex: 1, paddingVertical: 10 },
  button: {
    backgroundColor: "#0055A5",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: { color: "white", fontWeight: "bold" },
  infoCard: { backgroundColor: "white", borderRadius: 15, padding: 20 },
  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  teacherName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F28C28",
    textAlign: "center",
    marginBottom: 5,
  },
  teacherRole: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    marginBottom: 15,
  },
  contactText: { fontSize: 14, color: "#333", marginBottom: 5 },
});
