import { Redirect } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function Index() {
  const { userToken, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0055A5" />
      </View>
    );
  }

  if (userToken) {
    return <Redirect href="/(app)" />;
  }

  return <Redirect href="/(auth)/login" />;
}