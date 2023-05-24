import { HOST_BASE_URL } from "./env";

const DEFAULT_LANGUAGE = 'en';

async function fetchTranslations(componentName: string, locale: string): Promise<any> {
    const localizationUrl = `${HOST_BASE_URL}/i18n/${componentName}.${locale}.json`;
    return new Promise((resolve, reject): void => {
        fetch(localizationUrl).then((result) => {
            if (result.ok) {
                resolve(result.json());
            } else {
                reject();
            };
        }, () => reject());
    });
}

export async function getComponentTranslations(componentName: string, language: string): Promise<any> {
    try {
        return await fetchTranslations(componentName, language);
    } catch (e) {
        return await fetchTranslations(componentName, DEFAULT_LANGUAGE);
    }
}
