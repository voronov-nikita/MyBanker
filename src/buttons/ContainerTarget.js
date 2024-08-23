//
// Интерактивный блок-контейнер, вмещающий в себя модальное воспроизведения информации о конкретной цели.
//

import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

import { CircularProgressBar } from "../components/ProgressBar";
import { TAGCOLORS } from "../config";

export const ContainerTarget = ({ data }) => {
	const visibleInfo = () => {
		console.log(data.title, data.tag, data.curentSum);
	};

	// функция вычисления процентного соотношения для вычисления пройденного прогресса
	const calculateProgress = () => {
		return (data.curentSum / data.targetSum) * 100;
	};

	return (
		<TouchableOpacity style={styles.container} onPress={visibleInfo}>
			<CircularProgressBar
				progress={calculateProgress()}
				bgColor={"rgba(10, 10, 10, 0.1)"}
				tintColor={TAGCOLORS[data.tag]}
			/>

			<View style={styles.mainContent}>
				<Text style={styles.titleText}>{data.title}</Text>
				<Text style={styles.commentText}>{data.tag}</Text>
				<Text style={styles.sumText}>{data.curentSum}₽ / {data.targetSum}₽</Text>
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
		alignItems: "center",

		flexDirection: "row",
	},

	titleText: {
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center"
	},

	commentText: {
		textAlign: "right"
	},

	sumText: {
		fontSize: 16,
		textAlign: "center"
	}
});
