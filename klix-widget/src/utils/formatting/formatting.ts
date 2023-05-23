export function formatText(text: string, ...args: Array<string|number>) {
    if (!text) {
        return '';
    }

    for (let i = 0; i < args.length; i++) {
        text = text.replace(`{${i}}`, args[i].toString());
    }

    return text;
}