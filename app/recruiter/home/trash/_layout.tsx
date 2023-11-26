import { Stack, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { BackArrowIcon } from "../../../../assets/icons/icons";
import { NexoIcon } from "../../../../assets/icons/nexo-icon";

const Layout = () => {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#8CECF2",
        },
        headerTitleAlign: "center",
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
          headerTitle: "Papelera",
        }}
      />
      <Stack.Screen
        name="junior"
        options={{
          headerTitle: "Papelera Junior",
        }}
      />
      <Stack.Screen
        name="semisenior"
        options={{
          headerTitle: "Papelera Semi Senior",
        }}
      />
      <Stack.Screen
        name="senior"
        options={{
          headerTitle: "Papelera Senior",
        }}
      />
    </Stack>
  );
};

export default Layout;
