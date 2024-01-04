import english from "./en.json";
import spanish from "./es.json";
import catalan from "./ca.json";

const translations = {
	en: english,
	es: spanish,
	ca: catalan,
};

export const getI18n = ({
	currentLocale = "es",
}: {
	currentLocale: string | undefined; 
}) => {
	switch (currentLocale) {
		case "en":
			return translations.en;
		case "es":
			return translations.es;
		case "ca":
			return translations.ca;
		default:
			return translations.es;
	}
};
