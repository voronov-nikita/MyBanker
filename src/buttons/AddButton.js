// 
// Кнопка "создать". Она необходима для страниц Main и Target, 
// где имеется возможность добавлять элементы в список.
// 

import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export const DownButton = ({ navigation, type }) => {
	const [pressed, setPressed] = useState(false);

	const handlePress = () => {
		if (type == "home") {
			navigation.navigate("AddNewBank");
		} else if (type == "target") {
			navigation.navigate("AddNewTarget");
		}
	};

	return (
		<TouchableOpacity
			style={[styles.button, pressed ? styles.pressed : null]}
			onPressIn={() => setPressed(true)}
			onPressOut={() => setPressed(false)}
			onPress={handlePress}
		>
			<View style={styles.buttonInner}>
				<Text style={styles.buttonText}>+</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		position: "absolute",
		bottom: 20,
		right: 20,
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: "#fff",
		shadowColor: "#000",
		shadowOpacity: 0.2,
		shadowRadius: 5,
		elevation: 5,
	},
	pressed: {
		backgroundColor: "#ccc",
	},
	buttonInner: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		fontSize: 24,
		color: "#333",
	},
});
