// 
// Страница настроек приложения. Здесь пользователь может настроить приложение, как ему удобно.
// Язык программы, тема (светлая или темная), нужен ли ему PIN код, изменить PIN код и т.п
// 

import React from "react";
import { View, Text, Button } from "react-native";


import { editJSON } from "../logic/editor";
import { CONFIG } from "../config";

export const SettingsScreen = () => {

	const func = () => {
		editJSON("../settings.json", "pin", false);
	}

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Button onPress={func} />
		</View>
	);
}