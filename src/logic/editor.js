//
// Файл для редактирования JSON файлов напрямую из приложения REACT NATIVE.
// Таким образом можно будет изменять настройки приложения и сохранять их
// с использованием сторонних файлов. Например `settings.js`
//

import * as FileSystem from "expo-file-system";

// Путь к файлу в локальной системе
const fileUri = `${FileSystem.documentDirectory}../settings.json`;

// Функция для чтения файла
const readFile = async () => {
	try {
		const fileExists = await FileSystem.getInfoAsync(fileUri);
		if (!fileExists.exists) {
			console.log("Файл не существует");
			return null;
		}
		const content = await FileSystem.readAsStringAsync(fileUri);
		const jsonData = JSON.parse(content);
		console.log("Содержимое файла:", jsonData);
		return jsonData;
	} catch (error) {
		console.error("Ошибка при чтении файла:", error);
	}
};

// Функция для записи данных в файл
const writeFile = async (data) => {
	try {
		await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(data, null, 2));
		console.log("Файл успешно сохранен");
	} catch (error) {
		console.error("Ошибка при записи файла:", error);
	}
};

// Пример использования
export const editJSON = async () => {
	const data = { pin: false };
	await writeFile(data); // Сохранение данных
};
