//
// Файл конфигурации.
// Здесь прописаны глобальные переменные для всех файлов в приложении.
//

// import { getValue } from "./logic/editor";

// Общие конфиги
export const CONFIG = {
	data: {
		password: "3907",
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
		disactiveIconColor: "gray",
	},
};

// Хеш таблица с цветовой палитрой для тегов
export const TAGCOLORS = {
	наличные: "#808080",
	"дебетовый счет": "#FFA07A",
	"кредитный счет": "#87CEEB",
	"накопительный счет": "#FFFF00",
	вклад: "#32CD32",
};

// Иконки
export const ICONS = {
	home: "home",
	history: "access-time",
	target: "star",
	settings: "settings",
};
