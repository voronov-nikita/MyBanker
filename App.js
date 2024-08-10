// 
// Основной файл разработки и запуска приложения
// 

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

// импорт отдельных модулей - страниц
import { HomeScreen } from "./src/pages/HomePage";
import { AuthScreen } from "./src/pages/AuthPage";

// импорт отдельных компонентов для приложения
// import { AuthButton }

// конфигуратор навигации
const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerStyle: {
						backgroundColor: "#ff00ff",
					},
				}}
			>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{
						headerTitle: " ",
						// headerRight: () => <AuthButton />,
					}}
				/>

				<Stack.Screen
					name="Auth"
					component={AuthScreen}
					options={{
						headerTitle: " ",
						headerStyle: {
							backgroundColor: "#ffffff00",
						},
					}}
				/>

			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;