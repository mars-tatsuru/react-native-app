import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ImageSourcePropType,
  Dimensions,
} from "react-native";

export default function Card({
  cardTitle,
  cardText,
  image,
  gap,
}: {
  cardTitle: string;
  cardText: string;
  image: ImageSourcePropType;
  gap?: boolean;
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{cardTitle}</Text>
      <Text style={styles.cardText}>{cardText}</Text>
      <Image source={image} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 0,
    height: 200,
    width: Dimensions.get("window").width / 2 - 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 15,
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
