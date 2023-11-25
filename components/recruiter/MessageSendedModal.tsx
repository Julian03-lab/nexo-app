import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MessageSentIcon, PublishIcon } from "../../assets/icons/icons";

const MessageSendedModal = ({
  modalVisible,
  setModalVisible,
  callback,
}: {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  callback: any;
}) => {
  const handleSubmit = () => {
    callback();
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
              <MessageSentIcon fill={"#1AD9E5"} width={52} height={52} />
            </View>
            <Text style={styles.modalTitle}>El mensaje se envió con exito</Text>
            <TouchableHighlight
              onPress={handleSubmit}
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
                Home
              </Text>
            </TouchableHighlight>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export default MessageSendedModal;

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
