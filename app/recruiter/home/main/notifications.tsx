import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import NotificationCard from "../../../../components/recruiter/NotificationCard";

const notificationsList = [
  {
    id: 1,
    applicants: 10,
    jobTitle: "Desarrollador full stack senior",
    publisher: "ABC Tecnology",
  },
  {
    id: 2,
    applicants: 15,
    jobTitle: "Desarrollador/a web front-end en react",
    publisher: "ZETA Tecnology",
  },
  {
    id: 3,
    applicants: 30,
    jobTitle: "Tester",
    publisher: "Tecnology Five",
  },
  {
    id: 4,
    applicants: 15,
    jobTitle: "Desarrollador/a back-end en laravel",
    publisher: "Factory Z",
  },
];

const notifications = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          gap: 20,
          paddingVertical: 38,
          paddingHorizontal: 20,
        }}
      >
        {notificationsList.map((item) => (
          <NotificationCard
            applicants={item.applicants}
            jobName={item.jobTitle}
            publisher={item.publisher}
            key={item.id}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default notifications;

const styles = StyleSheet.create({});
