//
// Файл конфигурации.
// Здесь прописаны глобальные переменные для всех файлов в приложении.
//

export const CONFIG = {
	data: {
		password: "3907",
		answerQuestion: "python",
	},

	iconSize: 26,
	settingsPath: "../settings.json",
};

export const COLORS = new Map();
COLORS.set("Наличные", "#808080");
COLORS.set("Дебетовый счет", "#FFA07A");
COLORS.set("Кредитный счет", "#87CEEB");
COLORS.set("Накопительный счет", "#FFFF00");
COLORS.set("Вклад", "#32CD32");

export const ICONS = {
	home: "home",
	history: "access-time",
	target: "star",
	settings: "settings",
};
