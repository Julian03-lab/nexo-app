import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from "react-native";
import { DeleteIcon, MoveTrashIcon } from "../../../assets/icons/icons";

const MoveUserModal = ({
  modalVisible,
  setModalVisible,
  callback,
  email,
  type,
}) => {
  const [eliminado, setEliminado] = useState(false);
  const [to, setTo] = useState("");

  const handleDelete = () => {
    if (!eliminado) {
      setModalVisible(false);
      return;
    }

    callback(to);
    setModalVisible(false);
  };
  return (
    <Modal
      visible={modalVisible}
      animationType="fade"
      transparent={true}
      onRequestClose={handleDelete}
    >
      <TouchableOpacity
        style={styles.centeredView}
        activeOpacity={1}
        onPressOut={handleDelete}
      >
        <TouchableWithoutFeedback>
          <View style={styles.modalView}>
            <View style={styles.icon}>
              <MoveTrashIcon fill={"#FF6363"} width={52} height={52} />
            </View>
            {!eliminado ? (
              <>
                <Text style={styles.modalTitle}>Mover a papelera</Text>
                <TouchableHighlight
                  disabled={type === "junior"}
                  onPress={() => {
                    setTo("junior");
                    setEliminado(true);
                  }}
                  style={styles.secondButton}
                  underlayColor="rgba(31, 34, 105, 0.20)"
                >
                  <Text
                    style={{
                      color: "#FF6363",
                      textAlign: "center",
                      fontSize: 16,
                      fontFamily: "Roboto_500Medium",
                    }}
                  >
                    Junior
                  </Text>
                </TouchableHighlight>
                <TouchableHighlight
                  disabled={type === "semisenior"}
                  onPress={() => {
                    setTo("semisenior");
                    setEliminado(true);
                  }}
                  style={styles.secondButton}
                  underlayColor="rgba(31, 34, 105, 0.20)"
                >
                  <Text
                    style={{
                      color: "#FF6363",
                      textAlign: "center",
                      fontSize: 16,
                      fontFamily: "Roboto_500Medium",
                    }}
                  >
                    Semi-Senior
                  </Text>
                </TouchableHighlight>
                <TouchableHighlight
                  disabled={type === "senior"}
                  onPress={() => {
                    setTo("senior");
                    setEliminado(true);
                  }}
                  style={styles.secondButton}
                  underlayColor="rgba(31, 34, 105, 0.20)"
                >
                  <Text
                    style={{
                      color: "#FF6363",
                      textAlign: "center",
                      fontSize: 16,
                      fontFamily: "Roboto_500Medium",
                    }}
                  >
                    Senior
                  </Text>
                </TouchableHighlight>
              </>
            ) : (
              <Text style={styles.eliminatedText}>
                Se movio con exito a {email}
              </Text>
            )}
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
    alignItems: "center",
    gap: 15,
    width: "90%",
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
    top: "-15%",
  },
  firstButton: {
    backgroundColor: "#1F2269",
    borderRadius: 100,
    paddingVertical: 12,
    width: "100%",
  },
  secondButton: {
    backgroundColor: "#fff",
    borderRadius: 100,
    paddingVertical: 12,
    borderColor: "#FF6363",
    borderWidth: 1,
    width: "100%",
  },
  eliminatedText: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Roboto_700Bold",
    color: "#1F2269",
    marginVertical: 34,
  },
});

export default MoveUserModal;
