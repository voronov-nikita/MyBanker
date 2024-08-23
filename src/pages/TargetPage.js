//
// Страница целей для накоплений. Здесь пользователь может увидеть и добавить цели для покупок.
// Взаимодействие и внешний вид похожи на то, что из себя представляет "основная страница"
//

import React from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";

import { DownButton } from "../buttons/AddButton";
import { ContainerTarget } from "../buttons/ContainerTarget";

export const TagetScreen = ({ navigation }) => {
	const data = [
		{
			id: 0,
			title: "new",
			curentSum: 50,
			targetSum: 100,
			tag: "кредитный счет",
		},
		{
			id: 1,
			title: "На мечту",
			curentSum: 50000,
			targetSum: 1000000,
			tag: "накопительный счет",
		},
		{
			id: 2,
			title: "карты",
			curentSum: 50000,
			targetSum: 1000000,
			tag: "дебетовый счет",
		},
		{
			id: 3,
			title: "На мечту",
			curentSum: 50000,
			targetSum: 1000000,
			tag: "накопительный счет",
		},
		{
			id: 4,
			title: "На мечту",
			curentSum: 50000,
			targetSum: 1000000,
			tag: "накопительный счет",
		},
		{
			id: 5,
			title: "На мечту",
			curentSum: 50000,
			targetSum: 1000000,
			tag: "накопительный счет",
		},
		{
			id: 6,
			title: "На мечту",
			curentSum: 50000,
			targetSum: 1000000,
			tag: "накопительный счет",
		},
	];

	const renderItem = ({ item }) => (
		<View>
			<ContainerTarget data={data[item.id]} />
		</View>
	);

	return (
		<SafeAreaView style={styles.container}>
			{/* <ScrollView style={styles.scroll}> */}
			<FlatList
				style={styles.element}
				data={data}
				renderItem={renderItem}
				keyExtractor={(item) => item.id.toString()}
				scrollEnabled={true}
			/>
			{/* </ScrollView> */}
			<DownButton navigation={navigation} type="target" />
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
