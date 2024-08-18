//
//
//

import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export const ContainerBank = ({ title, tag, curentSum }) => {
	const visibleInfo = () => {
		console.log(title, tag, curentSum);
	};

	return (
		<TouchableOpacity style={styles.container} onPress={visibleInfo}>
			<Text>{title}</Text>
			<Text>{tag}</Text>
			<Text>{curentSum}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "rgba(200, 200, 200, 0.5)",
		borderRadius: 10,

		padding: 10,
		marginTop: "10%",

		justifyContent: "center",
		alignItems: "center",
	},
});
