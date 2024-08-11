//
// Страница авторизации.
// Данная страница необходима для обеспечения безопасности при входе в приложение.
//

import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";


import { KeyBoardPin } from "../components/KeyBoard";

export const AuthScreen = ({ navigation }) => {
	const handleForgotPin = () => {
		navigation.navigate("ForgotPassword");
	};

	return (
		<SafeAreaView style={styles.container}>

			{/* Встроенная клавиатура для ввода PIN кода */}
			<KeyBoardPin navigation={navigation}/>

			<View>
				<TouchableOpacity onPress={handleForgotPin}>
					<Text style={styles.forgotPinText}>Забыли PIN-код?</Text>
				</TouchableOpacity>
			</View>
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

	forgotPinText: {
		marginTop: 20,
		fontSize: 16,
		color: "blue",
		textDecorationLine: "underline",
	},
});
