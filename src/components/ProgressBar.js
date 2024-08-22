// 
// 
// 

import React from "react";
import { View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";


export const CircularProgressBar = ({progress, bgColor, tintColor}) => {
	return (
		<View>
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
}
