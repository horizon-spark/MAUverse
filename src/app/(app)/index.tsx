// src/app/(app)/index.tsx
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";

export default function HomeScreen() {
  const user = { name: "Денис Иванович Каравка" };

  const todaySchedule = [
    {
      id: "1",
      time: "12:40",
      end: "14:15",
      type: "Лаб.",
      subject: "R: программирование и анализ данных",
      room: "113 (Ленина, 57)",
      teacher: "Лазарева Ирина Михайловна",
    },
    {
      id: "2",
      time: "14:45",
      end: "16:20",
      type: "Лекц.",
      subject: "Математическое моделирование",
      room: "106 (Ленина, 57)",
      teacher: "Богомолов Роман Анатольевич",
    },
    {
      id: "3",
      time: "16:30",
      end: "18:05",
      type: "Практ.",
      subject: "Математическое моделирование",
      room: "106 (Ленина, 57)",
      teacher: "Богомолов Роман Анатольевич",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Доброго времени суток,</Text>
        <Text style={styles.name}>{user.name}!</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Обновления на курсах</Text>
        <View style={styles.card}>
          <Text style={styles.emptyText}>Новых обновлений нет</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Расписание на сегодня</Text>
        {todaySchedule.map((item) => (
          <View key={item.id} style={styles.scheduleCard}>
            <View style={styles.timeContainer}>
              <Text style={styles.time}>{item.time}</Text>
              <Text style={styles.timeEnd}>{item.end}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.subject}>{item.subject}</Text>
              <Text style={styles.details}>{item.type}</Text>
              <Text style={styles.room}>{item.room}</Text>
              <Text style={styles.teacher}>{item.teacher}</Text>
            </View>
          </View>
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
    paddingBottom: 25,
  },
  greeting: { color: "white", fontSize: 18 },
  name: { color: "white", fontSize: 22, fontWeight: "bold", marginTop: 5 },
  section: { marginTop: 20, paddingHorizontal: 15 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
  },
  emptyText: { color: "#888", fontSize: 14 },
  scheduleCard: {
    backgroundColor: "#0055A5",
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    flexDirection: "row",
  },
  timeContainer: { width: 60, justifyContent: "center", alignItems: "center" },
  time: { color: "white", fontSize: 18, fontWeight: "bold" },
  timeEnd: { color: "#F28C28", fontSize: 16, fontWeight: "bold", marginTop: 5 },
  infoContainer: { flex: 1, paddingLeft: 10 },
  subject: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 3,
  },
  details: { color: "rgba(255,255,255,0.8)", fontSize: 13, marginBottom: 3 },
  room: { color: "rgba(255,255,255,0.9)", fontSize: 13, marginBottom: 3 },
  teacher: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 12,
    fontStyle: "italic",
  },
});
