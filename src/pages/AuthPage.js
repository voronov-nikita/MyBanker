//
// Страница авторизации.
// Данная страница необходима для обеспечения безопасности при входе в приложение.
//

import React from 'react';
import { StyleSheet, Text, View } from "react-native";

export const AuthScreen = () => {
	return (
		<View style={styles.container}>
			<Text>AuthScreen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
