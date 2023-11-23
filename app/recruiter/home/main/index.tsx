import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useEffect, useMemo } from "react";
import {
  HandIcon,
  PublishButtonSVG,
  SearchIcon,
} from "../../../../assets/icons/icons";
import OfferCard from "../../../../components/recruiter/offerCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router/src/hooks";
import useUserStore from "../../../../services/context";

const main = () => {
  const [firstTime, setFirstTime] = React.useState(true);
  const [search, setSearch] = React.useState("");
  const { user } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      const data = await AsyncStorage.getItem("firstTimePublish");
      if (data) {
        setFirstTime(false);
      }
    };
    getData();
  }, []);

  if (!user) {
    return <></>;
  }

  const filterData = useMemo(() => {
    if (search === "") {
      return user.publications;
    }
    return user.publications.filter((item) =>
      item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }, [search, user.publications]);

  return (
    <SafeAreaView style={styles.containter}>
      <ScrollView>
        {firstTime && <HandIcon style={styles.handIcon} />}
        <View style={styles.header}>
          <Text style={styles.title}>¡Hola {user.name}!</Text>
          <Text style={styles.subtitle}>
            Este es un resumen de tus publicaciones
          </Text>
          <View style={styles.inputContainer}>
            <SearchIcon style={styles.searchIcon} />
            <TextInput
              keyboardType="web-search"
              style={styles.searchInput}
              placeholder="Buscar"
              placeholderTextColor="rgba(31, 34, 105, 0.50)"
              value={search}
              onChangeText={(text) => setSearch(text)}
            />
          </View>
        </View>
        <View
          style={{
            paddingVertical: 30,
            paddingHorizontal: 20,
            alignItems: "center",
            gap: 20,
          }}
        >
          {filterData.length === 0 && (
            <>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Roboto_400Regular",
                  color: "#1F2269",
                  textAlign: "center",
                  marginBottom: 30,
                }}
              >
                Actualmente no hay empleos publicados. Para hacerlo, haz clic en
                el botón "Publicar" o si prefieres también puedes hacerlo en la
                barra de navegación.
              </Text>
              <TouchableHighlight
                onPress={() => router.push("/recruiter/home/publish")}
                style={{
                  borderRadius: 200,
                }}
                underlayColor="transparent"
              >
                <PublishButtonSVG />
              </TouchableHighlight>
            </>
          )}
          {filterData.map((item) => (
            <OfferCard key={item.id} data={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default main;

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    backgroundColor: "#fff",
  },
  handIcon: {
    position: "absolute",
    bottom: 10,
    right: 20,
    zIndex: 1,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 22,
    paddingBottom: 30,
    paddingHorizontal: 23,
    backgroundColor: "#8CECF2",
  },
  title: {
    fontSize: 24,
    fontFamily: "Roboto_700Bold",
    color: "#1F2269",
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "Roboto_700Bold",
    color: "#1F2269",
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    position: "relative",
    marginTop: 30,
    backgroundColor: "rgba(255, 255, 255, 0.50)",
    borderRadius: 200,
  },
  searchIcon: {
    position: "absolute",
    top: "25%",
    right: 12,
    zIndex: 1,
  },
  searchInput: {
    color: "rgb(31, 34, 105)",
    width: "88%",
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontFamily: "Roboto_400Regular",
  },
});
