import {
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { HappyFace } from "../../assets/icons/icons";
import { useRouter } from "expo-router/src/hooks";

const RecoveryModal = ({
  modalVisible,
  setModalVisible,
}: {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      statusBarTranslucent={true}
      onRequestClose={() => {
        router.push("/recruiter/login/new-password");
        setModalVisible(!modalVisible);
      }}
    >
      <TouchableOpacity
        style={styles.centeredView}
        activeOpacity={1}
        onPressOut={() => {
          router.push("/recruiter/login/new-password");
          setModalVisible(false);
        }}
      >
        <TouchableWithoutFeedback>
          <View style={styles.modalView}>
            <View style={styles.icon}>
              <HappyFace />
            </View>
            <Text style={styles.modalTitle}>Revisa tu Correo electrónico</Text>
            <Text style={styles.modalText}>
              Te enviamos las instrucciones para recuperar tu contraseña.
              Recuerda revisar los correos de spam.
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export default RecoveryModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
    alignItems: "center",
  },
  modalTitle: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    color: "#1F2269",
    marginBottom: 2,
  },
  modalText: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: "Roboto_400Regular",
    color: "#33414F",
    lineHeight: 21,
  },
  icon: {
    backgroundColor: "#fff",
    borderRadius: 100,
    padding: 8,
    position: "absolute",
    top: "-40%",
  },
});
