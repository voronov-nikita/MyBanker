//
// Страница домашняя.
// Данная страница используется, как основная.
// Расположение базовой информации, базовые настройки аккаунта и т.д
//

import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

export const HomeScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Text>HomeScreen</Text>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#222",
		alignItems: "center",
		justifyContent: "center",
	},
});
