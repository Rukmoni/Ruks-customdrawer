import React, { Component } from "react";
import {
  Text,
  View,
  Platform,
  TouchableOpacity,
  Image,
  StatusBar,
  StyleSheet,
} from "react-native";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Header = (props) => {
  const HeaderTitle = (title) => {
    return (
      <Text
        style={{
          fontSize: 20,
          fontFamily: "OS_Bold",
          color: "#000",
          marginLeft: 25,
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={{ backgroundColor: "#fff", flex: 0.8, paddingVertical: 15}}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => props.navData.openDrawer()}
            style={{ flex: 0.2 }}
          >
            <Ionicons
              name="md-menu"
              size={28}
              color="#000"
              style={{ marginLeft: 10 }}
            />
          </TouchableOpacity>
          <View style={styles.title}>
            <MaterialCommunityIcons
              name="language-ruby-on-rails"
              size={32}
              color="#00f"
              style={{ marginLeft: 10 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    ...Platform.select({
      ios: {
        zIndex: 9,
      },
    }),
  },

  leftIcon:{
    backgroundColor: "#fff", 
    flex: 0.8, 
    paddingVertical: 15

  },
  title:{
    flex: 0.7, 
    alignItems: "center", 
    color: "#0000ff"
  },

});
export default Header;
