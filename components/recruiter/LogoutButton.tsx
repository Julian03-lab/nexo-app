import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { LogOutIcon } from "../../assets/icons/icons";
import { useRouter } from "expo-router";
import useUserStore from "../../services/context";
import LogoutModal from "./LogoutModal";

const LogoutButton = () => {
  const router = useRouter();
  const { setUser } = useUserStore();
  const [modal, setModal] = useState(false);

  const logout = () => {
    setUser(null);
    router.replace("/recruiter/");
  };
  return (
    <>
      <LogoutModal
        modalVisible={modal}
        setModalVisible={setModal}
        callback={logout}
      />
      <TouchableOpacity onPress={() => setModal(true)}>
        <LogOutIcon />
      </TouchableOpacity>
    </>
  );
};

export default LogoutButton;
