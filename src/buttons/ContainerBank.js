//
// Интерактивный блок-контейнер, вмещающий в себя модальное воспроизведения информации о счете.
//

import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

import { ColorPoint } from "../components/Point";

export const ContainerBank = ({ data }) => {
	const visibleInfo = () => {
		console.log(data);
	};

	return (
		<TouchableOpacity style={styles.container} onPress={visibleInfo}>
			<Text style={styles.titleText}>{data.title}</Text>

			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<ColorPoint color={data.tag} />
				<Text style={styles.commentText}>{data.tag}</Text>
				
				<Text style={styles.sumText}>{data.curentSum}₽</Text>

			</View>
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
		alignItems: "left",
	},

	titleText: {
		fontWeight: "bold",
		fontSize: 20,
		color: "#000",

		textAlign: "center",
		marginBottom: "5%",
		marginTop: "5%"
	},

	sumText: {
		flex: 1,
		fontSize: 20,
		textAlign: "right",
		justifyContent: "space-between"
	},

	commentText: {},
});
