import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="[job]" getId={({ params }) => params.job} />
    </Stack>
  );
};

export default Layout;
