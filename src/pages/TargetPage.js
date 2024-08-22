//
// Страница целей для накоплений. Здесь пользователь может увидеть и добавить цели для покупок.
// Взаимодействие и внешний вид похожи на то, что из себя представляет "основная страница"
//

import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { DownButton } from "../buttons/AddButton";

export const TagetScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<DownButton navigation={navigation} type="target" />
		</View>
	);
};
