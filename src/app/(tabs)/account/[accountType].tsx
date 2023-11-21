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
import { Link, Stack, useLocalSearchParams } from "expo-router";

export default function Index() {
  const { menuType } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: "Account Type" }} />
      <View style={styles.container}>
        <Text>Account Type Page</Text>
        <Text>{menuType}</Text>
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
