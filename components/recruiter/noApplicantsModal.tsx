import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { PersonIcon } from "../../assets/icons/icons";

const NoApplicantModal = ({
  modalVisible,
  setModalVisible,
}: {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleSubmit = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      statusBarTranslucent={true}
      onRequestClose={handleSubmit}
    >
      <TouchableOpacity
        style={styles.centeredView}
        activeOpacity={1}
        onPressOut={handleSubmit}
      >
        <TouchableWithoutFeedback>
          <View style={styles.modalView}>
            <View style={styles.icon}>
              <PersonIcon fill={"#1AD9E5"} width={52} height={52} />
            </View>
            <Text style={styles.modalTitle}>
              Por el momento no hay aspirantes
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export default NoApplicantModal;

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
    paddingHorizontal: 48,
    paddingTop: 52,
    paddingBottom: 41,
    alignItems: "center",
    gap: 15,
    width: "90%",
  },
  modalTitle: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Roboto_700Bold",
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
    top: "-30%",
  },
});
