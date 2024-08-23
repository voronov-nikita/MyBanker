//
// Интерактивный блок-контейнер, вмещающий в себя модальное воспроизведения информации о счете.
//

import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export const ContainerBank = ({ data }) => {
	const visibleInfo = () => {
		console.log(data);
	};

	return (
		<TouchableOpacity style={styles.container} onPress={visibleInfo}>
			<Text>{data.title}</Text>
			<Text>{data.tag}</Text>
			<Text>{data.curentSum}</Text>
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
