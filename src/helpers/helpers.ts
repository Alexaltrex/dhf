import * as Bowser from "bowser";

export const isSafari = () => {
    const browser = Bowser.getParser(window.navigator.userAgent);
    return browser.getBrowserName() === "Safari"
}
