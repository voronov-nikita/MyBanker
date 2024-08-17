//
//
//

import React from "react";
import { showAlertNotification } from "../components/Notification";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

import { CONFIG, COLORS } from "../config";

export const ResetButton = ({ text, navigation }) => {

	const handlePress = () => {
		if (text.toLowerCase() == CONFIG.data.answerQuestion.toLowerCase()) {
			navigation.navigate("ChangePIN");
		} else {
			showAlertNotification(
				"Внимание",
				"Это не верный ответ на контрольный вопрос"
			);
		}
	};

	return (
		<TouchableOpacity style={styles.button} onPress={handlePress}>
			<Text style={styles.buttonText}>Продолжить</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: COLORS.forgotPin.original,
		padding: 10,
		borderRadius: 5,
	},
	buttonText: {
		fontSize: 20,
		color: "#fff",
		textAlign: "center",
	},
});
