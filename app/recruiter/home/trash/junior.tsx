import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useUserStore from "../../../../services/context";
import TrashView from "../../../../components/recruiter/trash/TrashView";
import { TrashDrawSVG } from "../../../../assets/images/undraw/trashDrawSVG";

const junior = () => {
  const { user } = useUserStore();
  const userList = user.trash.filter((item) => item.type === "junior");

  return (
    <View style={{ flex: 1 }}>
      {userList.length > 0 ? (
        <TrashView users={userList} />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 55,
            gap: 24,
            backgroundColor: "#fff",
          }}
        >
          <TrashDrawSVG />
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Roboto_400Regular",
              color: "#1f2269",
            }}
          >
            Actualmente la papelera esta vacía
          </Text>
        </View>
      )}
    </View>
  );
};

export default junior;
