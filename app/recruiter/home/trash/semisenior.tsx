import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useUserStore from "../../../../services/context";
import TrashView from "../../../../components/recruiter/trash/TrashView";

const semisenior = () => {
  const { user } = useUserStore();
  const userList = user.trash.filter((item) => item.type === "semisenior");

  return (
    <View style={{ flex: 1 }}>
      <TrashView users={userList} />
    </View>
  );
};

export default semisenior;
