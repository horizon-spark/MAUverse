// src/app/(app)/schedule.tsx
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ScheduleScreen() {
  const [selectedDay, setSelectedDay] = useState("16"); // По умолчанию выбран день (как на скриншоте)

  // Моковые дни недели
  const days = [
    { date: "16", day: "Пн" },
    { date: "17", day: "Вт" },
    { date: "18", day: "Ср" },
    { date: "19", day: "Чт" },
    { date: "20", day: "Пт" },
    { date: "21", day: "Сб" },
  ];

  // Моковые данные для выбранного дня
  const scheduleData = [
    {
      id: "1",
      start: "12:40",
      end: "14:15",
      type: "Лаб.",
      subject: "R: программирование и анализ данных",
      room: "113 (Ленина, 57)",
      teacher: "Лазарева Ирина Михайловна",
    },
    {
      id: "2",
      start: "14:45",
      end: "16:20",
      type: "Лекц.",
      subject: "Математическое моделирование",
      room: "106 (Ленина, 57)",
      teacher: "Богомолов Роман Анатольевич",
    },
    {
      id: "3",
      start: "16:30",
      end: "18:05",
      type: "Практ.",
      subject: "Математическое моделирование",
      room: "106 (Ленина, 57)",
      teacher: "Богомолов Роман Анатольевич",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Заголовок */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Расписание</Text>
      </View>

      {/* Горизонтальный список дней */}
      <View style={styles.daysContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
        >
          {days.map((item) => {
            const isSelected = selectedDay === item.date;
            return (
              <TouchableOpacity
                key={item.date}
                style={[styles.dayBox, isSelected && styles.dayBoxActive]}
                onPress={() => setSelectedDay(item.date)}
              >
                <Text
                  style={[styles.dayText, isSelected && styles.dayTextActive]}
                >
                  {item.date}
                </Text>
                <Text
                  style={[styles.dayName, isSelected && styles.dayNameActive]}
                >
                  {item.day}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Подзаголовок */}
      <View style={styles.subHeaderContainer}>
        <Text style={styles.subHeader}>Расписание на сегодня</Text>
      </View>

      {/* Список пар */}
      <ScrollView style={styles.listContainer}>
        {scheduleData.map((item) => (
          <View key={item.id} style={styles.scheduleItem}>
            <View style={styles.timeColumn}>
              <Text style={styles.startTime}>{item.start}</Text>
              <Text style={styles.endTime}>{item.end}</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.subject}>{item.subject}</Text>
              <Text style={styles.type}>{item.type}</Text>
              <Text style={styles.room}>{item.room}</Text>
              <Text style={styles.teacher}>{item.teacher}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
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
  daysContainer: {
    backgroundColor: "white",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  dayBox: {
    width: 50,
    height: 60,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    backgroundColor: "#F0F0F0",
  },
  dayBoxActive: { backgroundColor: "#0055A5" },
  dayText: { fontSize: 16, fontWeight: "bold", color: "#333" },
  dayTextActive: { color: "white" },
  dayName: { fontSize: 12, color: "#666", marginTop: 2 },
  dayNameActive: { color: "rgba(255,255,255,0.8)" },
  subHeaderContainer: {
    backgroundColor: "white",
    marginTop: 15,
    marginHorizontal: 15,
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  subHeader: { fontSize: 16, fontWeight: "bold", color: "#333" },
  listContainer: { flex: 1, padding: 15 },
  scheduleItem: { flexDirection: "row", marginBottom: 15 },
  timeColumn: { width: 60, alignItems: "center", paddingTop: 10 },
  startTime: { fontSize: 16, fontWeight: "bold", color: "#333" },
  endTime: { fontSize: 14, color: "#F28C28", marginTop: 5 },
  card: {
    flex: 1,
    backgroundColor: "#0055A5",
    borderRadius: 15,
    padding: 15,
    marginLeft: 10,
  },
  subject: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  type: { color: "rgba(255,255,255,0.8)", fontSize: 13, marginBottom: 5 },
  room: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 5,
  },
  teacher: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 13,
    fontStyle: "italic",
  },
});
