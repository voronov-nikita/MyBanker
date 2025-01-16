//
// Логика локальной SQLite базы данных для хранения различного рода информации.
// В фале представлены функции, которые рекомендуется импортировать
// в страницы проекта и логических компонентов
//

import SQLite from "react-native-sqlite-storage";
import { CONFIG } from "../config";

// Открытие базы данных
const db = SQLite.openDatabase(
	{
		name: CONFIG.databaseName,
		location: "default",
	},
	() => {
		console.log("Database opened");
	},
	(error) => {
		console.log("Error opening database: ", error);
	}
);

// Функция для инициализации базы данных
export const initializeDatabase = () => {
	db.transaction((tx) => {
		tx.executeSql(
			`CREATE TABLE IF NOT EXISTS Bank (
				id INTEGER PRIMARY KEY AUTOINCREMENT,
				title TEXT NOT NULL,
				tag TEXT NOT NULL,
				comment TEXT
			)`,
			[],
			() => {
				console.log("Table created successfully");
			},
			(error) => {
				console.log("Error creating table: ", error);
			}
		);
	});
};

// Добавление счета
export const addBank = (title, tag, comment) => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				"INSERT INTO Bank (title, tag, comment) VALUES (?, ?, ?)",
				[title, tag, comment],
				(tx, results) => {
					resolve(results);
				},
				(error) => {
					reject(error);
				}
			);
		});
	});
};

// Получение всех счетов
export const getBanks = () => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				"SELECT * FROM Bank",
				[],
				(tx, results) => {
					const rows = results.rows;
					let users = [];
					for (let i = 0; i < rows.length; i++) {
						users.push(rows.item(i));
					}
					resolve(users);
				},
				(error) => {
					reject(error);
				}
			);
		});
	});
};

// Изменение счета
export const updateBank = (id, title, tag, comment) => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				"UPDATE Bank SET name = ?, age = ? WHERE id = ?",
				[title, tag, comment, id],
				(tx, results) => {
					resolve(results);
				},
				(error) => {
					reject(error);
				}
			);
		});
	});
};

// Удаление счета
export const deleteBank = (id) => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				"DELETE FROM Bank WHERE id = ?",
				[id],
				(tx, results) => {
					resolve(results);
				},
				(error) => {
					reject(error);
				}
			);
		});
	});
};

// Закрытие базы данных
export const closeDatabase = () => {
	db.close(
		() => {
			console.log("Database closed");
		},
		(error) => {
			console.log("Error closing database: ", error);
		}
	);
};
