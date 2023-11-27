import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import NotificationCard from "../../../../components/recruiter/NotificationCard";
import { useRouter } from "expo-router";

const notificationsList = [
  {
    id: 1,
    applicants: 10,
    jobTitle: "Desarrollador/a de apps en Android",
    publisher: "Art Tech",
    jobID: 6,
  },
  {
    id: 2,
    applicants: 15,
    jobTitle: "Desarrollador/a web front-end en react",
    publisher: "Tecnology Five",
    jobID: 2,
  },
  {
    id: 3,
    applicants: 30,
    jobTitle: "Tester",
    publisher: "ABC Solutions",
    jobID: 1,
  },
  {
    id: 4,
    applicants: 15,
    jobTitle: "Desarrollador/a back-end en laravel",
    publisher: "Factory Z",
    jobID: 3,
  },
];

const notifications = () => {
  const router = useRouter();

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
            handlePress={() =>
              router.push({
                pathname: "/recruiter/home/applicants/" + item.jobID,
              })
            }
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
