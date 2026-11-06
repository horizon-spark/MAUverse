// src/app/(app)/services/_layout.tsx
import { Stack } from "expo-router";

export default function ServicesLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="contacts"
        options={{
          headerShown: true,
          title: "Контакты преподавателя",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#0055A5" },
        }}
      />
      <Stack.Screen
        name="phones"
        options={{
          headerShown: true,
          title: "Телефоны",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#0055A5" },
        }}
      />
      <Stack.Screen
        name="debts"
        options={{
          headerShown: true,
          title: "Задолженность",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#0055A5" },
        }}
      />
      <Stack.Screen
        name="mau"
        options={{
          headerShown: true,
          title: "Сервисы МАУ",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#0055A5" },
        }}
      />
    </Stack>
  );
}
