import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	Picker,
	StyleSheet,
	TouchableOpacity,
} from "react-native";

export const AddNewTargetScreen = () => {
	const [title, setTitle] = useState("");
	const [tag, setTag] = useState("");
	const [color, setColor] = useState("");
	const [tags, setTags] = useState(["Tag 1", "Tag 2", "Tag 3"]);
	const [colors, setColors] = useState(["Red", "Green", "Blue"]);

	const handleCreate = () => {
		console.log(`Title: ${title}, Tag: ${tag}, Color: ${color}`);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Create New Item</Text>
			<View style={styles.form}>
				<Text style={styles.label}>Title:</Text>
				<TextInput
					style={styles.input}
					placeholder="Enter title"
					value={title}
					onChangeText={(text) => setTitle(text)}
				/>
				<Text style={styles.label}>Tag:</Text>
				<Picker
					selectedValue={tag}
					onValueChange={(itemValue) => setTag(itemValue)}
				>
					{tags.map((tag, index) => (
						<Picker.Item key={index} label={tag} value={tag} />
					))}
				</Picker>
				<Text style={styles.label}>Color:</Text>
				<Picker
					selectedValue={color}
					onValueChange={(itemValue) => setColor(itemValue)}
				>
					{colors.map((color, index) => (
						<Picker.Item key={index} label={color} value={color} />
					))}
				</Picker>
			</View>
			<TouchableOpacity style={styles.button} onPress={handleCreate}>
				<Text style={styles.buttonText}>Create</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
	form: {
		marginBottom: 20,
	},
	label: {
		fontSize: 16,
		marginBottom: 10,
	},
	input: {
		height: 40,
		borderColor: "#ccc",
		borderWidth: 1,
		paddingHorizontal: 10,
		paddingVertical: 10,
	},
	button: {
		backgroundColor: "#4CAF50",
		padding: 10,
		borderRadius: 5,
	},
	buttonText: {
		fontSize: 16,
		color: "#fff",
	},
});
