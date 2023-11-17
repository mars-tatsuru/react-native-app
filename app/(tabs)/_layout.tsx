import { Tabs } from "expo-router";
import TabBarIcon from "../../components/TabBarIcon";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        // tabBarStyle: {
        //   // display: route.name === "menu" ? "none" : "flex",
        // },
        headerShown: false,
      })}
    >
      <Tabs.Screen
        name="menu"
        options={{
          tabBarLabel: "Menu",
          title: "Menu",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="menu" />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="home" />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          tabBarLabel: "Account",
          title: "Account",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="person" />
          ),
        }}
        // options={{
        //   // This tab will no longer show up in the tab bar.
        //   href: null,
        // }}
      />
    </Tabs>
  );
}
