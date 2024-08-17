//
//
//

import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { DownButton } from "../buttons/AddButton";

export const TagetScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<DownButton navigation={navigation} type="target" />
		</View>
	);
};
