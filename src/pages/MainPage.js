// 
// 
// 

import React from "react";
import { View, Text } from "react-native";

import { DownButton } from "../buttons/AddButton";

export const MainScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<DownButton navigation={navigation} type="home" />
		</View>
	);
}