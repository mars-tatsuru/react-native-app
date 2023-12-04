import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { useWindowDimensions } from "react-native";
import {
  useNavigation,
  useRoute,
  RouteProp,
  NavigationProp,
} from "@react-navigation/native";
import { useEffect, useState } from "react";
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

/************************
 * components
 * *********************/
import HeaderRight from "src/components/HeaderRight";
import HeaderLeft from "src/components/HeaderLeft";

/************************
 * main　render
 * *********************/
export default function Index() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    { key: "first", title: "バリューセット" },
    { key: "second", title: "ドリンク" },
    { key: "third", title: "サンドウィッチ" },
    { key: "fourth", title: "サイドメニュー" },
  ]);

  /************************
   * tab bar
   * *********************/
  const renderTabBar = (props: TabBarProps<Route>) => (
    <TabBar
      {...props}
      bounces={true}
      // textとindicatorの位置を合わせる
      indicatorStyle={{
        width: Dimensions.get("window").width / 3.7,
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
        width: Dimensions.get("window").width / 3.7,
        minHeight: 30,
      }}
      scrollEnabled
      renderLabel={({ route, focused, color }) => (
        <Text
          style={{
            color: focused ? "#fff" : "#000",
            fontSize: 11,
            width: "auto",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {route.title}
        </Text>
      )}
      gap={5}
      onTabPress={({ route, preventDefault }) => {}}
    />
  );

  /************************
   * card contents
   * *********************/
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

  /************************
   * card components
   * *********************/
  const setMenuPage = () => (
    <ScrollView
      style={{ marginBottom: 10 }}
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

  const sandwichesMenuPage = () => (
    <ScrollView
      style={{ marginBottom: 20 }}
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

  const drinkMenuPage = () => (
    <ScrollView
      style={{ marginBottom: 20 }}
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

  const sideMenuPage = () => (
    <ScrollView
      style={{ marginBottom: 20 }}
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

  /************************
   * page router
   * *********************/
  const renderScene = ({
    route,
    jumpTo,
  }: {
    route: Route;
    jumpTo: (key: string) => void;
  }) => {
    switch (route.key) {
      case "first":
        return setMenuPage();
      case "second":
        return drinkMenuPage();
      case "third":
        return sandwichesMenuPage();
      case "fourth":
        return sideMenuPage();
      default:
        return null;
    }
  };

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

/************************
 * styles
 * *********************/
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
