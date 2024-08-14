// 
// 
// 

import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

const MySwitch = () => {
	const [isEnabled, setIsEnabled] = useState(false);

	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Switch is {isEnabled ? "ON" : "OFF"}</Text>
			<Switch
				trackColor={{ false: "#767577", true: "#81b0ff" }}
				thumbColor={isEnabled ? "#f5dd4b" : "#ff0000"}
				ios_backgroundColor="#3e3e3e"
				onValueChange={toggleSwitch}
				value={isEnabled}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff",
	},
	text: {
		fontSize: 24,
		marginBottom: 16,
	},
});
