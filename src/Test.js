import React from "react";
import { View, Button, Alert } from "react-native";

const App = () => {
	const showAlert = () => {
		Alert.alert(
			"Внимание", // Заголовок уведомления
			"Вы уверены, что хотите продолжить?", // Сообщение уведомления
			[
				{
					text: "Нет",
					onPress: () => console.log("Отменено"),
					style: "cancel", // Кнопка отмены
				},
				{
					text: "Да",
					onPress: () => console.log("Подтверждено"),
				},
			],
			{ cancelable: true } // Уведомление можно закрыть нажатием вне его или кнопкой Назад
		);
	};

	return (
		<View style={{ marginTop: 50 }}>
			<Button title="Показать уведомление" onPress={showAlert} />
		</View>
	);
};

export default App;
