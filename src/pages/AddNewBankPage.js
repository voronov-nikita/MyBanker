//
// Страница по созданию новой ячейки хранения средств.
// Для создания "счета" необходимо придумать ему название, 
// выбрать тип счета (наличные или какая-то банковская единица),
// по желанию можно добавить комментарий.
// Кнопка будет активной только после того, как будут заполнены все обязательные поля.
//

import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { CreateButton, FakeCreacteButton } from "../buttons/CreateButton";
import { CONFIG } from "../config";

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

	// функция отрисовки кнопки по условию заполнения
	renderButton = () => {
		if (title && tag) {
			return (
				<CreateButton
					title={title}
					tag={tag}
					comment={comment}
					navigation={navigation}
					type="AddBank"
				/>
			);
		} else {
			return <FakeCreacteButton />;
		}
	};

	return (
		<ScrollView style={styles.container}>
			<Text style={styles.title}>Добавить новый счет</Text>
			<View style={styles.form}>
				<Text style={styles.label}>Название</Text>
				<TextInput
					style={styles.input}
					placeholder="Название счета"
					value={title}
					onChangeText={(text) => setTitle(text)}
					maxLength={CONFIG.maxLengthInputBank}
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
					style={styles.inputComment}
					placeholder="Добавьте коментарий"
					value={comment}
					onChangeText={(text) => setComment(text)}
					multiline={true}
				/>
			</View>
			<View style={styles.underButton}>
				{this.renderButton()}
			</View>
		</ScrollView>
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
	inputComment: {
		height: 100,
		borderColor: "#ccc",
		borderWidth: 1,
		paddingHorizontal: 10,
	},

	underButton: {
		flex: 1,
		justifyContent: "flex-end",
		marginBottom: 20,
	},
});
