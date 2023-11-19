import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  ScrollView,
  Dimensions,
} from "react-native";
import { Link, Stack } from "expo-router";
import MenuCard from "../../../components/MenuCard";
import CardImg_01 from "../../../assets/images/sets.png";
import CardImg_02 from "../../../assets/images/drinks.png";
import CardImg_03 from "../../../assets/images/sandwiches.png";
import CardImg_04 from "../../../assets/images/sides.png";

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

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: "Menu" }} />

      <View style={styles.container}>
        <ScrollView
          style={{ marginTop: 20, marginBottom: 20 }}
          showsVerticalScrollIndicator={false}
        >
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
              <MenuCard
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
});
