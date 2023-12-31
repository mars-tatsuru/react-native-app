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
      <Stack.Screen options={{ headerShown: true, title: "Home: Detail" }} />
      <View style={styles.container}>
        <Text>Detail Page</Text>
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
