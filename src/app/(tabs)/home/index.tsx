import { StatusBar } from "expo-status-bar";
import { WebView } from "react-native-webview";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  ScrollView,
  Dimensions,
} from "react-native";
import { Link } from "expo-router";
import { Stack } from "expo-router";

import Card from "src/components/Card";

import Kv from "src/assets/images/kv.png";
import CardImg_01 from "src/assets/images/sets.png";
import CardImg_02 from "src/assets/images/drinks.png";
import CardImg_03 from "src/assets/images/sandwiches.png";
import CardImg_04 from "src/assets/images/sides.png";

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
  // {
  //   cardTitle: "Sets",
  //   cardText: "ここに何か文字が欲しい",
  //   image: CardImg_01,
  // },
  // {
  //   cardTitle: "Drinks",
  //   cardText: "ここに何か文字が欲しい",
  //   image: CardImg_02,
  // },
  // {
  //   cardTitle: "Sandwiches",
  //   cardText: "ここに何か文字が欲しい",
  //   image: CardImg_03,
  // },
  // {
  //   cardTitle: "Sides",
  //   cardText: "ここに何か文字が欲しい",
  //   image: CardImg_04,
  // },
];

const screenWidth = Dimensions.get("window").width - 20;
const commonWidth = screenWidth - 10;
const gap = 10;

export default function App() {
  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: "Home" }} />

      <View style={styles.container}>
        <ScrollView
          style={{ marginTop: 20, marginBottom: 20 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.imageContainer}>
            <Image source={Kv} style={styles.image} />
          </View>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap,
            }}
          >
            {cardData.map((item, index) => (
              <Card
                key={index}
                cardTitle={item.cardTitle}
                cardText={item.cardText}
                image={item.image}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </>
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
