import { Link, Tabs } from "expo-router";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ImageSourcePropType,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  useNavigation,
  NavigationProp,
  useRoute,
} from "@react-navigation/native";

/***********************
 * components
 *********************/
interface pageNameProps {
  menu:
    | undefined
    | {
        screen: string;
        params: {
          id: string;
        };
      };
}

/***********************
 * main render
 *********************/
export default function Card({
  cardTitle,
  cardText,
  image,
  id,
}: {
  cardTitle: string;
  cardText: string;
  image: ImageSourcePropType;
  id: string;
}) {
  const navigation = useNavigation<NavigationProp<pageNameProps>>();
  const route = useRoute();

  // TODO: 画面遷移
  const handleCardPress = () => {
    navigation.navigate("menu", { screen: "index", params: { id: id } });
  };

  return (
    <View>
      <Pressable style={styles.card} onPress={handleCardPress}>
        <Text style={styles.cardTitle}>{cardTitle}</Text>
        <Text style={styles.cardText}>{cardText}</Text>
        <Image source={image} style={styles.image} />
      </Pressable>
    </View>
  );
}

/**********************
 * styles
 *********************/
const styles = StyleSheet.create({
  card: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 0,
    height: 180,
    width: Dimensions.get("window").width / 2 - 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 15,
  },

  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },

  cardText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#9B9BAB",
  },

  image: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 130,
    height: 100,
  },
});
