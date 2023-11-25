import { Tabs, useRouter } from "expo-router";
import React from "react";
import { NexoIcon, NexoIconEmpty } from "../../../assets/icons/nexo-icon";
import { TouchableOpacity } from "react-native";
import {
  BackArrowIcon,
  CheckIcon,
  DeleteIcon,
  LogOutIcon,
  NotificationIcon,
  PublishIcon,
  SaveIcon,
} from "../../../assets/icons/icons";
import useUserStore from "../../../services/context";

const RecruiterLayout = () => {
  const router = useRouter();
  const { setUser } = useUserStore();

  const logout = () => {
    setUser(null);
    router.replace("/recruiter/");
  };

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#8CECF2",
        },
        headerTitleAlign: "center",
        headerTintColor: "#000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarActiveTintColor: "#03AEB9",
        tabBarStyle: {
          height: 64,
          paddingHorizontal: 10,
        },
        tabBarItemStyle: {
          paddingVertical: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="main"
        options={{
          href: "/recruiter/home/main",
          headerTitle: (props) => <NexoIcon fill={"#1F2269"} {...props} />,
          tabBarIcon: (props) => (
            <NexoIconEmpty
              fill={props.focused ? "#03AEB9" : "#767575"}
              {...props}
            />
          ),
          tabBarLabel: "Nexo",
          tabBarActiveTintColor: "#03AEB9",
          headerLeft: (props) => (
            <TouchableOpacity onPress={() => router.back()}>
              <NotificationIcon />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            paddingLeft: 12,
          },
          headerRight: () => (
            <TouchableOpacity onPress={logout}>
              <LogOutIcon />
            </TouchableOpacity>
          ),
          headerRightContainerStyle: {
            paddingRight: 12,
          },
        }}
      />

      <Tabs.Screen
        name="priorities"
        options={{
          href: "/recruiter/home/priorities",
          headerTitle: "Prioridades",
          headerTitleStyle: {
            fontFamily: "Roboto_700Bold",
            color: "#1F2269",
            fontSize: 20,
          },
          tabBarIcon: (props) => (
            <SaveIcon fill={props.focused ? "#03AEB9" : "#767575"} {...props} />
          ),
          tabBarLabel: "Prioridades",
          tabBarActiveTintColor: "#03AEB9",
          headerLeft: (props) => (
            <TouchableOpacity onPress={() => router.back()}>
              <BackArrowIcon />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            paddingLeft: 12,
          },
          headerRight: () => <NexoIcon fill={"#1F2269"} />,
          headerRightContainerStyle: {
            paddingRight: 12,
          },
        }}
      />
      <Tabs.Screen
        name="trash"
        options={{
          href: "/recruiter/home/trash",
          headerTitle: "Papelera",
          headerTitleStyle: {
            fontFamily: "Roboto_700Bold",
            color: "#1F2269",
            fontSize: 20,
          },
          tabBarIcon: (props) => (
            <DeleteIcon
              fill={props.focused ? "#03AEB9" : "#767575"}
              {...props}
            />
          ),
          tabBarLabel: "Papelera",
          tabBarActiveTintColor: "#03AEB9",
          headerLeft: (props) => (
            <TouchableOpacity onPress={() => router.back()}>
              <BackArrowIcon />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            paddingLeft: 12,
          },
          headerRight: () => <NexoIcon fill={"#1F2269"} />,
          headerRightContainerStyle: {
            paddingRight: 12,
          },
        }}
      />
      <Tabs.Screen
        name="publish"
        options={{
          href: "/recruiter/home/publish",
          headerTitle: "Publicar empleo",
          headerTitleStyle: {
            fontFamily: "Roboto_700Bold",
            color: "#1F2269",
            fontSize: 20,
          },
          tabBarIcon: (props) => (
            <PublishIcon
              fill={props.focused ? "#03AEB9" : "#767575"}
              {...props}
            />
          ),
          tabBarLabel: "Publicar",
          tabBarActiveTintColor: "#03AEB9",
          headerLeft: (props) => (
            <TouchableOpacity onPress={() => router.back()}>
              <BackArrowIcon />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            paddingLeft: 12,
          },
          headerRight: () => <NexoIcon fill={"#1F2269"} />,
          headerRightContainerStyle: {
            paddingRight: 12,
          },
        }}
      />
      <Tabs.Screen
        name="applicants"
        options={{
          href: null,
          headerTitle: "Aspirantes",
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
          headerLeftContainerStyle: {
            paddingLeft: 12,
          },
          headerRight: () => <NexoIcon fill={"#1F2269"} />,
          headerRightContainerStyle: {
            paddingRight: 12,
          },
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          href: null,
          headerTitle: "Estadísticas",
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
          headerLeftContainerStyle: {
            paddingLeft: 12,
          },
          headerRight: () => <NexoIcon fill={"#1F2269"} />,
          headerRightContainerStyle: {
            paddingRight: 12,
          },
        }}
      />
      <Tabs.Screen
        name="edit"
        options={{
          href: null,
          headerTitle: "Editar empleo",
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
          headerLeftContainerStyle: {
            paddingLeft: 12,
          },
          headerRight: () => <NexoIcon fill={"#1F2269"} />,
          headerRightContainerStyle: {
            paddingRight: 12,
          },
        }}
      />
    </Tabs>
  );
};

export default RecruiterLayout;
