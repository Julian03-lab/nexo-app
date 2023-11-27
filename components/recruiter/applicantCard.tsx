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
  DeleteIcon,
  EmailIcon,
  MenuIcon,
  StatsIcon,
} from "../../assets/icons/icons";
import Resume from "./Resume";
import { useRouter } from "expo-router";
import useUserStore from "../../services/context";
import MoveUserModal from "./trash/MoveUserModal";

const ApplicantCard = ({ email, job }: { email: string; job: string }) => {
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const router = useRouter();
  const { setUser, user } = useUserStore();
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

  const todayDate = new Date().toLocaleDateString("es-ES", {
    day: "numeric",
    month: "numeric",
    year: "2-digit",
  });

  console.log(todayDate);

  const moveUser = (to: string) => {
    const newTrash = user.trash.concat({
      id: user.trash.length + 1,
      job,
      email,
      date: todayDate,
      type: to,
    });

    setUser({
      ...user,
      trash: newTrash,
    });
  };

  return (
    <>
      <MoveUserModal
        type={""}
        modalVisible={moveModal}
        setModalVisible={setMoveModal}
        callback={moveUser}
        email={email}
      />
      <View style={styles.card}>
        <View style={styles.container}>
          <Text style={styles.text}>{email}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
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
          <View style={{ height: 1, backgroundColor: "#1AD9E5" }} />
          <View style={styles.menu}>
            <TouchableHighlight
              underlayColor="transparent"
              activeOpacity={0.5}
              onPress={() => setResumeOpen(!resumeOpen)}
            >
              <View style={styles.menuItem}>
                <CVIcon fill={resumeOpen && "#03AEB9"} />
                <Text
                  style={{
                    ...styles.menuText,
                    color: resumeOpen ? "#03AEB9" : "#767575",
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
          </View>
        </Animated.View>
      </View>
      {resumeOpen && <Resume />}
    </>
  );
};

export default ApplicantCard;

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
    fontFamily: "Roboto_400Regular",
    color: "#1C1B1F",
    maxWidth: "90%",
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
