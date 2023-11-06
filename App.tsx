import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";

import Header from "./components/Header";
import Card from "./components/Card";

import Kv from "./assets/images/kv.png";
import CardImg_01 from "./assets/images/sets.png";
import CardImg_02 from "./assets/images/drinks.png";
import CardImg_03 from "./assets/images/sandwiches.png";
import CardImg_04 from "./assets/images/sides.png";

type CardDataType = {
  cardTitle: string;
  cardText: string;
  image: ImageSourcePropType;
};

const cardData: CardDataType[] = [
  {
    cardTitle: "Sets",
    cardText: "ここに何か文字が欲しい",
    image: CardImg_01,
  },
  {
    cardTitle: "Drinks",
    cardText: "ここに何か文字が欲しい",
    image: CardImg_02,
  },
  {
    cardTitle: "Sandwiches",
    cardText: "ここに何か文字が欲しい",
    image: CardImg_03,
  },
  {
    cardTitle: "Sides",
    cardText: "ここに何か文字が欲しい",
    image: CardImg_04,
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <View style={styles.imageContainer}>
        <Image source={Kv} style={styles.image} />
      </View>
      <View style={styles.cardContainer}>
        {cardData.map((card, index) => {
          return (
            <Card
              key={index}
              cardTitle={card.cardTitle}
              cardText={card.cardText}
              image={card.image}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingBottom: 50,
  },

  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },

  image: {
    width: 350,
    height: 200,
    borderRadius: 10,
  },

  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 350,
    gap: 10,
    justifyContent: "space-between",
  },
});
