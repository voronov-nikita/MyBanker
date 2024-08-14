// 
// Копка перехода на страницу настроек.
// 

import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { CONFIG } from "../config";

export const SettingsButton = ({ navigation }) => {
	const navigateToSettings = () => {
		navigation.navigate("Settings");
	};

	return (
		<TouchableOpacity style={styles.button} onPress={navigateToSettings}>
			<MaterialIcons name="settings" size={CONFIG.iconSize} color="black" />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		padding: 10,
		marginRight: "5%",
		justifyContent: "center",
		alignItems: "center",
	},
});
