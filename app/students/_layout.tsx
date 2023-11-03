import React from "react";
import { Tabs, useRouter } from "expo-router";
import { NexoFullIcon, NexoIcon } from "../../assets/icons/nexo-icon";
import {
  BackArrowIcon,
  CarreersIcon,
  HeadingsIcon,
  SugerenceIcon,
} from "../../assets/icons/icons";
import { TouchableHighlight, TouchableOpacity } from "react-native";

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
          height: 62,
          paddingHorizontal: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          display: "none",
        },
        // headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: "../",
          headerTitle: (props) => <NexoFullIcon fill={"#ab13ed"} {...props} />,
          tabBarIcon: (props) => (
            <NexoFullIcon
              width={69}
              height={43}
              fill={props.focused ? "#ab13ed" : "#000"}
              {...props}
            />
          ),
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
          href: "/students/carreers",
          headerTitle: "Carreras",
          headerRight: (props) => <NexoIcon {...props} />,
          headerRightContainerStyle: {
            paddingRight: 12,
          },
          tabBarLabel: "Carreras",
          tabBarLabelStyle: { display: "flex", paddingBottom: 5 },
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
          headerRight: (props) => <NexoIcon {...props} />,
          headerRightContainerStyle: {
            paddingRight: 12,
          },
          tabBarLabel: "Rubros",
          tabBarLabelStyle: { display: "flex", paddingBottom: 5 },
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
          headerRight: (props) => <NexoIcon {...props} />,
          headerRightContainerStyle: {
            paddingRight: 12,
          },
          tabBarLabel: "Sugerencias",
          tabBarLabelStyle: { display: "flex", paddingBottom: 5 },
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
