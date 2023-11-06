import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ImageSourcePropType,
} from "react-native";

export default function Card({
  cardTitle,
  cardText,
  image,
}: {
  cardTitle: string;
  cardText: string;
  image: ImageSourcePropType;
}) {
  return (
    <View style={[styles.card, styles.shadowProp]}>
      <Text style={styles.cardTitle}>{cardTitle}</Text>
      <Text style={styles.cardText}>{cardText}</Text>
      <Image source={image} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexGrow: 1,
    flexDirection: "column",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 0,
    height: 200,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 15,
  },

  shadowProp: {
    shadowColor: "black",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
  },

  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },

  cardText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#9B9BAB",
  },

  image: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 130,
    height: 100,
  },
});
