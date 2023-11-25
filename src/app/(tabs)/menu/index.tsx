import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { useWindowDimensions } from "react-native";
import {
  TabView,
  SceneMap,
  TabBar,
  TabBarProps,
  Route,
} from "react-native-tab-view";
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
import MenuCard from "src/components/MenuCard";
import CardImg_03 from "src/assets/images/sandwiches.png";

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

// components
const setMenuPage = () => (
  <ScrollView
    style={{ paddingTop: 20, marginBottom: 20 }}
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
);

// components
const sandwichesMenuPage = () => (
  <ScrollView
    style={{ paddingTop: 20, marginBottom: 20 }}
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
);

// components
const drinkMenuPage = () => (
  <ScrollView
    style={{ paddingTop: 20, marginBottom: 20 }}
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
);

// components
const sideMenuPage = () => (
  <ScrollView
    style={{ paddingTop: 20, marginBottom: 20 }}
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
);

// components
const renderTabBar = (props: TabBarProps<Route>) => (
  <TabBar
    {...props}
    bounces={true}
    // textとindicatorの位置を合わせる
    indicatorStyle={{
      width: Dimensions.get("window").width / 3.3,
      height: "100%",
      backgroundColor: "#F3C13A",
      borderRadius: 100,
    }}
    style={{
      backgroundColor: "#fff",
      elevation: 0,
      shadowColor: "transparent",
      marginTop: 20,
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
      justifyContent: "space-between",
    }}
    contentContainerStyle={{}}
    tabStyle={{
      width: Dimensions.get("window").width / 3.3,
      minHeight: 30,
    }}
    scrollEnabled
    renderLabel={({ route, focused, color }) => (
      <Text
        style={{
          color: focused ? "#fff" : "#000",
          fontSize: 12,
          width: "auto",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {route.title}
      </Text>
    )}
    gap={5}
  />
);

// pages
const renderScene = SceneMap({
  first: setMenuPage,
  second: sandwichesMenuPage,
  third: drinkMenuPage,
  fourth: sideMenuPage,
});

// renderItem
export default function Index() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "セット" },
    { key: "second", title: "サンドウィッチ" },
    { key: "third", title: "ドリンク" },
    { key: "fourth", title: "サイドメニュー" },
  ]);

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
      <TabView
        style={styles.container}
        // lazy
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        accessibilityLabel="TabView"
      />
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
