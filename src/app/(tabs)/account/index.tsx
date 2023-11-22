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
  Button,
} from "react-native";
import { Link, Stack, Tabs } from "expo-router";

import HeaderRight from "src/components/HeaderRight";
import HeaderLeft from "src/components/HeaderLeft";

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
        <Text>Account Page</Text>
        <Link href={"/menu/ACCOUNT"}>
          <Text style={{ fontSize: 24 }}>go to main menu</Text>
        </Link>
        <Link href={"/menu/NETWORK"}>
          <Text style={{ fontSize: 24 }}>go to sub menu</Text>
        </Link>
        <StatusBar style="auto" />
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
});
