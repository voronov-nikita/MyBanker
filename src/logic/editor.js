//
// Файл для редактирования JSON файлов напрямую из приложения REACT NATIVE.
// Таким образом можно будет изменять настройки приложения и сохранять их 
// с использованием сторонних файлов. Например `settings.js`
//

import RNFS from "react-native-fs";

// Путь к файлу
const path = RNFS.DocumentDirectoryPath + "/data.json";

// Чтение файла
const readJSONFile = async () => {
	try {
		const content = await RNFS.readFile(path, "utf8");
		const jsonData = JSON.parse(content);
		console.log("Данные:", jsonData);
		return jsonData;
	} catch (error) {
		console.error("Ошибка чтения файла:", error);
	}
};

// Запись файла
const writeJSONFile = async (data) => {
	try {
		const content = JSON.stringify(data, null, 2);
		await RNFS.writeFile(path, content, "utf8");
		console.log("Файл успешно записан");
	} catch (error) {
		console.error("Ошибка записи файла:", error);
	}
};

// Пример редактирования JSON
const editJSON = async () => {
	const jsonData = await readJSONFile();

	// Вносим изменения
	jsonData.newKey = "newValue";

	// Записываем изменения обратно в файл
	await writeJSONFile(jsonData);
};
