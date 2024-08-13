//
// Кнопка, для сброса пароля
//

import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

import { showAlertNotification } from "../components/Notification";
import { CONFIG } from "../config";

export const ResetButton = ({ text, func }) => {

	return (
		<TouchableOpacity style={styles.container} onPress={func}>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	text: {
		textAlign: "center",
	},

	container: {
		backgroundColor: "#e3dfb8ff",
		borderRadius: 20,
		borderColor: "black",
		padding: 10,
		margin: 7,
		borderWidth: 3,
	},
});
