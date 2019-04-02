import englishMessages from './lang/en';
import spanishMessages from './lang/es'

export default (locale) => {
	if(locale === 'es') {
		return spanishMessages;
	}

	// Always fallback on english
	return englishMessages;
};
