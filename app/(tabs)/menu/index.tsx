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
import { Link, Stack } from "expo-router";

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: "Menu" }} />
      <View style={styles.container}>
        <Text>Menu Page</Text>
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
