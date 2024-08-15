//
// Основной файл разработки и запуска приложения
//

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

// импорт отдельных модулей - страниц
import { HomeScreen } from "./src/pages/HomePage";
import { AuthScreen } from "./src/pages/AuthPage";
import { SettingsScreen } from "./src/pages/SettingsPage";
import { ChangePinScreen } from "./src/pages/ChangePinPage";
import { ForgotPasswordScreen } from "./src/pages/ForgotPasswordPage";

import Test from "./src/Test";

// конфигуратор навигации
const Stack = createStackNavigator();

export default function App() {
	return (
		<Test />
		// <NavigationContainer>
		// 	<Stack.Navigator
		// 		initialRouteName="Auth"
		// 		screenOptions={{
		// 			headerStyle: {
		// 				backgroundColor: "#ffffff",
		// 			},
		// 		}}
		// 	>
		// 		<Stack.Screen
		// 			name="Auth"
		// 			component={AuthScreen}
		// 			options={{
		// 				headerShown: false,
		// 			}}
		// 		/>

		// 		<Stack.Screen
		// 			name="ForgotPassword"
		// 			component={ForgotPasswordScreen}
		// 			options={{
		// 				title: " ",
		// 			}}
		// 		/>

		// 		<Stack.Screen
		// 			name="Home"
		// 			component={HomeScreen}
		// 			options={{
		// 				headerShown: false,
		// 			}}
		// 		/>

		// 		<Stack.Screen
		// 			name="ChangePIN"
		// 			component={ChangePinScreen}
		// 			options={{
		// 				title: " ",
		// 			}}
		// 		/>

		// 		<Stack.Screen
		// 			name="Settings"
		// 			component={SettingsScreen}
		// 			options={{ headerTitleAlign: "center" }}
		// 		/>
		// 	</Stack.Navigator>
		// </NavigationContainer>
	);
}
