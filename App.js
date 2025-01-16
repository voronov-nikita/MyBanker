//
// Основной файл разработки и запуска приложения
//

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

// импорт отдельных модулей - страниц
import { HomeScreen } from "./src/pages/HomePage";
import { SettingsScreen } from "./src/pages/SettingsPage";
import { AddNewBankScreen } from "./src/pages/AddNewBankPage";
import { AddNewTargetScreen } from "./src/pages/AddNewTargetPage";

// конфигуратор навигации
const Stack = createStackNavigator();

export default function App() {

	// loading();

	return (
		// <Test />
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerStyle: {
						backgroundColor: "#f0f0f0",
					},
				}}
			>

				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{
						headerShown: false,
					}}
				/>

				<Stack.Screen
					name="Settings"
					component={SettingsScreen}
					options={{ headerTitleAlign: "center" }}
				/>

				<Stack.Screen
					name="AddNewBank"
					component={AddNewBankScreen}
					options={{ headerTitle: " " }}
				/>

				<Stack.Screen
					name="AddNewTarget"
					component={AddNewTargetScreen}
					options={{ headerTitle: " " }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
