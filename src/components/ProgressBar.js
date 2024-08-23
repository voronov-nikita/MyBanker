//
// Компонент круговой шкалы прогресса.
// Используется для визуализации прогресса накопления цели.
//

import React from "react";
import { View, StyleSheet } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export const CircularProgressBar = ({ progress, bgColor, tintColor }) => {
	return (
		<View style={styles.container}>
			<AnimatedCircularProgress
				size={120}
				width={15}
				fill={progress}
				tintColor={tintColor}
				onAnimationComplete={() => console.log("onAnimationComplete")}
				backgroundColor={bgColor}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		transform: [
			{
				rotate: "90deg",
			},
		],
	},
});
