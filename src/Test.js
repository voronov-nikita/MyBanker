import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, FlatList, Alert } from "react-native";
import SQLite from "react-native-sqlite-storage";

// Открываем или создаем базу данных
const db = SQLite.openDatabase(
	{
		name: "myDatabase.db",
		location: "default",
	},
	() => {
		console.log("Database opened");
	},
	(error) => {
		console.log("Error: " + error);
	}
);

export const Test = () => {
	const [items, setItems] = useState([]);
	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		// Создаем таблицу, если она не существует
		db.transaction((tx) => {
			tx.executeSql(
				"CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, value TEXT);",
				[],
				() => {
					console.log("Table created or already exists");
				},
				(error) => {
					console.log("Error: " + error.message);
				}
			);
		});

        setInputValue("1234");
        addItem();
		// Загружаем данные из таблицы при запуске приложения
		loadItems();
	}, []);

	// Функция загрузки данных из базы данных
	const loadItems = () => {
		db.transaction((tx) => {
			tx.executeSql(
				"SELECT * FROM items;",
				[],
				(_, { rows }) => {
					setItems(rows.raw());
				},
				(error) => {
					console.log("Error: " + error.message);
				}
			);
		});
	};

	// Функция для добавления нового элемента в базу данных
	const addItem = () => {
		if (inputValue.length === 0) return;

		db.transaction((tx) => {
			tx.executeSql(
				"INSERT INTO items (value) VALUES (?);",
				[inputValue],
				(_, result) => {
					if (result.insertId) {
						setItems((prevItems) => [
							...prevItems,
							{ id: result.insertId, value: inputValue },
						]);
						setInputValue("");
					}
				},
				(error) => {
					console.log("Error: " + error.message);
				}
			);
		});
	};

	return (
		<View style={{ padding: 20 }}>
			<TextInput
				placeholder="Введите значение"
				value={inputValue}
				onChangeText={setInputValue}
				style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
			/>
			<Button title="Добавить элемент" onPress={addItem} />
			<FlatList
				data={items}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<Text style={{ padding: 10 }}>{item.value}</Text>
				)}
			/>
		</View>
	);
}
