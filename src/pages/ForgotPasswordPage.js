//
// Страница для востановления пароля.
//

import { StyleSheet, Text, SafeAreaView, TextInput, View } from "react-native";
import React, { useState } from "react";

import { showAlertNotification } from "../components/Notification";
import { ResetButton } from "../buttons/StandartForgotPassword";

import { CONFIG } from "../config";

export const ForgotPasswordScreen = ({ navigation }) => {
	const [answer, setAnswer] = useState("");

	const checkQuestion = (text) => {
		setAnswer(text);
	};

	const navigateToChangePIN = () => {
		console.log(answer);
		if (answer == CONFIG.data.answerQuestion) {
			navigation.navigate("ChangePIN");
		} else {
			showAlertNotification(
				titleText = "Внимание",
				mainText = "Это не верный ответ на контрольный вопрос"
			);
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text>Ответьте на контрольный вопрос для сброса PIN кода</Text>
			<TextInput
				style={styles.textInput}
				placeholder="Текст вопроса"
				onChangeText={checkQuestion}
				value={answer}
			/>

			<ResetButton text={"Продолжить"} func={navigateToChangePIN}/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f0f0f0",
		alignItems: "center",
		justifyContent: "center",
	},
});
