//
//
//

import React, { useState } from "react";
import {
	SafeAreaView,
	View,
	Text,
	StyleSheet,
	ScrollView,
	FlatList,
} from "react-native";

import { DownButton } from "../buttons/AddButton";
import { ContainerBank } from "../buttons/ContainerBank";

export const MainScreen = ({ navigation }) => {
	const [data, setData] = useState([
		{ id: 1, name: "Item 1", sum: 1000 },
		{ id: 2, name: "Item 2", sum: 21421 },
		{ id: 3, name: "Item 3", sum: 0 },
		{ id: 4, name: "Item 3", sum: 0 },
		{ id: 5, name: "Item 3", sum: 0 },
		{ id: 6, name: "Item 3", sum: 0 },
		{ id: 7, name: "Item 3", sum: 0 },
		{ id: 8, name: "Item 3", sum: 0 },
		{ id: 9, name: "Item 3", sum: 0 },
		{ id: 10, name: "Item 3", sum: 0 },
		{ id: 11, name: "Item 3", sum: 0 },
		{ id: 12, name: "Item 3", sum: 0 },
	]);

	const renderItem = ({ item }) => (
		<View>
			<ContainerBank title={item.name} tag={"наличные"} curentSum={item.sum} />
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
