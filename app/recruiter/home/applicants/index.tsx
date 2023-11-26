import {
  Animated,
  Easing,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useMemo, useRef } from "react";
import { useLocalSearchParams } from "expo-router";
import useUserStore from "../../../../services/context";
import ApplicantCard from "../../../../components/recruiter/applicantCard";
import { IconArrow } from "../../../../assets/icons/icons";
import OfferStats from "../../../../components/recruiter/OfferStats";
import { TabBar, TabView } from "react-native-tab-view";

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "#1F2269" }}
    style={{ backgroundColor: "#fff" }}
    activeColor="#1F2269"
    labelStyle={{
      color: "#BCBABA",
      textTransform: "capitalize",
      fontFamily: "Roboto_500Medium",
      textAlign: "center",
    }}
    pressColor="#1F2269"
  />
);

const StatsComponent = ({ job, index, user }) => {
  const [stasVisible, setStasVisible] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const animatedRotation = useRef(new Animated.Value(0)).current;
  const [colSelected, setColSelected] = React.useState<null | number>(null);
  const { title, experiencia, modalidad, publisher, description, applicants } =
    user.publications.filter((pub) => pub.id === Number(job))[0];

  const columnsCount = useMemo(() => {
    const columnCount = contarColumnas(applicants[index].applicantList);
    return columnCount;
  }, [applicants, index]);

  function contarColumnas(applicants): Record<number, number> {
    const columnCount: Record<number, number> = {};

    applicants.forEach((applicant) => {
      const { column } = applicant;

      if (columnCount[column]) {
        columnCount[column]++;
      } else {
        columnCount[column] = 1;
      }
    });

    return columnCount;
  }

  const filteredApplicants = useMemo(() => {
    if (colSelected === null) {
      return applicants[index].applicantList;
    }
    return applicants[index].applicantList.filter(
      (app) => app.column === colSelected
    );
  }, [colSelected, applicants, index]);

  const toggleDespliegue = () => {
    setOpen(!open);

    Animated.timing(animatedRotation, {
      toValue: open ? 0 : 1,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const rotateInterpolate = animatedRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  return (
    <SafeAreaView style={styles.containter}>
      <ScrollView>
        <TouchableHighlight
          onPress={toggleDespliegue}
          underlayColor={"transparent"}
        >
          <View style={open ? styles.headerActive : styles.header}>
            <Text style={styles.title}>{title}</Text>
            <Animated.View
              style={{
                transform: [{ rotate: rotateInterpolate }],
              }}
            >
              <IconArrow fill={"#000000"} />
            </Animated.View>
          </View>
        </TouchableHighlight>
        <View style={styles.content}>
          {open && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{title}</Text>
              <Text style={styles.sectionItem}>{`\u2022 ${publisher}`}</Text>
              <Text style={styles.sectionItem}>{`\u2022 ${modalidad}`}</Text>
              <Text style={styles.sectionItem}>{`\u2022 ${experiencia}`}</Text>
              <Text style={styles.sectionDescription}>{description}</Text>
            </View>
          )}
          <TouchableHighlight
            onPress={() => setStasVisible(!stasVisible)}
            style={styles.button}
            underlayColor="rgba(31, 34, 105, 0.20)"
          >
            <Text
              style={{
                color: "#1F2269",
                textAlign: "center",
                fontSize: 16,
                fontFamily: "Roboto_500Medium",
              }}
            >
              {stasVisible ? "Ocultar estadísticas" : "Ver estadísticas"}
            </Text>
          </TouchableHighlight>
          {stasVisible && (
            <OfferStats
              columnsCount={columnsCount}
              step={index}
              column={colSelected}
              selectColumn={setColSelected}
              offerId={Number(job)}
              applicants={applicants[index]}
            />
          )}
          <View style={styles.applicants}>
            {filteredApplicants.map((item) => (
              <ApplicantCard email={item.email} key={item.id} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Applicant = () => {
  const layout = useWindowDimensions();
  const params = useLocalSearchParams();
  const { job } = params;
  const { user } = useUserStore();

  const [routes, setRoutes] = React.useState([]);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    if (!user || !job) {
      return;
    }

    const { applicants } = user.publications.filter(
      (pub) => pub.id === Number(job)
    )[0];

    const newRoutes = applicants.map((app) => ({
      key: `${app.stepId}`,
      title: `Etapa Nº${app.stepId}`,
    }));

    setRoutes(newRoutes);
  }, [user, job]);

  if (!user || !job) {
    return <></>;
  }

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={({ route }) => (
        <StatsComponent job={job} index={index} user={user} />
      )}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  );
};

export default Applicant;

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    gap: 26,
    alignItems: "center",
    paddingHorizontal: 22,
    paddingVertical: 26,
  },
  header: {
    backgroundColor: "#D1F7FA",
    paddingVertical: 18,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  headerActive: {
    backgroundColor: "#EFFEFF",
    paddingVertical: 18,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#1AD9E5",
  },
  title: {
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
    maxWidth: "95%",
  },
  section: {},
  sectionTitle: {
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    marginBottom: 16,
    textAlign: "center",
  },
  sectionItem: {
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
  },
  sectionDescription: {
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
    marginTop: 16,
  },
  applicants: {
    width: "100%",
    gap: 20,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 100,
    paddingVertical: 12,
    borderColor: "#1F2269",
    borderWidth: 1,
    width: "100%",
  },
});
