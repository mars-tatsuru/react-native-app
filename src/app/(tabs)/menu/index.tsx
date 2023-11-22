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
import MenuCard from "src/components/MenuCard";
import CardImg_01 from "src/assets/images/sets.png";
import CardImg_02 from "src/assets/images/drinks.png";
import CardImg_03 from "src/assets/images/sandwiches.png";
import CardImg_04 from "src/assets/images/sides.png";

import HeaderRight from "src/components/HeaderRight";
import HeaderLeft from "src/components/HeaderLeft";

type CardDataType = {
  cardTitle: string;
  cardText: string;
  image: ImageSourcePropType;
};

const cardData: CardDataType[] = [
  {
    cardTitle: "商品名",
    cardText:
      "ここに何か文字が欲しいここに何か文字が欲しいここに何か文字が欲しいここに何か文字が欲しいここに何か文字が欲しいここに何か文字が欲しい",
    image: CardImg_03,
  },
  {
    cardTitle: "商品名",
    cardText:
      "ここに何か文字が欲しいここに何か文字が欲しいここに何か文字が欲しいここに何か文字が欲しいここに何か文字が欲しいここに何か文字が欲しいここに何か文字が欲しいここに何か文字が欲しい",
    image: CardImg_03,
  },
  {
    cardTitle: "商品名",
    cardText:
      "ここに何か文字が欲しいここに何か文字が欲しいここに何か文字が欲しいここに何か文字が欲しいここに何か文字が欲しいここに何か文字が欲しいここに何か文字が欲しいここに何か文字が欲しい",
    image: CardImg_03,
  },
  {
    cardTitle: "商品名",
    cardText:
      "ここに何か文字が欲しいここに何か文字が欲しいここに何か文字が欲しいここに何か文字が欲しいここに何か文字が欲しいここに何か文字が欲しいここに何か文字が欲しいここに何か文字が欲しい",
    image: CardImg_03,
  },
];

const screenWidth = Dimensions.get("window").width - 20;
const commonWidth = screenWidth - 10;
const gap = 10;

export default function Index() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "",
          headerLeft: () => <HeaderLeft />,
          headerRight: () => <HeaderRight />,
        }}
      />

      <View style={styles.container}>
        <ScrollView
          style={{ marginTop: 20, marginBottom: 20 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.cardWrapper}>
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

  cardWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});
