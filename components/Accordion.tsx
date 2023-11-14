import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { IconArrow } from "../assets/icons/icons";

type PropsType = {
  title: string;
  content: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<string>>;
  id: number;
};

const Accordion = ({ title, content, open, setOpen, id }: PropsType) => {
  const handleOpen = () => {
    if (open) {
      setOpen("");
    } else {
      setOpen(id.toLocaleString());
    }
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleOpen}>
        <View style={open ? styles.activeHead : styles.head}>
          <Text style={open ? styles.activeTitle : styles.title}>{title}</Text>
          <IconArrow
            style={open && styles.activeIcon}
            fill={open && "#ab13ed"}
          />
        </View>
      </TouchableWithoutFeedback>
      {open && <Text style={styles.content}>{content}</Text>}
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#bcbaba",
    paddingVertical: 8,
    paddingHorizontal: 10,
    elevation: 3,
    backgroundColor: "#fff",
  },

  activeHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    borderBottomColor: "#ab13ed",
    borderBottomWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 10,
    elevation: 3,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
    maxWidth: "95%",
  },
  activeTitle: {
    fontSize: 16,
    fontWeight: "500",
    maxWidth: "95%",
    color: "#ab13ed",
  },
  activeIcon: {
    transform: [{ rotate: "180deg" }],
  },

  content: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: "400",
    color: "#000",
    lineHeight: 21,
    letterSpacing: 0.24,
  },
});
