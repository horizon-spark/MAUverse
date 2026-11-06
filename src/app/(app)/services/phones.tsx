// src/app/(app)/services/phones.tsx
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function PhonesScreen() {
  const phones = [
    { id: "1", title: "Руководство" },
    { id: "2", title: "Ученый совет" },
    { id: "3", title: "Административный аппарат ректора" },
    { id: "4", title: "Медико-биологический институт" },
    {
      id: "5",
      title: "Институт интеллектуальных систем и цифровых технологий",
    },
    { id: "6", title: "Институт креативных индустрий и предпринимательства" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.titleCard}>
        <Text style={styles.titleText}>Контактная информация АУП ВУЗа</Text>
      </View>
      <FlatList
        data={phones}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemSub}>
              Нажмите, чтобы посмотреть контакты
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ padding: 15 }}
      />
      <Text style={styles.pagination}>{"<  1 из 7  >"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5" },
  titleCard: {
    backgroundColor: "white",
    margin: 15,
    marginBottom: 0,
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
  },
  titleText: { fontSize: 16, fontWeight: "bold", textAlign: "center" },
  listItem: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  itemSub: { fontSize: 12, color: "#666" },
  pagination: {
    textAlign: "center",
    padding: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
});
