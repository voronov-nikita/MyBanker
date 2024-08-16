// 
// 
// 

import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { CreateButton } from "../buttons/CreateButton";

export const AddNewBankScreen = ({ navigation }) => {
	const [title, setTitle] = useState("");
	const [tag, setTag] = useState("");
	const [comment, setComment] = useState("");

	const [tags, setTags] = useState([
		"Наличные",
		"Дебетовый счет",
		"Кредитный счет",
		"Накопительный счет",
		"Вклад",
	]);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Добавить новый счет</Text>
			<View style={styles.form}>
				<Text style={styles.label}>Название</Text>
				<TextInput
					style={styles.input}
					placeholder="Название счета"
					value={title}
					onChangeText={(text) => setTitle(text)}
				/>

				<Text style={styles.label}>Тип счета</Text>
				<Picker
					selectedValue={tag}
					onValueChange={(itemValue) => setTag(itemValue)}
				>
					{tags.map((tag, index) => (
						<Picker.Item key={index} label={tag} value={tag} />
					))}
				</Picker>

				<Text style={styles.label}>Коментарии к счету</Text>
				<TextInput
					style={styles.input}
					placeholder="Добавьте коментарий"
					value={comment}
					onChangeText={(text) => setComment(text)}
				/>
			</View>
			<View style={styles.underButton}>
				<CreateButton
					title={title}
					tag={tag}
					comment={comment}
					// navigation={navigation}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	title: {
		fontSize: 26,
		fontWeight: "bold",
		marginBottom: 20,
	},
	form: {
		marginBottom: 20,
	},
	label: {
		fontSize: 18,
		marginBottom: 10,
		marginTop: 15,
		fontWeight: "bold",
	},
	input: {
		height: 40,
		borderColor: "#ccc",
		borderWidth: 1,
		paddingHorizontal: 10,
		paddingVertical: 10,
	},

	underButton: {
		flex: 1,
		justifyContent: "flex-end",
		marginBottom: 20,
	},
});
