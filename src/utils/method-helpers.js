import { NavigationActions } from "react-navigation";
import I18n from "../locale";

export const resetNavigationTo = (routeName: string, navigation: {}) => {
    const resetAction = NavigationActions.reset({
        index: 0,
        key: null,
        actions: [NavigationActions.navigate({ routeName })]
    });

    navigation.dispatch(resetAction);
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const delay = (delayed, ms) => Promise.all([delayed, sleep(ms)]).then(([data]) => data);

export const translate = (key, lang, interpolation = null) => I18n.t(key, { locale: lang, ...interpolation });

export const configureLocale = language => {
    I18n.locale = language;
    I18n.fallbacks = true;

    /*moment.updateLocale(language, {
		relativeTime: translate("common.relativeTime", language)
	});*/
};
