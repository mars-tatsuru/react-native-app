import { StatusBar } from "expo-status-bar";
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

import { useNavigation, NavigationProp } from "@react-navigation/native";
import image from "src/assets/images/icon_header_right.png";

interface pageNameProps {
  menu: undefined;
}

export default function Card() {
  const navigation = useNavigation<NavigationProp<pageNameProps>>();

  const handleCardPress = () => {
    navigation.navigate("menu");
  };

  return (
    <TouchableOpacity>
      <Image source={image} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 25,
    height: 25,
  },
});
