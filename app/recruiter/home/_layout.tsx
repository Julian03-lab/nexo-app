import { Tabs, useRouter } from "expo-router";
import React from "react";
import {
  NexoFullIcon,
  NexoIcon,
  NexoIconEmpty,
} from "../../../assets/icons/nexo-icon";
import { TouchableOpacity } from "react-native";
import {
  BackArrowIcon,
  LogOutIcon,
  NotificationIcon,
  PublishIcon,
} from "../../../assets/icons/icons";

const RecruiterLayout = () => {
  const router = useRouter();
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
        tabBarActiveTintColor: "#ab13ed",
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
        // headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: "/recruiter/home",
          headerTitle: (props) => <NexoIcon fill={"#1F2269"} {...props} />,
          tabBarIcon: (props) => (
            <NexoIconEmpty
              fill={props.focused ? "#ab13ed" : "#767575"}
              {...props}
            />
          ),
          tabBarLabel: "Nexo",
          tabBarActiveTintColor: "#ab13ed",
          headerLeft: (props) => (
            <TouchableOpacity onPress={() => router.back()}>
              <NotificationIcon />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            paddingLeft: 12,
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <LogOutIcon />
            </TouchableOpacity>
          ),
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
              fill={props.focused ? "#ab13ed" : "#767575"}
              {...props}
            />
          ),
          tabBarLabel: "Publicar",
          tabBarActiveTintColor: "#ab13ed",
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
