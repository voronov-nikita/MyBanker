// 
// Домашняя страница. Здесь происходят основные действия пользователя.
// Эта часть кода представляет из себя отдельно взятые части страниц с импортом их элементов
// Страницы Main, Target, History являются подстраницами этого "второго навитагора"
// 

import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { HistoryScreen } from "./HistoryPage";
import { MainScreen } from "./MainPage";
import { TagetScreen } from "./TargetPage";

import { SettingsButton } from "../buttons/SettingsButton";

import { ICONS, CONFIG, COLORS } from "../config";

const Tab = createBottomTabNavigator();

export const HomeScreen = ({ navigation }) => {
	return (
		<Tab.Navigator
			initialRouteName="Main"
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color }) => {
					let iconName;

					if (route.name === "Main") {
						iconName = ICONS.home;
					} else if (route.name === "History") {
						iconName = ICONS.history;
					} else if (route.name === "Target") {
						iconName = ICONS.target;
					}

					return (
						<MaterialIcons
							name={iconName}
							size={CONFIG.iconSize}
							color={color}
						/>
					);
				},
				tabBarActiveTintColor: COLORS.home.activeIconColor,
				tabBarInactiveTintColor: COLORS.home.disactiveIconColor,
				headerTitleAlign: "center",
			})}
		>
			<Tab.Screen name="Target" component={TagetScreen} />
			<Tab.Screen
				name="Main"
				component={MainScreen}
				options={{
					headerRight: () => <SettingsButton navigation={navigation} />,
				}}
			/>
			<Tab.Screen name="History" component={HistoryScreen} />
		</Tab.Navigator>
	);
};
