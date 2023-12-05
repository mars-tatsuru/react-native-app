import { Link, Tabs } from "expo-router";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
} from "react-native";

/***********************
 * components
 *********************/

/***********************
 * main render
 *********************/
export default function BottomBar() {
  return (
    <View style={styles.bottomBar}>
      <View style={styles.bottomBarInner}>
        <View style={styles.bottomBarTextArea}>
          <Text style={styles.bottomBarSubText}>合計金額</Text>
          <Text style={styles.bottomBarMainText}>￥0 (税込)</Text>
        </View>
        <Pressable style={styles.bottomBarButton}>
          <Text style={styles.bottomBarButtonText}>カートに入れる</Text>
        </Pressable>
      </View>
    </View>
  );
}

/**********************
 * styles
 *********************/
const styles = StyleSheet.create({
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: [{ translateX: -Dimensions.get("window").width * 0.5 - 5 }],
    width: Dimensions.get("window").width + 10,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },

  bottomBarInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  bottomBarTextArea: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  bottomBarSubText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#9B9BAB",
    lineHeight: 12,
    marginBottom: 5,
  },

  bottomBarMainText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    lineHeight: 16,
  },

  bottomBarButton: {
    backgroundColor: "#F3C13A",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  bottomBarButtonText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
    lineHeight: 12,
  },
});
