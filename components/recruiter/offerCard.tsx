import {
  Animated,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  DeleteIcon,
  EditIcon,
  MenuIcon,
  PersonIcon,
} from "../../assets/icons/icons";
import DeleteModal from "./DeleteModal";
import { useRouter } from "expo-router";
import useUserStore from "../../services/context";

type OfferCardProps = {
  data: {
    title: string;
    publisher: string;
    vacantes: number;
    aspirantes: number;
    experiencia: string;
    modalidad: string;
    id: number;
  };
};

const OfferCard = ({ data }: OfferCardProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const router = useRouter();
  const { user, setUser } = useUserStore();

  const deleteItem = (id: number) => {
    const data = user.publications.filter((item) => item.id !== id);
    setUser({ ...user, publications: data });
  };

  const toggleDespliegue = () => {
    setMenuOpen(!menuOpen);

    Animated.timing(animatedHeight, {
      toValue: menuOpen ? 0 : 64,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };
  return (
    <View style={styles.container}>
      <DeleteModal
        modalVisible={deleteModal}
        setModalVisible={setDeleteModal}
        callback={deleteItem}
        id={data.id}
      />
      <TouchableHighlight
        underlayColor="transparent"
        activeOpacity={0.5}
        style={styles.menuIcon}
        onPress={toggleDespliegue}
      >
        <MenuIcon />
      </TouchableHighlight>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.title}>{data.publisher}</Text>
      <View style={{ paddingHorizontal: 10 }}>
        <Text style={styles.item}>{`\u2022 Vacantes/${data.vacantes}`}</Text>
        <Text
          style={styles.item}
        >{`\u2022 Aspirantes/${data.aspirantes}`}</Text>
        <Text
          style={styles.item}
        >{`\u2022 Experiencia/${data.experiencia}`}</Text>
        <Text style={styles.item}>{`\u2022 Modalidad/${data.modalidad}`}</Text>
      </View>
      <View style={{ height: 1, backgroundColor: "#1AD9E5", marginTop: 10 }} />
      <Animated.View style={{ height: animatedHeight, overflow: "hidden" }}>
        <View style={styles.menu}>
          <TouchableHighlight
            underlayColor="transparent"
            activeOpacity={0.5}
            onPress={() =>
              router.push({
                pathname: "/recruiter/home/applicants",
                params: { job: data.id },
              })
            }
          >
            <View style={styles.menuItem}>
              <PersonIcon />
              <Text style={styles.menuText}>Aspirante</Text>
            </View>
          </TouchableHighlight>
          <View style={styles.menuItem}>
            <EditIcon />
            <Text style={styles.menuText}>Editar</Text>
          </View>
          <TouchableHighlight
            underlayColor="transparent"
            activeOpacity={0.5}
            onPress={() => setDeleteModal(!deleteModal)}
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

export default OfferCard;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    elevation: 2,
    width: "100%",
  },
  title: {
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    color: "#1F2269",
    paddingHorizontal: 10,
    width: "90%",
  },
  menuIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
  item: {
    color: "#1F2269",
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
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
