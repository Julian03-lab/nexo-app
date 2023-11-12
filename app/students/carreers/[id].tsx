import { StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { TabBar, TabView } from "react-native-tab-view";
import Information from "./information";
import Universities from "./universities";
import { carreersList } from "../../../assets/info/carreersList";

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "#AB13ED" }}
    style={{ backgroundColor: "#fff" }}
    activeColor="#AB13ED"
    labelStyle={{
      color: "#BCBABA",
      textTransform: "capitalize",
      fontWeight: "500",
    }}
    pressColor="#AB13ED"
  />
);

const CarrerInfo = () => {
  const { id } = useLocalSearchParams();
  const layout = useWindowDimensions();
  const carreer = carreersList.find((carreer) => carreer.id === Number(id));

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "information":
        return <Information carreerInfo={carreer.info} />;
      case "universities":
        return <Universities />;
      default:
        return null;
    }
  };

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "information", title: "Información" },
    { key: "universities", title: "Universidades" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  );
};

export default CarrerInfo;

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: "white",
  },
});
