import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { DeleteIcon } from "../../assets/icons/icons";
import { useState } from "react";

const DeleteModal = ({
  modalVisible,
  setModalVisible,
}: {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [eliminado, setEliminado] = useState(false);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      statusBarTranslucent={true}
      onRequestClose={() => {
        setEliminado(false);
        setModalVisible(!modalVisible);
      }}
    >
      <TouchableOpacity
        style={styles.centeredView}
        activeOpacity={1}
        onPressOut={() => {
          setEliminado(false);
          setModalVisible(false);
        }}
      >
        <TouchableWithoutFeedback>
          <View style={styles.modalView}>
            <View style={styles.icon}>
              <DeleteIcon fill={"#FF6363"} width={52} height={52} />
            </View>
            {!eliminado ? (
              <>
                <Text style={styles.modalTitle}>
                  ¿Estas seguro de que quieres eliminar este empleo?
                </Text>
                <TouchableHighlight
                  onPress={() => setModalVisible(!modalVisible)}
                  style={styles.firstButton}
                  underlayColor="rgba(31, 34, 105, 0.50)"
                >
                  <Text
                    style={{
                      color: "#fff",
                      textAlign: "center",
                      fontSize: 16,
                      fontFamily: "Roboto_500Medium",
                    }}
                  >
                    Volver
                  </Text>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => setEliminado(!eliminado)}
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
                    Eliminar
                  </Text>
                </TouchableHighlight>
              </>
            ) : (
              <Text style={styles.eliminatedText}>El empleo fue eliminado</Text>
            )}
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export default DeleteModal;

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
