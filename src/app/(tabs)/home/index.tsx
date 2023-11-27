import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  ScrollView,
  Dimensions,
} from "react-native";
import { Link, Stack, Tabs } from "expo-router";

/************************
 * components
 * *********************/
import Card from "src/components/Card";
import HeaderRight from "src/components/HeaderRight";
import HeaderLeft from "src/components/HeaderLeft";
import Kv from "src/assets/images/kv.png";
import CardImg_01 from "src/assets/images/sets.png";
import CardImg_02 from "src/assets/images/drinks.png";
import CardImg_03 from "src/assets/images/sandwiches.png";
import CardImg_04 from "src/assets/images/sides.png";

/************************
 * card contents
 * *********************/
type CardDataType = {
  cardTitle: string;
  cardText: string;
  image: ImageSourcePropType;
  id: string;
};

const cardData: CardDataType[] = [
  {
    cardTitle: "Sets",
    cardText: "定番セット",
    image: CardImg_01,
    id: "sets",
  },
  {
    cardTitle: "Drinks",
    cardText: "ドリンク・アルコール",
    image: CardImg_02,
    id: "drinks",
  },
  {
    cardTitle: "Sandwiches",
    cardText: "サンドイッチ",
    image: CardImg_03,
    id: "sandwiches",
  },
  {
    cardTitle: "Sides",
    cardText: "サイドメニュー",
    image: CardImg_04,
    id: "sides",
  },
];

/************************
 * calc width
 * *********************/
const screenWidth = Dimensions.get("window").width - 20;
const commonWidth = screenWidth - 10;
const gap = 10;

/************************
 * main render
 * *********************/
export default function App() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "",
          headerTitleAlign: "left",
          headerLeft: () => <HeaderLeft />,
          headerRight: () => <HeaderRight />,
        }}
      />

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
                id={item.id}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

/************************
 * styles
 * *********************/
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
