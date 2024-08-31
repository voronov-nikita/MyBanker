import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import * as SQLite from "expo-sqlite";

export const Test = () => {
	const [users, setUsers] = useState([]);
	const [db, setDb] = useState(null);

	useEffect(() => {
		loadDataBase();
	}, []);

	const loadDataBase = async () => {
		const db = await SQLite.openDatabaseAsync("test");
		db.runAsync(`
			PRAGMA journal_mode = WAL;
			CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);
			INSERT INTO test (value, intValue) VALUES ('test1', 123);
	`);
		setDb(db);
	};

	const fetchUsers = () => {
		const res = db.getFirstAsync("SELECT * FROM test");
		console.log(db);
		setUsers(res);
	};

	const addUser = () => {
		const res = db.runAsync(
			"INSERT INTO test (value, intValue) VALUES (?, ?)",
			"aaa",
			100
		);
		console.log(res, res.lastInsertRowId, res.changes);
		fetchUsers();
	};

	return (
		<View style={{ padding: 20 }}>
			<Button title="Add User" onPress={addUser} />
			<FlatList
				data={users}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<Text>
						{item.id}, {item.value} years old
					</Text>
				)}
			/>
		</View>
	); // Ваш основной компонент
};
