import React from "react";
import { Tabs, useRouter } from "expo-router";
import {
  NexoFullIcon,
  NexoIcon,
  NexoIconEmpty,
} from "../../assets/icons/nexo-icon";
import {
  BackArrowIcon,
  CarreersIcon,
  HeadingsIcon,
  SugerenceIcon,
} from "../../assets/icons/icons";
import { TouchableOpacity } from "react-native";

const StackLayout = () => {
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fff",
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
          href: "/",
          headerTitle: (props) => <NexoFullIcon fill={"#ab13ed"} {...props} />,
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
              <BackArrowIcon />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            paddingLeft: 24,
          },
          headerRight: () => null,
          headerRightContainerStyle: {
            paddingRight: 24,
          },
        }}
      />
      <Tabs.Screen
        name="carreers"
        options={{
          href: "/students/carreers/",
          headerTitle: "Carreras",
          headerTitleStyle: {
            fontWeight: "600",
            color: "#767575",
            fontSize: 20,
          },
          headerLeft: (props) => (
            <TouchableOpacity onPress={() => router.back()}>
              <BackArrowIcon />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            paddingLeft: 24,
          },
          headerRight: (props) => <NexoIcon fill={"#ab13ed"} {...props} />,
          headerRightContainerStyle: {
            paddingRight: 12,
          },
          tabBarLabel: "Carreras",
          tabBarIcon: (props) => (
            <CarreersIcon
              fill={props.focused ? "#ab13ed" : "#000"}
              {...props}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="headings"
        options={{
          href: "/students/headings",
          headerTitle: "Rubros ",
          headerRight: (props) => <NexoIcon fill={"#ab13ed"} {...props} />,
          headerLeft: (props) => (
            <TouchableOpacity onPress={() => router.back()}>
              <BackArrowIcon />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            paddingLeft: 24,
          },
          headerRightContainerStyle: {
            paddingRight: 12,
          },
          tabBarLabel: "Rubros",
          tabBarIcon: (props) => (
            <HeadingsIcon
              fill={props.focused ? "#ab13ed" : "#000"}
              {...props}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="sugerences"
        options={{
          href: "/students/sugerences",
          headerTitle: "Sugerencias",
          headerRight: (props) => <NexoIcon fill={"#ab13ed"} {...props} />,
          headerLeft: (props) => (
            <TouchableOpacity onPress={() => router.back()}>
              <BackArrowIcon />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            paddingLeft: 24,
          },
          headerRightContainerStyle: {
            paddingRight: 12,
          },
          tabBarLabel: "Sugerencias",
          tabBarIcon: (props) => (
            <SugerenceIcon
              fill={props.focused ? "#ab13ed" : "#000"}
              {...props}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default StackLayout;
