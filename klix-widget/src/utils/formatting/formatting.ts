// For this demo example went with the list formatting, but i think named formatting is better
export function formatText(text: string, ...args: Array<string>): string {
    if (!text) {
        return '';
    }

    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== 'string') {
            continue;
        }
        text = text.replace(`{${i}}`, args[i]);
    }

    return text;
}