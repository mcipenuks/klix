import { formatText } from './formatting';

describe('formatText', () => {
    it('should return empty string if no text was provided', () => {
        expect(formatText(null)).toEqual('');
        expect(formatText(undefined)).toEqual('');
    });

    it('should replace placholders with provided arguments', () => {
        const text = 'Hello {0}, welcome to {1}'
        expect(formatText(text, 'Joe', 'Latvia')).toEqual('Hello Joe, welcome to Latvia');
    });

    it ('should return the same provided text if no arguments provided', () => {
        const text = 'Hello {0}, welcome to {1}'
        expect(formatText(text)).toEqual(text);
    });

    it ('should replace placholder if provided argument is a string or a number', () => {
        const text = "My name is {0} and I'm {1} years old"
        expect(formatText(text, 'Joe', 30)).toEqual("My name is Joe and I'm 30 years old");
    });
});
