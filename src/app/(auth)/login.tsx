// app/(auth)/login.tsx
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useAuth } from "../../context/AuthContext";

export default function LoginScreen() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    if (!login || !password) {
      Alert.alert("Ошибка", "Введите логин и пароль");
      return;
    }

    setIsLoading(true);
    try {
      // ЗДЕСЬ БУДЕТ ВАШ ЗАПРОС К FASTAPI
      // const response = await axios.post('https://ваш-сервер/api/auth', { login, password });
      // const token = response.data.token;

      // Временная заглушка для теста:
      const mockToken = "test-token-123";

      await signIn(mockToken);
      router.replace("/(app)");
    } catch (error) {
      Alert.alert("Ошибка", "Неверный логин или пароль");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Логотип МАУ (замените на ваш ассет) */}
        <Text style={styles.logo}>МАУ</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Авторизация</Text>

        <Text style={styles.label}>Ваш логин ЭИОС</Text>
        <TextInput
          style={styles.input}
          placeholder="Введите ваш логин"
          value={login}
          onChangeText={setLogin}
          autoCapitalize="none"
        />

        <Text style={styles.label}>Ваш пароль ЭИОС</Text>
        <TextInput
          style={styles.input}
          placeholder="Введите ваш пароль"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>
            {isLoading ? "Загрузка..." : "Авторизироваться"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    padding: 20,
  },
  header: { alignItems: "center", marginBottom: 30 },
  logo: { fontSize: 40, fontWeight: "bold", color: "#0055A5" },
  card: { backgroundColor: "#0055A5", borderRadius: 20, padding: 25 },
  title: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },
  label: { color: "white", marginBottom: 5, fontSize: 16 },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    color: "white",
    marginBottom: 20,
    paddingVertical: 8,
  },
  button: {
    backgroundColor: "#F28C28",
    borderRadius: 25,
    padding: 15,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});
