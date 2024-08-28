//
// Логика локальной SQLite базы данных для хранения различного рода информации.
// В фале представлены функции, которые рекомендуется импортировать
// в страницы проекта и логических компонентов
//

import SQLite from "react-native-sqlite-storage";
import { CONFIG } from "../config";

// Открываем или создаем базу данных
const db = SQLite.openDatabase(
	{
		name: CONFIG.databaseName,
		location: "default",
	},
	() => {
		console.log("Database opened");
	},
	(error) => {
		console.error("Error opening database:", error);
	}
);

// Создаем таблицу , если она не существует
export const createDataBaseBanks = () => {
	db.transaction((tx) => {
		tx.executeSql(
			"CREATE TABLE IF NOT EXISTS banks (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, comment TEXT, sum FLOAT, tag TEXT);",
			[],
			(error) => {
				console.error("Error creating table:", error);
			}
		);
	});
};

export const createDataBaseTargets = () => {
	db.transaction((tx) => {
		tx.executeSql(
			"CREATE TABLE IF NOT EXISTS targets (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, targetSum FLOAT, curentSum FLOAT, comment TEXT);",
			[],
			(error) => {
				console.error("Error creating table:", error);
			}
		);
	});
};

export const createDataBaseHistory = () => {
	db.transaction((tx) => {
		tx.executeSql(
			"CREATE TABLE IF NOT EXISTS history (id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, time TEXT, sum FLOAT, comment TEXT);",
			[],
			(error) => {
				console.error("Error creating table:", error);
			}
		);
	});
};
