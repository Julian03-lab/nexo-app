import { Stack, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { BackArrowIcon } from "../../assets/icons/icons";
import { NexoIcon } from "../../assets/icons/nexo-icon";

const Layout = () => {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#8CE2C8",
        },
        headerTitleAlign: "center",
        // headerTintColor: "#000",
        headerTitleStyle: {
          fontFamily: "Roboto_700Bold",
          color: "#1F2269",
          fontSize: 20,
        },
        headerLeft: (props) => (
          <TouchableOpacity onPress={() => router.back()}>
            <BackArrowIcon />
          </TouchableOpacity>
        ),
        headerRight: () => <NexoIcon fill={"#1F2269"} />,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Empleos",
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          headerTitle: "Vista de empleos",
        }}
      />
    </Stack>
  );
};

export default Layout;
