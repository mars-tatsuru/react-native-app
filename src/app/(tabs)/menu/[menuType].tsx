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
import CardImg_03 from "src/assets/images/sandwiches.png";
import Bread from "src/assets/images/bread.png";

/***********************
 * components
 *********************/
import BottomBar from "src/components/BottomBar";

export default function Index() {
  const { menuType } = useLocalSearchParams();
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
              <View style={styles.cardMiddle}>
                <View style={styles.menuBar}>
                  <Text style={styles.menuBarTitle}>01 パンの選択</Text>
                  <View style={styles.menuBarBadge}>
                    <Text style={styles.menuBarBadgeText}>必須</Text>
                  </View>
                </View>
                <View style={styles.menuSelectorWrapper}>
                  <View style={styles.menuSelector}>
                    <Text style={styles.menuSelectorText}>white</Text>
                    <Image
                      source={Bread}
                      style={styles.menuSelectorImage}
                    ></Image>
                    <Text style={styles.menuSelectorText}>+￥60</Text>
                  </View>
                  <View style={styles.menuSelector}>
                    <Text style={styles.menuSelectorText}>white</Text>
                    <Image
                      source={Bread}
                      style={styles.menuSelectorImage}
                    ></Image>
                    <Text style={styles.menuSelectorText}>+￥60</Text>
                  </View>
                  <View style={styles.menuSelector}>
                    <Text style={styles.menuSelectorText}>white</Text>
                    <Image
                      source={Bread}
                      style={styles.menuSelectorImage}
                    ></Image>
                    <Text style={styles.menuSelectorText}>+￥60</Text>
                  </View>
                  <View style={styles.menuSelector}>
                    <Text style={styles.menuSelectorText}>white</Text>
                    <Image
                      source={Bread}
                      style={styles.menuSelectorImage}
                    ></Image>
                    <Text style={styles.menuSelectorText}>+￥60</Text>
                  </View>
                </View>
              </View>
              <View style={styles.cardMiddle}>
                <View style={styles.menuBar}>
                  <Text style={styles.menuBarTitle}>01 パンの選択</Text>
                  <View style={styles.menuBarBadge}>
                    <Text style={styles.menuBarBadgeText}>必須</Text>
                  </View>
                </View>
                <View style={styles.menuSelectorWrapper}>
                  <View style={styles.menuSelector}>
                    <Text style={styles.menuSelectorText}>white</Text>
                    <Image
                      source={Bread}
                      style={styles.menuSelectorImage}
                    ></Image>
                    <Text style={styles.menuSelectorText}>+￥60</Text>
                  </View>
                  <View style={styles.menuSelector}>
                    <Text style={styles.menuSelectorText}>white</Text>
                    <Image
                      source={Bread}
                      style={styles.menuSelectorImage}
                    ></Image>
                    <Text style={styles.menuSelectorText}>+￥60</Text>
                  </View>
                  <View style={styles.menuSelector}>
                    <Text style={styles.menuSelectorText}>white</Text>
                    <Image
                      source={Bread}
                      style={styles.menuSelectorImage}
                    ></Image>
                    <Text style={styles.menuSelectorText}>+￥60</Text>
                  </View>
                  <View style={styles.menuSelector}>
                    <Text style={styles.menuSelectorText}>white</Text>
                    <Image
                      source={Bread}
                      style={styles.menuSelectorImage}
                    ></Image>
                    <Text style={styles.menuSelectorText}>+￥60</Text>
                  </View>
                </View>
              </View>
              <View style={styles.cardMiddle}>
                <View style={styles.menuBar}>
                  <Text style={styles.menuBarTitle}>01 パンの選択</Text>
                  <View style={styles.menuBarBadge}>
                    <Text style={styles.menuBarBadgeText}>必須</Text>
                  </View>
                </View>
                <View style={styles.menuSelectorWrapper}>
                  <View style={styles.menuSelector}>
                    <Text style={styles.menuSelectorText}>white</Text>
                    <Image
                      source={Bread}
                      style={styles.menuSelectorImage}
                    ></Image>
                    <Text style={styles.menuSelectorText}>+￥60</Text>
                  </View>
                  <View style={styles.menuSelector}>
                    <Text style={styles.menuSelectorText}>white</Text>
                    <Image
                      source={Bread}
                      style={styles.menuSelectorImage}
                    ></Image>
                    <Text style={styles.menuSelectorText}>+￥60</Text>
                  </View>
                  <View style={styles.menuSelector}>
                    <Text style={styles.menuSelectorText}>white</Text>
                    <Image
                      source={Bread}
                      style={styles.menuSelectorImage}
                    ></Image>
                    <Text style={styles.menuSelectorText}>+￥60</Text>
                  </View>
                  <View style={styles.menuSelector}>
                    <Text style={styles.menuSelectorText}>white</Text>
                    <Image
                      source={Bread}
                      style={styles.menuSelectorImage}
                    ></Image>
                    <Text style={styles.menuSelectorText}>+￥60</Text>
                  </View>
                </View>
              </View>
              <View style={styles.cardMiddle}>
                <View style={styles.menuBar}>
                  <Text style={styles.menuBarTitle}>01 パンの選択</Text>
                  <View style={styles.menuBarBadge}>
                    <Text style={styles.menuBarBadgeText}>必須</Text>
                  </View>
                </View>
                <View style={styles.menuSelectorWrapper}>
                  <View style={styles.menuSelector}>
                    <Text style={styles.menuSelectorText}>white</Text>
                    <Image
                      source={Bread}
                      style={styles.menuSelectorImage}
                    ></Image>
                    <Text style={styles.menuSelectorText}>+￥60</Text>
                  </View>
                  <View style={styles.menuSelector}>
                    <Text style={styles.menuSelectorText}>white</Text>
                    <Image
                      source={Bread}
                      style={styles.menuSelectorImage}
                    ></Image>
                    <Text style={styles.menuSelectorText}>+￥60</Text>
                  </View>
                  <View style={styles.menuSelector}>
                    <Text style={styles.menuSelectorText}>white</Text>
                    <Image
                      source={Bread}
                      style={styles.menuSelectorImage}
                    ></Image>
                    <Text style={styles.menuSelectorText}>+￥60</Text>
                  </View>
                  <View style={styles.menuSelector}>
                    <Text style={styles.menuSelectorText}>white</Text>
                    <Image
                      source={Bread}
                      style={styles.menuSelectorImage}
                    ></Image>
                    <Text style={styles.menuSelectorText}>+￥60</Text>
                  </View>
                </View>
              </View>
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

  cardMiddle: {
    marginTop: 10,
  },

  menuBar: {
    backgroundColor: "#35784A",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    width: "100%",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  menuBarTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
    lineHeight: 18,
  },

  menuBarBadge: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
    lineHeight: 10,
    backgroundColor: "#F3C13A",
    borderRadius: 100,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },

  menuBarBadgeText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
    lineHeight: 12,
  },

  menuSelectorWrapper: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  menuSelector: {
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingVertical: 10,
    width: "23%",
  },

  menuSelectorText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
    lineHeight: 12,
  },

  menuSelectorImage: {
    width: 50,
    height: 30,
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
