//
// Основная страница. Пользователь здесь видит основную информацию о свои счетах и накоплениях.
// Здесь же присутсвует кнопка создания нового счета и через эту же страницу происходит изменение операций.
// Эта страница открывается первой при переходе в Home через "основной навигатор"
//

import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, FlatList } from "react-native";

import { DownButton } from "../buttons/AddButton";
import { ContainerBank } from "../buttons/ContainerBank";

export const MainScreen = ({ navigation }) => {
	const [data, setData] = useState([
		{ id: 0, title: "Item 1", curentSum: 1000, tag: "наличные" },
		{ id: 1, title: "Item 2", curentSum: 1000, tag: "вклад" },
		{ id: 2, title: "Item 3", curentSum: 1000, tag: "дебетовый счет" },
		{ id: 3, title: "Item 4", curentSum: 1000, tag: "кредитный счет" },
		{ id: 4, title: "Item 5", curentSum: 1000, tag: "накопительный счет" },
	]);

	const renderItem = ({ item }) => (
		<View>
			<ContainerBank data={data[item.id]} />
		</View>
	);

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				style={styles.element}
				data={data}
				renderItem={renderItem}
				keyExtractor={(item) => item.id.toString()}
				scrollEnabled={true}
			/>
			<DownButton navigation={navigation} type="home" />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	scroll: {
		flex: 1,
	},

	element: {
		height: "20%",
		width: "85%",
	},
});
