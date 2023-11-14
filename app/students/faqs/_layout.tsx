import { Stack } from "expo-router/stack";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="fundamentos" />
      <Stack.Screen name="carreras" />
      <Stack.Screen name="rubros" />
      <Stack.Screen name="conceptos" />
    </Stack>
  );
}
