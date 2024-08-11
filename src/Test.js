import React, { useEffect, useState } from "react";
import { View, Text, Button, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Test = () => {
	const [isFirstLaunch, setIsFirstLaunch] = useState(null); // Указываем начальное значение как null

	useEffect(() => {
		const checkFirstLaunch = async () => {
			try {
				const hasLaunched = await AsyncStorage.getItem("hasLaunched");
				if (hasLaunched === null) {
					// Если значение null, значит приложение запускается впервые
					await AsyncStorage.setItem("hasLaunched", "true"); // Сохраняем флаг, что приложение запустилось
					setIsFirstLaunch(true);
				} else {
					// Приложение уже запускалось ранее
					setIsFirstLaunch(false);
				}
			} catch (error) {
				console.error("Ошибка при доступе к AsyncStorage:", error);
			}
		};

		checkFirstLaunch();
	}, []);

	if (isFirstLaunch === null) {
		// Показать индикатор загрузки, пока мы ждем проверки
		return <ActivityIndicator size="large" color="#0000ff" />;
	}

	return (
		<View>
			{isFirstLaunch ? (
				<>
					<Text>Это первый запуск приложения!</Text>
				</>
			) : (
				<>
					<Text>Добро пожаловать обратно!</Text>
				</>
			)}
		</View>
	);
};
