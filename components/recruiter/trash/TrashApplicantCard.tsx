import {
  Animated,
  Linking,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  CVIcon,
  DeleteForeverIcon,
  DeleteIcon,
  EmailIcon,
  MenuIcon,
  SaveIcon,
  StatsIcon,
} from "../../../assets/icons/icons";
import Resume from "../Resume";
import { useRouter } from "expo-router";
import useUserStore from "../../../services/context";
import MoveUserModal from "./MoveUserModal";
import DeleteModal from "../DeleteModal";

const TrashApplicantCard = ({
  email,
  date,
  job,
  id,
  type,
}: {
  email: string;
  date: string;
  job: string;
  id: number;
  type: string;
}) => {
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const router = useRouter();
  const { setUser, user } = useUserStore();
  const [deleteModal, setDeleteModal] = useState(false);
  const [moveModal, setMoveModal] = useState(false);

  const toggleDespliegue = () => {
    setMenuOpen(!menuOpen);
    setResumeOpen(false);

    Animated.timing(animatedHeight, {
      toValue: menuOpen ? 0 : 64,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const moveUser = (to: string) => {
    const newUser = user.trash.filter((item) => item.id !== id);
    const newTrash = newUser.concat({
      id,
      job,
      email,
      date,
      type: to,
    });

    setUser({
      ...user,
      trash: newTrash,
    });
  };

  const deleteUser = () => {
    const newUser = user.trash.filter((item) => item.id !== id);

    setUser({
      ...user,
      trash: newUser,
    });
  };

  return (
    <>
      <MoveUserModal
        type={type}
        modalVisible={moveModal}
        setModalVisible={setMoveModal}
        callback={moveUser}
        email={email}
      />
      <DeleteModal
        callback={deleteUser}
        id={id}
        modalVisible={deleteModal}
        setModalVisible={setDeleteModal}
        aspirant
      />
      <View style={styles.card}>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "column",
              gap: 5,
              width: "95%",
            }}
          >
            <Text style={styles.text}>{job}</Text>
            <Text style={styles.text}>{email}</Text>
            <Text style={styles.text}>{date}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "flex-start",
            }}
          >
            <TouchableHighlight
              underlayColor="transparent"
              activeOpacity={0.5}
              onPress={toggleDespliegue}
            >
              <MenuIcon />
            </TouchableHighlight>
          </View>
        </View>
        <Animated.View style={{ height: animatedHeight, overflow: "hidden" }}>
          <View style={{ height: 1, backgroundColor: "#FF6584" }} />
          <View style={styles.menu}>
            <TouchableHighlight
              underlayColor="transparent"
              activeOpacity={0.5}
              onPress={() => setResumeOpen(!resumeOpen)}
            >
              <View style={styles.menuItem}>
                <CVIcon fill={resumeOpen && "#FF6584"} />
                <Text
                  style={{
                    ...styles.menuText,
                    color: resumeOpen ? "#FF6584" : "#767575",
                  }}
                >
                  CV
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="transparent"
              activeOpacity={0.5}
              onPress={() =>
                Linking.openURL(
                  `mailto:${email}?subject=Acerca de la oferta del puesto de ${job} publicada en Nexo`
                )
              }
            >
              <View style={styles.menuItem}>
                <EmailIcon />
                <Text style={styles.menuText}>Contactar</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="transparent"
              activeOpacity={0.5}
              onPress={() => router.push(`/recruiter/home/stats`)}
            >
              <View style={styles.menuItem}>
                <StatsIcon />
                <Text style={styles.menuText}>Estadísticas</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="transparent"
              activeOpacity={0.5}
              onPress={() => setMoveModal(!moveModal)}
            >
              <View style={styles.menuItem}>
                <DeleteIcon />
                <Text style={styles.menuText}>Mover</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="transparent"
              activeOpacity={0.5}
              onPress={() => setDeleteModal(!moveModal)}
            >
              <View style={styles.menuItem}>
                <DeleteForeverIcon />
                <Text style={styles.menuText}>Eliminar</Text>
              </View>
            </TouchableHighlight>
          </View>
        </Animated.View>
      </View>
      {resumeOpen && <Resume />}
    </>
  );
};

export default TrashApplicantCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 5,
    elevation: 4,
  },
  container: {
    padding: 13,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    color: "#1C1B1F",
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  menuItem: {
    alignItems: "center",
    gap: 3,
  },
  menuText: {
    fontSize: 12,
    fontFamily: "Roboto_400Regular",
    color: "#767575",
    textAlign: "center",
  },
});
