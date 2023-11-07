import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";

import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

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

      <ScrollView
        style={styles.containerInner}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.imageContainer}>
          <Image source={Kv} style={styles.image} />
        </View>

        <FlatList
          contentContainerStyle={styles.cardContainer}
          data={cardData}
          renderItem={(itemData) => (
            <Card
              key={itemData.index}
              cardTitle={itemData.item.cardTitle}
              cardText={itemData.item.cardText}
              image={itemData.item.image}
            />
          )}
        />
      </ScrollView>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: "#fff",
  },

  containerInner: {
    width: "100%",
    backgroundColor: "#fff",
  },

  imageContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },

  image: {
    width: "95%",
    height: 200,
    borderRadius: 10,
  },

  cardContainer: {
    position: "relative",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
    marginBottom: 20,
  },
});
