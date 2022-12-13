export default class String {
    static abbreviateTo(maxLength, str) {
        if (str.length > Number(maxLength)) {
            const lastSpace = str.lastIndexOf(" ");
            const newStr = str.slice(0, lastSpace);
            return newStr;
        }
    }
}