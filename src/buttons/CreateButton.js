//
//
//

import React from "react";
import { showAlertNotification } from "../components/Notification";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

import { TAGCOLORS, CONFIG, COLORS } from "../config";

export const CreateButton = ({
	title,
	tag,
	comment,
	navigation,
	type,
	targetSum,
}) => {
	const handleCreate = () => {
		if (type == "AddBank") {
			console.log(title, tag, TAGCOLORS.get(tag), comment);
			navigation.navigate("Main");
		} else if (type == "AddTarget") {
			console.log(title, tag, TAGCOLORS[tag], comment, targetSum);
			navigation.navigate("Target");
		}
	};

	return (
		<TouchableOpacity style={styles.button} onPress={handleCreate}>
			<Text style={styles.buttonText}>Создать</Text>
		</TouchableOpacity>
	);
};

export const FakeCreacteButton = () => {
	const handleCreate = () => {
		showAlertNotification(
			"Внимание",
			"Были заполнены не все необходимые поля."
		);
	};
	
	return (
		<TouchableOpacity style={styles.fakeButton} onPress={handleCreate}>
			<Text style={styles.buttonText}>Создать</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	fakeButton: {
		backgroundColor: COLORS.createButton.fake,
		padding: 10,
		borderRadius: 5,
	},
	button: {
		backgroundColor: COLORS.createButton.original,
		padding: 10,
		borderRadius: 5,
	},
	buttonText: {
		fontSize: 20,
		color: "#fff",
		textAlign: "center",
	},
});
