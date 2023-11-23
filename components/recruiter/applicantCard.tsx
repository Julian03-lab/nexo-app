import {
  Animated,
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

const ApplicantCard = ({ email }: { email: string }) => {
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDespliegue = () => {
    setMenuOpen(!menuOpen);

    Animated.timing(animatedHeight, {
      toValue: menuOpen ? 0 : 64,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <Text style={styles.text}>{email}</Text>
        <TouchableHighlight
          underlayColor="transparent"
          activeOpacity={0.5}
          onPress={toggleDespliegue}
        >
          <MenuIcon />
        </TouchableHighlight>
      </View>
      <Animated.View style={{ height: animatedHeight, overflow: "hidden" }}>
        <View style={{ height: 1, backgroundColor: "#1AD9E5" }} />
        <View style={styles.menu}>
          <TouchableHighlight
            underlayColor="transparent"
            activeOpacity={0.5}
            // onPress={() => router.push(`/recruiter/home/main/${data.id}`)}
          >
            <View style={styles.menuItem}>
              <CVIcon />
              <Text style={styles.menuText}>CV</Text>
            </View>
          </TouchableHighlight>
          <View style={styles.menuItem}>
            <EmailIcon />
            <Text style={styles.menuText}>Contactar</Text>
          </View>
          <TouchableHighlight
            underlayColor="transparent"
            activeOpacity={0.5}
            // onPress={() => router.push(`/recruiter/home/main/${data.id}`)}
          >
            <View style={styles.menuItem}>
              <StatsIcon />
              <Text style={styles.menuText}>Estadísticas</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="transparent"
            activeOpacity={0.5}
            // onPress={() => setDeleteModal(!deleteModal)}
          >
            <View style={styles.menuItem}>
              <DeleteIcon />
              <Text style={styles.menuText}>Eliminar</Text>
            </View>
          </TouchableHighlight>
        </View>
      </Animated.View>
    </View>
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
