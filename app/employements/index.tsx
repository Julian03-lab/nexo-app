import {
  Animated,
  Easing,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useMemo, useRef, useState } from "react";
import EmployementSVG from "../../assets/images/undraw/employementsDraw";
import { IconArrow, SearchIcon } from "../../assets/icons/icons";
import JobCard from "../../components/employements/JobCard";
import ButtonChip from "../../components/ButtonChip";
import { dataList } from "../../assets/info/jobsList";

const chips = [
  { value: "tester", label: "Tester" },
  { value: "soporte técnico", label: "Soporte técnico" },
  { value: "diseño web", label: "Diseño web" },
  { value: "UX/UI", label: "UX/UI" },
  { value: "videojuegos", label: "Videojuegos" },
  { value: "desarrollador", label: "Desarrollador" },
  { value: "IA", label: "IA" },
  { value: "redes", label: "Redes" },
];

const index = () => {
  const [query, setQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [filter, setFilter] = useState([]);
  const animatedRotation = useRef(new Animated.Value(0)).current;
  const animatedOpen = useRef(new Animated.Value(0)).current;

  const jobList = dataList;

  const handleClick = (string) => {
    if (filter.includes(string)) {
      setFilter(filter.filter((item) => item !== string));
    } else {
      setFilter([string]);
    }
  };

  const filterJobs = useMemo(() => {
    return jobList.filter((job) => {
      return (
        ((job.title as string).toLowerCase().includes(query.toLowerCase()) ||
          (job.publisher as string)
            .toLowerCase()
            .includes(query.toLowerCase())) &&
        filter.every((item) => {
          return (job.title as string)
            .toLowerCase()
            .includes(item.toLowerCase());
        })
      );
    });
  }, [query, filter]);

  const toggleDespliegue = () => {
    setFilterOpen(!filterOpen);

    Animated.timing(animatedRotation, {
      toValue: filterOpen ? 0 : 1,
      duration: 150,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    Animated.timing(animatedOpen, {
      toValue: filterOpen ? 0 : 68,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const rotateInterpolate = animatedRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.hero}>
          <EmployementSVG style={{ position: "relative", bottom: -2 }} />
        </View>
        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <TextInput
              keyboardType="web-search"
              placeholder="Buscar empleo"
              style={{
                width: "90%",
                fontFamily: "Roboto_400Regular",
                fontSize: 16,
              }}
              placeholderTextColor="rgba(31, 34, 105, 0.50)"
              value={query}
              onChangeText={(text) => setQuery(text)}
            />
            <SearchIcon />
          </View>
          <TouchableHighlight
            style={{}}
            onPress={toggleDespliegue}
            activeOpacity={0.6}
            underlayColor="transparent"
          >
            <Animated.View
              style={{
                transform: [{ rotate: rotateInterpolate }],
              }}
            >
              <IconArrow fill={"#000000"} />
            </Animated.View>
          </TouchableHighlight>
          <Animated.View style={{ height: animatedOpen, overflow: "hidden" }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 10,
              }}
            >
              {chips.map((chip, index) => (
                <ButtonChip
                  key={index}
                  text={chip.label}
                  selected={filter.includes(chip.value)}
                  handleClick={handleClick}
                  id={chip.value}
                  color="#8CE2C8"
                />
              ))}
            </View>
          </Animated.View>
          {filterJobs.map((publication, index) => (
            <JobCard
              key={index}
              id={publication.id}
              job={publication.title}
              publisher={publication.publisher}
              experience={publication.experiencia}
              mode={publication.modalidad}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  hero: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#8CE2C8",
  },
  content: {
    gap: 20,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 44,
    alignItems: "center",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.50)",
    borderRadius: 200,
    justifyContent: "space-between",
    borderColor: "#BCBABA",
    borderWidth: 1,
  },
});
