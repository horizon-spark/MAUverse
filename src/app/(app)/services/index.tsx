// src/app/(app)/services/index.tsx
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function ServicesScreen() {
  const router = useRouter();

  const services = [
    {
      id: "1",
      title: "Контакты",
      icon: "person-outline" as const,
      route: "/services/contacts",
    },
    {
      id: "2",
      title: "Телефоны АУП ВУЗа",
      icon: "call-outline" as const,
      route: "/services/phones",
    },
    {
      id: "3",
      title: "Долги",
      icon: "document-text-outline" as const,
      route: "/services/debts",
    },
    {
      id: "4",
      title: "Сервисы МАУ",
      icon: "construct-outline" as const,
      route: "/services/mau",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Сервисы</Text>
      </View>
      <View style={styles.grid}>
        {services.map((service) => (
          <TouchableOpacity
            key={service.id}
            style={styles.card}
            onPress={() => router.push(service.route as any)}
          >
            <Ionicons name={service.icon} size={45} color="#000" />
            <Text style={styles.cardTitle}>{service.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5" },
  header: {
    backgroundColor: "#0055A5",
    padding: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerTitle: { color: "white", fontSize: 20, fontWeight: "bold" },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 15,
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    marginBottom: 15,
    elevation: 3,
  },
  cardTitle: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
});
