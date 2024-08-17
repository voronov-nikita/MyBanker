//
// Страница для востановления и сброса пароля.
//

import { StyleSheet, Text, SafeAreaView, TextInput, View } from "react-native";
import React, { useState } from "react";

import { showAlertNotification } from "../components/Notification";
import { ResetButton } from "../buttons/StandartForgotPassword";

import { CONFIG } from "../config";

export const ForgotPasswordScreen = ({ navigation }) => {
	const [answer, setAnswer] = useState("");

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.titleText}>Ответьте на контрольный вопрос</Text>

			<Text style={styles.mainText}>{CONFIG.data.textQuestion[0]}</Text>

			<TextInput
				style={styles.textInput}
				placeholder="Ответ на контрольный вопрос"
				onChangeText={(text) => setAnswer(text)}
				value={answer}
			/>

			<View style={styles.underButton}>
				<ResetButton text={answer} navigation={navigation} />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 15,
	},

	titleText: {
		fontSize: 20,
		fontWeight: "bold",

		marginTop: "5%",
		marginBottom: "13%",
		padding: "1%",
	},

	mainText: {
		fontSize: 18,

		marginBottom: "10%",
		padding: "1%",

		textDecorationLine: "underline",
	},
	textInput: {
		height: 90,
		width: "100%",

		fontSize: 16,
		borderColor: "#ccc",
		borderWidth: 1,

		margin: "1%",
		padding: "10%",

		textAlign: "center"
	},

	underButton: {
		flex: 1,
		justifyContent: "flex-end",
		marginBottom: 20,
	},
});
