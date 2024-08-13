//
// Страница изменения PIN кода.
// Данная страница необходима для сборса PIN кода и введения нового. Таким образом
// будет иметься возможность более гибкой настройки защиты.
//

import { StyleSheet, SafeAreaView } from "react-native";
import React from "react";


import { KeyBoardPin } from "../components/KeyBoard";

export const ChangePinScreen = ({ navigation }) => {

	return (
		<SafeAreaView style={styles.container}>

			{/* Встроенная клавиатура для ввода PIN кода */}
			<KeyBoardPin navigation={navigation}/>
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
