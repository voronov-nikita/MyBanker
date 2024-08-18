//
// Файл для редактирования JSON файлов напрямую из приложения REACT NATIVE.
// Таким образом можно будет изменять настройки приложения и сохранять их
// с использованием сторонних файлов. Например `settings.js`
//

import { AsyncStorage } from "react-native";

// функция для загрузки каких-то данных в формате ключ-значение в конфигурацию приложения
export const setValue = async (key, value) => {
	await AsyncStorage.setItem(key, value);
};

// функция получения данных по ключу
export const getValue = async (key) => {
	const data = await AsyncStorage.getItem(key);
	return data;
};

export const delValue = async (key) => {
	await AsyncStorage.removeItem("myKey");
};

export const clearStorage = async () => {
	await AsyncStorage.clear();
};
