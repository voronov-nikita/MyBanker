import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import * as FileSystem from "expo-file-system";

const filePath = FileSystem.documentDirectory + "settings.json";

const App = () => {
	const [fileContent, setFileContent] = useState(null);

	// Функция для записи JSON в файл
	const writeToFile = async (data) => {
		try {
			const json = JSON.stringify(data, null, 2);
			await FileSystem.writeAsStringAsync(filePath, json, {
				encoding: FileSystem.EncodingType.UTF8,
			});
			console.log("Файл успешно сохранен");
		} catch (error) {
			console.error("Ошибка записи в файл:", error);
		}
	};

	// Функция для чтения JSON из файла
	const readFromFile = async () => {
		try {
			const content = await FileSystem.readAsStringAsync(filePath, {
				encoding: FileSystem.EncodingType.UTF8,
			});
			const jsonData = JSON.parse(content);
			console.log("Содержимое файла:", jsonData);
			setFileContent(jsonData);
		} catch (error) {
			console.error("Ошибка чтения файла:", error);
		}
	};

	return (
		<View style={{ marginTop: 50, padding: 20 }}>
			<Button
				title="Сохранить данные"
				onPress={() =>
					writeToFile({ pin: true })
				}
			/>
			<Button title="Загрузить данные" onPress={readFromFile} />
			{fileContent && (
				<Text>Содержимое файла: {JSON.stringify(fileContent, null, 2)}</Text>
			)}
		</View>
	);
};

export default App;
