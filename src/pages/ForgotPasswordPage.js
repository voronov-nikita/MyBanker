//
// Страница для востановления пароля.
//

import { StyleSheet, Text, SafeAreaView, TextInput, View } from "react-native";
import React from "react";


export const ForgotPasswordScreen = ({ navigation }) => {

	return (
		<SafeAreaView style={styles.container}>
            <Text>ответьте на контрольный вопрос</Text>
            <TextInput style={styles.input} />

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
