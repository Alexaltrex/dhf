import {action, makeObservable, observable} from "mobx";

export class Store {
    burgerMenu: boolean = false
    scrollDown: boolean = true
    pageYOffset: number = 0

    constructor() {
        makeObservable(this, {
            burgerMenu: observable,
            scrollDown: observable,
            pageYOffset: observable,

            setBurgerMenu: action.bound,
            setScrollDown: action.bound,
            setPageYOffset: action.bound,
        })
    }

    setBurgerMenu(burgerMenu: boolean) {
        this.burgerMenu = burgerMenu
    }

    setScrollDown(scrollDown: boolean) {
        this.scrollDown = scrollDown;
    }

    setPageYOffset(pageYOffset: number) {
        this.pageYOffset = pageYOffset;
    }
}
export const store = new Store()
