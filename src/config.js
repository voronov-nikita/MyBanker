//
// Файл конфигурации.
// Здесь прописаны глобальные переменные для всех файлов в приложении.
//

import { getValue } from "./logic/editor";

// Общие конфиги
export const CONFIG = {
	data: {
		password: getValue("pin"),
		textQuestion: ["Как звали моего хомяка?"],
		answerQuestion: "python",
	},

	maxLengthInputBank: 15,
	maxLengthInputTarget: 10,

	iconSize: 26,
};

export const COLORS = {
	createButton: {
		original: "#4CAF50",
		fake: "#808080",
	},

	forgotPin: {
		original: "#000",
	},

	home: {
		activeIconColor: "#4CAF50",
		disactiveIconColor: "gray"
	}
};

// Хеш таблица с цветовой палитрой для тегов
export const TAGCOLORS = new Map();
TAGCOLORS.set("Наличные", "#808080");
TAGCOLORS.set("Дебетовый счет", "#FFA07A");
TAGCOLORS.set("Кредитный счет", "#87CEEB");
TAGCOLORS.set("Накопительный счет", "#FFFF00");
TAGCOLORS.set("Вклад", "#32CD32");

// Иконки
export const ICONS = {
	home: "home",
	history: "access-time",
	target: "star",
	settings: "settings",
};
