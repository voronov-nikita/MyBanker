// 
// 
// 

import React from "react";
import { View, Text, Button } from "react-native";

// import { MySw

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