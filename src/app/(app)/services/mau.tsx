// src/app/(app)/services/mau.tsx
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";

export default function MauServicesScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <Text style={styles.label}>ФИО (как в паспорте) *</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>E-mail *</Text>
      <TextInput style={styles.input} keyboardType="email-address" />

      <Text style={styles.label}>Телефон *</Text>
      <TextInput style={styles.input} keyboardType="phone-pad" />

      <Text style={styles.label}>Дата рождения *</Text>
      <TextInput style={styles.input} placeholder="ДД.ММ.ГГГГ" />

      <Text style={styles.label}>Факультет / институт *</Text>
      <View style={styles.picker}>
        <Text style={{ color: "#666" }}>—</Text>
      </View>

      <Text style={styles.label}>Форма обучения *</Text>
      <Text style={styles.radioOption}>○ очная</Text>
      <Text style={styles.radioOption}>○ заочная</Text>
      <Text style={styles.radioOption}>○ очно-заочная</Text>

      <Text style={styles.label}>Источник финансирования *</Text>
      <Text style={styles.radioOption}>○ бюджет</Text>
      <Text style={styles.radioOption}>○ договор</Text>

      <Text style={styles.label}>Количество справок *</Text>
      <View style={styles.picker}>
        <Text style={{ color: "#666" }}>—</Text>
      </View>

      <Text style={styles.label}>Место предоставления справки *</Text>
      <View style={styles.picker}>
        <Text style={{ color: "#666" }}>—</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", padding: 15 },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginTop: 15,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 5,
    padding: 10,
    fontSize: 14,
  },
  picker: { borderWidth: 1, borderColor: "#CCC", borderRadius: 5, padding: 12 },
  radioOption: { fontSize: 14, color: "#333", marginVertical: 3 },
});
