//
//
//

import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

import { COLORS } from "../config";

export const CreateButton = (title, tag, comment) => {
	const handleCreate = () => {
		console.log(title, tag, COLORS.get(tag), comment);
		// navigation.navigate("Home");
	};

	return (
		<TouchableOpacity style={styles.button} onPress={handleCreate}>
			<Text style={styles.buttonText}>Создать</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#4CAF50",
		padding: 10,
		borderRadius: 5,
	},
	buttonText: {
		fontSize: 20,
		color: "#fff",
		textAlign: "center",
	},
});
