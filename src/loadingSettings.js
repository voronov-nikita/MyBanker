//
// Файл для догрузки настроек приложения
// ИСПОЛЬЗУЕТСЯ ДЛЯ DEBUG ПРИЛОЖЕНИЯ!
//

import { setValue, clearStorage } from "./logic/editor";

export const loading = () => {
	clearStorage();

	setValue("pin", "3907");
	setValue("theme", "dark");
	setValue("language", "rus");
};
