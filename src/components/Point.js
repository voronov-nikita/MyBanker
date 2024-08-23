//
//
//

import React from "react";
import { View, StyleSheet } from "react-native";

import { TAGCOLORS } from "../config";

export const ColorPoint = ({ color }) => {
	return (
		<View
			style={[styles.container, { backgroundColor: TAGCOLORS[color] }]}
		></View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 15,
		height: 15,
		borderRadius: 10,
		marginRight: 6,
	},
});
