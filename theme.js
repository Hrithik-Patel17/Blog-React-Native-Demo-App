var primaryColor = "#123456";
var accentColor = "#ffffff";

export default class Theme {

    static primary() {
        return primaryColor;
    }

    static accent() {
        return accentColor;
    }
    static setPrimaryColor(color) {
        primaryColor = color
    }
    static setAccentColor(color) {
        accentColor = color
    }
}