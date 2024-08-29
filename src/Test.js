import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	TextInput,
	Button,
	FlatList,
	StyleSheet,
} from "react-native";
import * as SQLite from "expo-sqlite";

export const Test = () => {
	const [db, setDb] = useState(null);
	const [value, setValue] = useState("");
	const [intValue, setIntValue] = useState("");
	const [data, setData] = useState([]);

	useEffect(() => {

		const initializeDb = async () => {
			const dbInstance = await SQLite.openDatabaseAsync("example.db");
			setDb(dbInstance);
	
			await dbInstance.execAsync(`
			CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, value TEXT, intValue INTEGER);
			`);
		};

		initializeDb();
		fetchData(db);
		console.log("OK");
	}, []);

	const fetchData = async (dbInstance) => {
		if (dbInstance) {
			const allRows = await dbInstance.getAllAsync("SELECT * FROM items");
			setData(allRows);
		}
	};

	const addItem = async () => {
		if (db && value && intValue) {
			await db.runAsync(
				"INSERT INTO items (value, intValue) VALUES (?, ?)",
				value,
				parseInt(intValue)
			);
			setValue("");
			setIntValue("");
			fetchData();
		}
	};

	return (
		<View style={styles.container}>
			<TextInput
				placeholder="Value"
				value={value}
				onChangeText={setValue}
				style={styles.input}
			/>
			<TextInput
				placeholder="Int Value"
				value={intValue}
				onChangeText={setIntValue}
				style={styles.input}
				keyboardType="numeric"
			/>
			<Button title="Add Item" onPress={addItem} />

			<FlatList
				data={data}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<View style={styles.item}>
						<Text>ID: {item.id}</Text>
						<Text>Value: {item.value}</Text>
						<Text>Int Value: {item.intValue}</Text>
					</View>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "#fff",
	},
	input: {
		borderWidth: 1,
		borderColor: "#ccc",
		padding: 10,
		marginBottom: 10,
		borderRadius: 5,
	},
	item: {
		padding: 15,
		borderBottomWidth: 1,
		borderColor: "#ddd",
	},
});

// export default App;
