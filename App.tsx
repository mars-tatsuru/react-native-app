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
  Dimensions,
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

const screenWidth = Dimensions.get("window").width - 20;
const commonWidth = screenWidth - 10;
const gap = 10;

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />

      <ScrollView
        style={{ marginTop: 20, marginBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.imageContainer}>
          <Image source={Kv} style={styles.image} />
        </View>

        <FlatList
          contentContainerStyle={{ gap, alignItems: "center" }}
          columnWrapperStyle={{ gap }}
          data={cardData}
          numColumns={2}
          keyExtractor={(item, index) => `${item}${index}`}
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

  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },

  image: {
    width: commonWidth,
    height: 200,
    borderRadius: 10,
  },
});
