import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
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
  Button,
  Pressable,
} from "react-native";
import { Link, Stack, useLocalSearchParams } from "expo-router";

/***********************
 * images
 *********************/
import CardImg_03 from "src/assets/images/sandwiches.png";
import Bread from "src/assets/images/bread.png";
import Tomato from "src/assets/images/tomato.png";
import Onion from "src/assets/images/onion.png";
import Mushroom from "src/assets/images/mushroom.png";
import Radish from "src/assets/images/radish.png";
import Cheese from "src/assets/images/cheese.png";
import Olive from "src/assets/images/olive.png";
import Mayonnaise from "src/assets/images/mayonnaise.png";
import Ketchup from "src/assets/images/ketchup.png";
import Mustard from "src/assets/images/mustard.png";

/***********************
 * components
 *********************/
import BottomBar from "src/components/BottomBar";
import MenuSelector from "src/components/MenuSelector";

export default function Index() {
  const { menuType } = useLocalSearchParams();

  /***********************
   * menu data
   *********************/
  const menuData = [
    {
      id: 1,
      title: "01 パンの選択",
      badge: "true",
      selectors: [
        {
          id: 1,
          title: "ホワイト",
          image: Bread,
          price: 60,
        },
        {
          id: 2,
          title: "ホール",
          image: Bread,
          price: 60,
        },
      ],
    },
    {
      id: 2,
      title: "02 野菜の選択",
      badge: "true",
      selectors: [
        {
          id: 1,
          title: "トマト",
          image: Tomato,
          price: 0,
        },
        {
          id: 2,
          title: "オニオン",
          image: Onion,
          price: 0,
        },
        {
          id: 3,
          title: "マッシュルーム",
          image: Mushroom,
          price: 0,
        },
        {
          id: 4,
          title: "ラディッシュ",
          image: Radish,
          price: 0,
        },
      ],
    },
    {
      id: 3,
      title: "03 ソースの選択",
      badge: "true",
      selectors: [
        {
          id: 1,
          title: "マヨネーズ",
          image: Mayonnaise,
          price: 60,
        },
        {
          id: 2,
          title: "ケチャップ",
          image: Ketchup,
          price: 60,
        },
        {
          id: 3,
          title: "マスタード",
          image: Mustard,
          price: 60,
        },
        {
          id: 4,
          title: "なし",
          image: Mustard,
          price: 0,
        },
      ],
    },
    {
      id: 4,
      title: "04 その他",
      badge: "false",
      selectors: [
        {
          id: 1,
          title: "チーズ",
          image: Cheese,
          price: 60,
        },
        {
          id: 2,
          title: "オリーブ",
          image: Olive,
          price: 60,
        },
      ],
    },
  ];

  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: "メニュー詳細" }} />
      <View style={styles.container}>
        <ScrollView
          style={{ marginTop: 10, marginBottom: 65 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.link}>
            <View style={styles.card}>
              <Image source={CardImg_03} style={styles.image} />
              <Text style={styles.cardTitle}>{menuType}</Text>
              <Text style={styles.cardText}>
                ここに何か文字が欲しいここに何か文字が欲しいここに何か文字が欲しいここに何か文字が欲しいここに何か文字が欲しいここに何か文字が欲しい
              </Text>
              {menuData.map((menu) => (
                <MenuSelector
                  key={menu.id}
                  menuBarTitle={menu.title}
                  menuBarBadge={menu.badge}
                  selectors={menu.selectors}
                />
              ))}
              <View style={styles.cardBottom}>
                <Text style={styles.linkText}>
                  ※アレルギー、その他詳細 &gt;
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <BottomBar />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  link: {
    width: Dimensions.get("window").width - 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 15,
    backgroundColor: "#fff",
    marginBottom: 10,
  },

  card: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },

  image: {
    width: 200,
    height: 150,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },

  cardText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#9B9BAB",
    lineHeight: 18,
  },

  cardBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  linkText: {
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: 15,
  },
});
