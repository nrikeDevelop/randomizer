const h = window.App.h;

import { a as openURL, b as createColorClasses, d as createThemedClasses, c as hostContext } from './chunk-7c632336.js';
import { f as hasShadowDom } from './chunk-5a5b5816.js';

class Button {
    constructor() {
        this.inToolbar = false;
        this.buttonType = "button";
        this.disabled = false;
        this.routerDirection = "forward";
        this.strong = false;
        this.type = "button";
        this.onFocus = () => {
            this.ionFocus.emit();
        };
        this.onBlur = () => {
            this.ionBlur.emit();
        };
    }
    componentWillLoad() {
        this.inToolbar = !!this.el.closest("ion-buttons");
    }
    onClick(ev) {
        if (this.type === "button") {
            openURL(this.win, this.href, ev, this.routerDirection);
        }
        else if (hasShadowDom(this.el)) {
            const form = this.el.closest("form");
            if (form) {
                ev.preventDefault();
                const fakeButton = document.createElement("button");
                fakeButton.type = this.type;
                fakeButton.style.display = "none";
                form.appendChild(fakeButton);
                fakeButton.click();
                fakeButton.remove();
            }
        }
    }
    hostData() {
        const { buttonType, disabled, color, expand, shape, size, strong } = this;
        let fill = this.fill;
        if (fill === undefined) {
            fill = this.inToolbar ? "clear" : "solid";
        }
        return {
            "aria-disabled": disabled ? "true" : null,
            class: Object.assign({}, createColorClasses(color), { [buttonType]: true, [`${buttonType}-${expand}`]: expand !== undefined, [`${buttonType}-${size}`]: size !== undefined, [`${buttonType}-${shape}`]: shape !== undefined, [`${buttonType}-${fill}`]: true, [`${buttonType}-strong`]: strong, "button-disabled": disabled, "ion-activatable": true, "ion-focusable": true })
        };
    }
    render() {
        const TagType = this.href === undefined ? "button" : "a";
        const attrs = (TagType === "button")
            ? { type: this.type }
            : { href: this.href };
        return (h(TagType, Object.assign({}, attrs, { class: "button-native", disabled: this.disabled, onFocus: this.onFocus, onBlur: this.onBlur }), h("span", { class: "button-inner" }, h("slot", { name: "icon-only" }), h("slot", { name: "start" }), h("slot", null), h("slot", { name: "end" })), this.mode === "md" && h("ion-ripple-effect", { type: this.inToolbar ? "unbounded" : "bounded" })));
    }
    static get is() { return "ion-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "buttonType": {
                "type": String,
                "attr": "button-type",
                "mutable": true
            },
            "color": {
                "type": String,
                "attr": "color"
            },
            "disabled": {
                "type": Boolean,
                "attr": "disabled",
                "reflectToAttr": true
            },
            "el": {
                "elementRef": true
            },
            "expand": {
                "type": String,
                "attr": "expand",
                "reflectToAttr": true
            },
            "fill": {
                "type": String,
                "attr": "fill",
                "reflectToAttr": true,
                "mutable": true
            },
            "href": {
                "type": String,
                "attr": "href"
            },
            "mode": {
                "type": String,
                "attr": "mode"
            },
            "routerDirection": {
                "type": String,
                "attr": "router-direction"
            },
            "shape": {
                "type": String,
                "attr": "shape",
                "reflectToAttr": true
            },
            "size": {
                "type": String,
                "attr": "size",
                "reflectToAttr": true
            },
            "strong": {
                "type": Boolean,
                "attr": "strong"
            },
            "type": {
                "type": String,
                "attr": "type"
            },
            "win": {
                "context": "window"
            }
        };
    }
    static get events() {
        return [{
                "name": "ionFocus",
                "method": "ionFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionBlur",
                "method": "ionBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
    static get listeners() {
        return [{
                "name": "click",
                "method": "onClick"
            }];
    }
    static get style() { return ":host {\n  /**\n   * \@prop --background: Background of the button\n   * \@prop --background-activated: Background of the button when activated\n   * \@prop --background-focused: Background of the button when focused\n   *\n   * \@prop --color: Text color of the button\n   * \@prop --color-activated: Text color of the button when activated\n   * \@prop --color-focused: Text color of the button when focused\n   *\n   * \@prop --transition: Transition of the button\n   *\n   * \@prop --border-radius: Border radius of the button\n   * \@prop --border-width: Border width of the button\n   * \@prop --border-style: Border style of the button\n   * \@prop --border-color: Border color of the button\n   *\n   * \@prop --ripple-color: Color of the button ripple effect\n   *\n   * \@prop --box-shadow: Box shadow of the button\n   * \@prop --opacity: Opacity of the button\n   *\n   * \@prop --padding-top: Padding top of the button\n   * \@prop --padding-end: Padding end of the button\n   * \@prop --padding-bottom: Padding bottom of the button\n   * \@prop --padding-start: Padding start of the button\n   */\n  --overflow: hidden;\n  --ripple-color: currentColor;\n  --border-width: initial;\n  --border-color: initial;\n  --border-style: initial;\n  --box-shadow: none;\n  display: inline-block;\n  width: auto;\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  text-align: center;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  vertical-align: top;\n  vertical-align: -webkit-baseline-middle;\n  pointer-events: auto;\n  -webkit-font-kerning: none;\n  font-kerning: none; }\n\n:host(.button-disabled) {\n  pointer-events: none; }\n\n:host(.button-disabled) .button-native {\n  cursor: default;\n  opacity: .5;\n  pointer-events: none; }\n\n:host(.button-solid) {\n  --background: var(--ion-color-primary, #3880ff);\n  --background-focused: var(--ion-color-primary-shade, #3171e0);\n  --color: var(--ion-color-primary-contrast, #fff);\n  --color-activated: var(--ion-color-primary-contrast, #fff);\n  --color-focused: var(--ion-color-primary-contrast, #fff); }\n\n:host(.button-solid.ion-color) .button-native {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast); }\n\n:host(.button-solid.ion-color.ion-focused) .button-native {\n  background: var(--ion-color-shade); }\n\n:host(.button-outline) {\n  --border-color: var(--ion-color-primary, #3880ff);\n  --background: transparent;\n  --color: var(--ion-color-primary, #3880ff);\n  --color-focused: var(--ion-color-primary, #3880ff); }\n\n:host(.button-outline.ion-color) .button-native {\n  border-color: var(--ion-color-base);\n  background: transparent;\n  color: var(--ion-color-base); }\n\n:host(.button-outline.ion-focused.ion-color) .button-native {\n  background: rgba(var(--ion-color-base-rgb), 0.1);\n  color: var(--ion-color-base); }\n\n:host(.button-clear) {\n  --border-width: 0;\n  --background: transparent;\n  --color: var(--ion-color-primary, #3880ff); }\n\n:host(.button-clear.ion-color) .button-native {\n  background: transparent;\n  color: var(--ion-color-base); }\n\n:host(.button-clear.ion-focused.ion-color) .button-native {\n  background: rgba(var(--ion-color-base-rgb), 0.1);\n  color: var(--ion-color-base); }\n\n:host(.button-clear.activated.ion-color) .button-native {\n  background: transparent; }\n\n:host(.button-block) {\n  display: block; }\n\n:host(.button-block) .button-native {\n  margin-left: 0;\n  margin-right: 0;\n  display: block;\n  width: 100%;\n  clear: both;\n  contain: content; }\n\n:host(.button-block) .button-native::after {\n  clear: both; }\n\n:host(.button-full) {\n  display: block; }\n\n:host(.button-full) .button-native {\n  margin-left: 0;\n  margin-right: 0;\n  display: block;\n  width: 100%;\n  contain: content; }\n\n:host(.button-full:not(.button-round)) .button-native {\n  border-radius: 0;\n  border-right-width: 0;\n  border-left-width: 0; }\n\n.button-native {\n  border-radius: var(--border-radius);\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: var(--padding-start);\n  padding-right: var(--padding-end);\n  padding-top: var(--padding-top);\n  padding-bottom: var(--padding-bottom);\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  -webkit-transition: var(--transition);\n  transition: var(--transition);\n  border-width: var(--border-width);\n  border-style: var(--border-style);\n  border-color: var(--border-color);\n  outline: none;\n  background: var(--background);\n  line-height: 1;\n  -webkit-box-shadow: var(--box-shadow);\n  box-shadow: var(--box-shadow);\n  contain: layout style;\n  cursor: pointer;\n  opacity: var(--opacity);\n  overflow: var(--overflow);\n  z-index: 0;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    .button-native {\n      padding-left: unset;\n      padding-right: unset;\n      -webkit-padding-start: var(--padding-start);\n      padding-inline-start: var(--padding-start);\n      -webkit-padding-end: var(--padding-end);\n      padding-inline-end: var(--padding-end); } }\n\n.button-native::-moz-focus-inner {\n  border: 0; }\n\n:host(.ion-focused) .button-native {\n  background: var(--background-focused);\n  color: var(--color-focused); }\n\n:host(.activated) .button-native {\n  background: var(--background-activated);\n  color: var(--color-activated); }\n\n.button-inner {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%; }\n\n::slotted(ion-icon) {\n  font-size: 1.4em;\n  pointer-events: none; }\n\n::slotted(ion-icon[slot=\"start\"]) {\n  margin-left: -0.3em;\n  margin-right: 0.3em;\n  margin-top: 0;\n  margin-bottom: 0; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    ::slotted(ion-icon[slot=\"start\"]) {\n      margin-left: unset;\n      margin-right: unset;\n      -webkit-margin-start: -0.3em;\n      margin-inline-start: -0.3em;\n      -webkit-margin-end: 0.3em;\n      margin-inline-end: 0.3em; } }\n\n::slotted(ion-icon[slot=\"end\"]) {\n  margin-left: 0.3em;\n  margin-right: -0.2em;\n  margin-top: 0;\n  margin-bottom: 0; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    ::slotted(ion-icon[slot=\"end\"]) {\n      margin-left: unset;\n      margin-right: unset;\n      -webkit-margin-start: 0.3em;\n      margin-inline-start: 0.3em;\n      -webkit-margin-end: -0.2em;\n      margin-inline-end: -0.2em; } }\n\n::slotted(ion-icon[slot=\"icon-only\"]) {\n  font-size: 1.8em; }\n\nion-ripple-effect {\n  color: var(--ripple-color); }\n\n:host {\n  --border-radius: 10px;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 1em;\n  --padding-end: 1em;\n  --transition: background-color, opacity 100ms linear;\n  margin-left: 2px;\n  margin-right: 2px;\n  margin-top: 4px;\n  margin-bottom: 4px;\n  height: 2.8em;\n  font-size: 16px;\n  font-weight: 500;\n  letter-spacing: -0.03em; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    :host {\n      margin-left: unset;\n      margin-right: unset;\n      -webkit-margin-start: 2px;\n      margin-inline-start: 2px;\n      -webkit-margin-end: 2px;\n      margin-inline-end: 2px; } }\n\n:host(.button-solid) {\n  --background-activated: var(--ion-color-primary-shade, #3171e0); }\n\n:host(.button-solid.activated) {\n  --opacity: 1; }\n\n:host(.button-outline) {\n  --border-radius: 10px;\n  --border-width: 1px;\n  --border-style: solid;\n  --background-activated: var(--ion-color-primary, #3880ff);\n  --background-focused: rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.1);\n  --color-activated: var(--ion-color-primary-contrast, #fff); }\n\n:host(.button-outline.activated.ion-color) .button-native {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast); }\n\n:host(.button-clear.activated) {\n  --opacity: 0.4; }\n\n:host(.button-clear) {\n  --background-activated: transparent;\n  --background-focused: rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.1);\n  --color-activated: var(--ion-color-primary, #3880ff);\n  --color-focused: var(--ion-color-primary, #3880ff); }\n\n:host(.button-round) {\n  --border-radius: 64px;\n  --padding-top: 0;\n  --padding-start: 26px;\n  --padding-end: 26px;\n  --padding-bottom: 0; }\n\n:host(.button-large) {\n  --border-radius: 12px;\n  --padding-top: 0;\n  --padding-start: 1em;\n  --padding-end: 1em;\n  --padding-bottom: 0;\n  height: 2.8em;\n  font-size: 20px; }\n\n:host(.button-small) {\n  --border-radius: 6px;\n  --padding-top: 0;\n  --padding-start: 0.9em;\n  --padding-end: 0.9em;\n  --padding-bottom: 0;\n  height: 2.1em;\n  font-size: 13px; }\n\n:host(.button-strong) {\n  font-weight: 600; }\n\n\@media (any-hover: hover) {\n  :host(.button-solid:hover) {\n    --opacity: 0.8; }\n  :host(.button-clear:hover) {\n    --opacity: 0.6; } }"; }
    static get styleMode() { return "ios"; }
}

class Card {
    hostData() {
        return {
            class: createColorClasses(this.color)
        };
    }
    static get is() { return "ion-card"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "color": {
                "type": String,
                "attr": "color"
            },
            "mode": {
                "type": String,
                "attr": "mode"
            }
        };
    }
    static get style() { return ".sc-ion-card-ios-h {\n  \n  --ion-safe-area-left: 0px;\n  --ion-safe-area-right: 0px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: block;\n  position: relative;\n  background: var(--background);\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  overflow: hidden; }\n\n.ion-color.sc-ion-card-ios-h {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast); }\n\n.sc-ion-card-ios-h.ion-color.sc-ion-card-ios-s  ion-card-header , .sc-ion-card-ios-h.ion-color.sc-ion-card-ios-s  ion-card-title , .sc-ion-card-ios-h.ion-color.sc-ion-card-ios-s  ion-card-subtitle  {\n  color: var(--ion-color-contrast); }\n\n.sc-ion-card-ios-s  img  {\n  display: block;\n  width: 100%; }\n\n.sc-ion-card-ios-s  ion-list  {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.sc-ion-card-ios-h {\n  --background: var(--ion-item-background, transparent);\n  --color: var(--ion-color-step-600, #666666);\n  margin-left: 16px;\n  margin-right: 16px;\n  margin-top: 24px;\n  margin-bottom: 24px;\n  border-radius: 8px;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  font-size: 14px;\n  -webkit-box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12); }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    .sc-ion-card-ios-h {\n      margin-left: unset;\n      margin-right: unset;\n      -webkit-margin-start: 16px;\n      margin-inline-start: 16px;\n      -webkit-margin-end: 16px;\n      margin-inline-end: 16px; } }"; }
    static get styleMode() { return "ios"; }
}

class CardContent {
    hostData() {
        return {
            class: createThemedClasses(this.mode, "card-content")
        };
    }
    static get is() { return "ion-card-content"; }
    static get properties() {
        return {
            "mode": {
                "type": String,
                "attr": "mode"
            }
        };
    }
    static get style() { return "ion-card-content {\n  display: block;\n  position: relative; }\n\n.card-content-ios {\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  font-size: 16px;\n  line-height: 1.4; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    .card-content-ios {\n      padding-left: unset;\n      padding-right: unset;\n      -webkit-padding-start: 20px;\n      padding-inline-start: 20px;\n      -webkit-padding-end: 20px;\n      padding-inline-end: 20px; } }\n  .card-content-ios h1 {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n    margin-bottom: 2px;\n    font-size: 24px;\n    font-weight: normal; }\n  .card-content-ios h2 {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 2px;\n    margin-bottom: 2px;\n    font-size: 16px;\n    font-weight: normal; }\n  .card-content-ios h3,\n  .card-content-ios h4,\n  .card-content-ios h5,\n  .card-content-ios h6 {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 2px;\n    margin-bottom: 2px;\n    font-size: 14px;\n    font-weight: normal; }\n  .card-content-ios p {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n    margin-bottom: 2px;\n    font-size: 14px; }"; }
    static get styleMode() { return "ios"; }
}

class CardHeader {
    constructor() {
        this.translucent = false;
    }
    hostData() {
        return {
            class: Object.assign({}, createColorClasses(this.color), { "card-header-translucent": this.translucent })
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-card-header"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "color": {
                "type": String,
                "attr": "color"
            },
            "mode": {
                "type": String,
                "attr": "mode"
            },
            "translucent": {
                "type": Boolean,
                "attr": "translucent"
            }
        };
    }
    static get style() { return ":host {\n  display: block;\n  position: relative;\n  background: var(--background);\n  color: var(--color); }\n\n:host(.ion-color) {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast); }\n\n:host(.ion-color) ::slotted(ion-card-title),\n:host(.ion-color) ::slotted(ion-card-subtitle) {\n  color: currentColor; }\n\n:host {\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 20px;\n  padding-bottom: 16px; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    :host {\n      padding-left: unset;\n      padding-right: unset;\n      -webkit-padding-start: 20px;\n      padding-inline-start: 20px;\n      -webkit-padding-end: 20px;\n      padding-inline-end: 20px; } }\n\n:host(.card-header-translucent) {\n  background-color: rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.9);\n  -webkit-backdrop-filter: saturate(180%) blur(30px);\n  backdrop-filter: saturate(180%) blur(30px); }"; }
    static get styleMode() { return "ios"; }
}

class CardTitle {
    hostData() {
        return {
            class: createColorClasses(this.color),
            "role": "heading",
            "aria-level": "2"
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-card-title"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "color": {
                "type": String,
                "attr": "color"
            },
            "mode": {
                "type": String,
                "attr": "mode"
            }
        };
    }
    static get style() { return ":host {\n  /**\n   * \@prop --color: Color of the card title\n   */\n  display: block;\n  position: relative;\n  color: var(--color); }\n\n:host(.ion-color) {\n  color: var(--ion-color-base); }\n\n:host {\n  --color: var(--ion-text-color, #000);\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  font-size: 28px;\n  font-weight: 700;\n  line-height: 1.2; }"; }
    static get styleMode() { return "ios"; }
}

class Item {
    constructor() {
        this.itemStyles = new Map();
        this.multipleInputs = false;
        this.button = false;
        this.detailIcon = "ios-arrow-forward";
        this.disabled = false;
        this.routerDirection = "forward";
        this.type = "button";
    }
    itemStyle(ev) {
        ev.stopPropagation();
        const tagName = ev.target.tagName;
        const updatedStyles = ev.detail;
        const newStyles = {};
        const childStyles = this.itemStyles.get(tagName) || {};
        let hasStyleChange = false;
        Object.keys(updatedStyles).forEach(key => {
            const itemKey = `item-${key}`;
            const newValue = updatedStyles[key];
            if (newValue !== childStyles[itemKey]) {
                hasStyleChange = true;
            }
            if (newValue) {
                newStyles[itemKey] = true;
            }
        });
        if (hasStyleChange) {
            this.itemStyles.set(tagName, newStyles);
            this.el.forceUpdate();
        }
    }
    componentDidLoad() {
        Array.from(this.el.querySelectorAll("ion-button")).forEach(button => {
            if (button.size === undefined) {
                button.size = "small";
            }
        });
        const inputs = this.el.querySelectorAll("ion-select, ion-datetime");
        this.multipleInputs = inputs.length > 1 ? true : false;
    }
    isClickable() {
        return (this.href !== undefined || this.button);
    }
    hostData() {
        const childStyles = {};
        this.itemStyles.forEach(value => {
            Object.assign(childStyles, value);
        });
        return {
            "aria-disabled": this.disabled ? "true" : null,
            class: Object.assign({}, childStyles, createColorClasses(this.color), { [`item-lines-${this.lines}`]: this.lines !== undefined, "item-disabled": this.disabled, "in-list": hostContext("ion-list", this.el), "item": true, "item-multiple-inputs": this.multipleInputs, "ion-activatable": this.isClickable(), "ion-focusable": true })
        };
    }
    render() {
        const { href, detail, mode, win, detailIcon, routerDirection, type } = this;
        const clickable = this.isClickable();
        const TagType = clickable ? (href === undefined ? "button" : "a") : "div";
        const attrs = TagType === "button" ? { type } : { href };
        const showDetail = detail !== undefined ? detail : mode === "ios" && clickable;
        return [
            h(TagType, Object.assign({}, attrs, { class: "item-native", disabled: this.disabled, onClick: (ev) => openURL(win, href, ev, routerDirection) }), h("slot", { name: "start" }), h("div", { class: "item-inner" }, h("div", { class: "input-wrapper" }, h("slot", null)), h("slot", { name: "end" }), showDetail && h("ion-icon", { icon: detailIcon, lazy: false, class: "item-detail-icon" }), h("div", { class: "item-inner-highlight" })), clickable && mode === "md" && h("ion-ripple-effect", null)),
            h("div", { class: "item-highlight" })
        ];
    }
    static get is() { return "ion-item"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "button": {
                "type": Boolean,
                "attr": "button"
            },
            "color": {
                "type": String,
                "attr": "color"
            },
            "detail": {
                "type": Boolean,
                "attr": "detail"
            },
            "detailIcon": {
                "type": String,
                "attr": "detail-icon"
            },
            "disabled": {
                "type": Boolean,
                "attr": "disabled"
            },
            "el": {
                "elementRef": true
            },
            "href": {
                "type": String,
                "attr": "href"
            },
            "lines": {
                "type": String,
                "attr": "lines"
            },
            "mode": {
                "type": String,
                "attr": "mode"
            },
            "multipleInputs": {
                "state": true
            },
            "routerDirection": {
                "type": String,
                "attr": "router-direction"
            },
            "type": {
                "type": String,
                "attr": "type"
            },
            "win": {
                "context": "window"
            }
        };
    }
    static get listeners() {
        return [{
                "name": "ionStyle",
                "method": "itemStyle"
            }];
    }
    static get style() { return ":host {\n  /**\n   * \@prop --background: Background of the item\n   * \@prop --background-activated: Background of the activated item\n   * \@prop --border-color: Color of the item border\n   * \@prop --border-radius: Radius of the item border\n   * \@prop --border-style: Style of the item border\n   * \@prop --border-width: Width of the item border\n   * \@prop --box-shadow: Box shadow of the item\n   * \@prop --color: Color of the item\n   *\n   * \@prop --detail-icon-color: Color of the item detail icon\n   * \@prop --detail-icon-opacity: Opacity of the item detail icon\n   * \@prop --detail-icon-font-size: Font size of the item detail icon\n   * \@prop --inner-border-width: Width of the item inner border\n   * \@prop --inner-box-shadow: Box shadow of the item inner\n   * \@prop --inner-padding-bottom: Bottom padding of the item inner\n   * \@prop --inner-padding-end: End padding of the item inner\n   * \@prop --inner-padding-start: Start padding of the item inner\n   * \@prop --inner-padding-top: Top padding of the item inner\n   *\n   * \@prop --min-height: Minimum height of the item\n   * \@prop --padding-bottom: Bottom padding of the item\n   * \@prop --padding-end: End padding of the item\n   * \@prop --padding-start: Start padding of the item\n   * \@prop --padding-top: Top padding of the item\n   * \@prop --transition: Transition of the item\n   *\n   * \@prop --highlight-height: The height of the highlight on the item\n   * \@prop --highlight-color-focused: The color of the highlight on the item when focused\n   * \@prop --highlight-color-valid: The color of the highlight on the item when valid\n   * \@prop --highlight-color-invalid: The color of the highlight on the item when invalid\n   */\n  --border-radius: 0px;\n  --border-width: 0px;\n  --border-style: solid;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --box-shadow: none;\n  --inner-border-width: 0px;\n  --inner-padding-top: 0px;\n  --inner-padding-bottom: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n  --inner-box-shadow: none;\n  --show-full-highlight: 0;\n  --show-inset-highlight: 0;\n  --detail-icon-color: initial;\n  --detail-icon-font-size: 20px;\n  --detail-icon-opacity: 0.25;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: block;\n  position: relative;\n  outline: none;\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  text-align: initial;\n  text-decoration: none;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n:host(.ion-color) .item-native {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast); }\n\n:host(.ion-color) .item-native,\n:host(.ion-color) .item-inner {\n  border-color: var(--ion-color-shade); }\n\n:host(.ion-focused) .item-native {\n  background: var(--background-focused); }\n\n:host(.activated) .item-native {\n  background: var(--background-activated); }\n\n:host(.ion-color.activated) .item-native {\n  background: var(--ion-color-tint); }\n\n:host(.item-disabled) {\n  cursor: default;\n  opacity: .3;\n  pointer-events: none; }\n\n.item-native {\n  border-radius: var(--border-radius);\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: calc(var(--padding-start) + var(--ion-safe-area-left, 0px));\n  padding-right: var(--padding-end);\n  padding-top: var(--padding-top);\n  padding-bottom: var(--padding-bottom);\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%;\n  min-height: var(--min-height);\n  -webkit-transition: var(--transition);\n  transition: var(--transition);\n  border-width: var(--border-width);\n  border-style: var(--border-style);\n  border-color: var(--border-color);\n  outline: none;\n  background: var(--background);\n  -webkit-box-shadow: var(--box-shadow);\n  box-shadow: var(--box-shadow);\n  overflow: hidden;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    .item-native {\n      padding-left: unset;\n      padding-right: unset;\n      -webkit-padding-start: calc(var(--padding-start) + var(--ion-safe-area-left, 0px));\n      padding-inline-start: calc(var(--padding-start) + var(--ion-safe-area-left, 0px));\n      -webkit-padding-end: var(--padding-end);\n      padding-inline-end: var(--padding-end); } }\n\n.item-native::-moz-focus-inner {\n  border: 0; }\n\nbutton, a {\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-user-drag: none; }\n\n.item-inner {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: var(--inner-padding-start);\n  padding-right: calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));\n  padding-top: var(--inner-padding-top);\n  padding-bottom: var(--inner-padding-bottom);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-direction: inherit;\n  flex-direction: inherit;\n  -ms-flex-align: inherit;\n  align-items: inherit;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  min-height: inherit;\n  border-width: var(--inner-border-width);\n  border-style: var(--border-style);\n  border-color: var(--border-color);\n  -webkit-box-shadow: var(--inner-box-shadow);\n  box-shadow: var(--inner-box-shadow);\n  overflow: hidden;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    .item-inner {\n      padding-left: unset;\n      padding-right: unset;\n      -webkit-padding-start: var(--inner-padding-start);\n      padding-inline-start: var(--inner-padding-start);\n      -webkit-padding-end: calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));\n      padding-inline-end: calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end)); } }\n\n.item-detail-icon {\n  color: var(--detail-icon-color);\n  font-size: var(--detail-icon-font-size);\n  opacity: var(--detail-icon-opacity); }\n\n::slotted(ion-icon) {\n  font-size: 1.6em; }\n\n::slotted(ion-button) {\n  --margin-top: 0;\n  --margin-bottom: 0;\n  --margin-start: 0;\n  --margin-end: 0;\n  z-index: 1; }\n\n::slotted(ion-label) {\n  -ms-flex: 1;\n  flex: 1; }\n\n:host([vertical-align-top]),\n:host(.item-input) {\n  -ms-flex-align: start;\n  align-items: flex-start; }\n\n.input-wrapper {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-direction: inherit;\n  flex-direction: inherit;\n  -ms-flex-align: inherit;\n  align-items: inherit;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n:host(.item-label-stacked) .input-wrapper,\n:host(.item-label-floating) .input-wrapper {\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-direction: column;\n  flex-direction: column; }\n\n.item-highlight,\n.item-inner-highlight {\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  background: var(--highlight-background); }\n\n.item-highlight {\n  height: var(--full-highlight-height); }\n\n.item-inner-highlight {\n  height: var(--inset-highlight-height); }\n\n:host(.item-interactive.item-has-focus),\n:host(.item-interactive.ion-touched.ion-invalid) {\n  --full-highlight-height: calc(var(--highlight-height) * var(--show-full-highlight));\n  --inset-highlight-height: calc(var(--highlight-height) * var(--show-inset-highlight)); }\n\n:host(.item-interactive.item-has-focus) {\n  --highlight-background: var(--highlight-color-focused); }\n\n:host(.item-interactive.ion-valid) {\n  --highlight-background: var(--highlight-color-valid); }\n\n:host(.item-interactive.ion-invalid) {\n  --highlight-background: var(--highlight-color-invalid); }\n\n:host(.item-label-stacked) ::slotted(ion-select),\n:host(.item-label-floating) ::slotted(ion-select) {\n  --padding-start: 0;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  width: 100%;\n  max-width: 100%; }\n\n:host(.item-label-stacked) ::slotted(ion-datetime),\n:host(.item-label-floating) ::slotted(ion-datetime) {\n  --padding-start: 0;\n  width: 100%; }\n\n:host(.item-multiple-inputs) ::slotted(ion-datetime),\n:host(.item-multiple-inputs) ::slotted(ion-select) {\n  position: relative; }\n\n:host(.item-textarea) {\n  -ms-flex-align: stretch;\n  align-items: stretch; }\n\n::slotted(ion-reorder[slot]) {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n:host {\n  --min-height: 44px;\n  --transition: background-color 200ms linear;\n  --padding-start: 16px;\n  --inner-padding-end: 8px;\n  --inner-border-width: 0px 0px 0.55px 0px;\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n  --background-activated: var(--ion-item-background-activated, #d9d9d9);\n  --background-focused: var(--ion-item-background-activated, #d9d9d9);\n  --border-color: var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, #c8c7cc)));\n  --color: var(--ion-item-color, var(--ion-text-color, #000));\n  --highlight-height: 0;\n  --highlight-color-focused: var(--ion-color-primary, #3880ff);\n  --highlight-color-valid: var(--ion-color-success, #10dc60);\n  --highlight-color-invalid: var(--ion-color-danger, #f04141);\n  font-size: 17px; }\n\n:host(.activated) {\n  --transition: none; }\n\n:host(.item-interactive) {\n  --show-full-highlight: 0;\n  --show-inset-highlight: 1; }\n\n:host(.item-lines-full) {\n  --border-width: 0px 0px 0.55px 0px;\n  --show-full-highlight: 1;\n  --show-inset-highlight: 0; }\n\n:host(.item-lines-inset) {\n  --inner-border-width: 0px 0px 0.55px 0px;\n  --show-full-highlight: 0;\n  --show-inset-highlight: 1; }\n\n:host(.item-lines-inset),\n:host(.item-lines-none) {\n  --border-width: 0px;\n  --show-full-highlight: 0; }\n\n:host(.item-lines-full),\n:host(.item-lines-none) {\n  --inner-border-width: 0px;\n  --show-inset-highlight: 0; }\n\n::slotted([slot=\"start\"]) {\n  margin-left: 0;\n  margin-right: 16px;\n  margin-top: 2px;\n  margin-bottom: 2px; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    ::slotted([slot=\"start\"]) {\n      margin-left: unset;\n      margin-right: unset;\n      -webkit-margin-start: 0;\n      margin-inline-start: 0;\n      -webkit-margin-end: 16px;\n      margin-inline-end: 16px; } }\n\n::slotted([slot=\"end\"]) {\n  margin-left: 8px;\n  margin-right: 8px; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    ::slotted([slot=\"end\"]) {\n      margin-left: unset;\n      margin-right: unset;\n      -webkit-margin-start: 8px;\n      margin-inline-start: 8px;\n      -webkit-margin-end: 8px;\n      margin-inline-end: 8px; } }\n\n::slotted(ion-icon[slot=\"start\"]),\n::slotted(ion-icon[slot=\"end\"]) {\n  margin-left: 0;\n  margin-top: 7px;\n  margin-bottom: 7px; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    ::slotted(ion-icon[slot=\"start\"]),\n    ::slotted(ion-icon[slot=\"end\"]) {\n      margin-left: unset;\n      -webkit-margin-start: 0;\n      margin-inline-start: 0; } }\n\n::slotted(ion-toggle[slot=\"start\"]),\n::slotted(ion-toggle[slot=\"end\"]) {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0; }\n\n:host(.item-label-stacked) ::slotted([slot=\"end\"]),\n:host(.item-label-floating) ::slotted([slot=\"end\"]) {\n  margin-top: 7px;\n  margin-bottom: 7px; }\n\n::slotted(.button-small) {\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --padding-start: .5em;\n  --padding-end: .5em;\n  height: 24px;\n  font-size: 13px; }\n\n::slotted(ion-avatar) {\n  width: 36px;\n  height: 36px; }\n\n::slotted(ion-thumbnail) {\n  width: 56px;\n  height: 56px; }\n\n::slotted(ion-avatar[slot=\"end\"]),\n::slotted(ion-thumbnail[slot=\"end\"]) {\n  margin-left: 8px;\n  margin-right: 8px;\n  margin-top: 8px;\n  margin-bottom: 8px; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    ::slotted(ion-avatar[slot=\"end\"]),\n    ::slotted(ion-thumbnail[slot=\"end\"]) {\n      margin-left: unset;\n      margin-right: unset;\n      -webkit-margin-start: 8px;\n      margin-inline-start: 8px;\n      -webkit-margin-end: 8px;\n      margin-inline-end: 8px; } }\n\n:host(.item-radio) ::slotted(ion-label),\n:host(.item-toggle) ::slotted(ion-label) {\n  margin-left: 0px; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    :host(.item-radio) ::slotted(ion-label),\n    :host(.item-toggle) ::slotted(ion-label) {\n      margin-left: unset;\n      -webkit-margin-start: 0px;\n      margin-inline-start: 0px; } }\n\n::slotted(ion-label) {\n  margin-left: 0;\n  margin-right: 8px;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    ::slotted(ion-label) {\n      margin-left: unset;\n      margin-right: unset;\n      -webkit-margin-start: 0;\n      margin-inline-start: 0;\n      -webkit-margin-end: 8px;\n      margin-inline-end: 8px; } }\n\n:host(.item-label-floating),\n:host(.item-label-stacked) {\n  --min-height: 68px; }\n\n:host(.item-label-stacked) ::slotted(ion-select),\n:host(.item-label-floating) ::slotted(ion-select) {\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  --padding-start: 0px; }"; }
    static get styleMode() { return "ios"; }
}

class Label {
    constructor() {
        this.noAnimate = false;
    }
    componentWillLoad() {
        this.noAnimate = (this.position === "floating");
        this.emitStyle();
    }
    componentDidLoad() {
        if (this.noAnimate) {
            setTimeout(() => {
                this.noAnimate = false;
            }, 1000);
        }
    }
    positionChanged() {
        this.emitStyle();
    }
    emitStyle() {
        const position = this.position;
        this.ionStyle.emit({
            "label": true,
            [`label-${position}`]: position !== undefined
        });
    }
    hostData() {
        const position = this.position;
        return {
            class: Object.assign({}, createColorClasses(this.color), { [`label-${position}`]: position !== undefined, [`label-no-animate`]: (this.noAnimate) })
        };
    }
    static get is() { return "ion-label"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "color": {
                "type": String,
                "attr": "color"
            },
            "el": {
                "elementRef": true
            },
            "mode": {
                "type": String,
                "attr": "mode"
            },
            "noAnimate": {
                "state": true
            },
            "position": {
                "type": String,
                "attr": "position",
                "watchCallbacks": ["positionChanged"]
            }
        };
    }
    static get events() {
        return [{
                "name": "ionStyle",
                "method": "ionStyle",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
    static get style() { return ".item.sc-ion-label-ios-h, .item   .sc-ion-label-ios-h {\n  \n  --color: initial;\n  display: block;\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  font-size: inherit;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.ion-color.sc-ion-label-ios-h {\n  color: var(--ion-color-base); }\n\n[text-wrap].sc-ion-label-ios-h {\n  white-space: normal; }\n\n.item-interactive-disabled.sc-ion-label-ios-h, .item-interactive-disabled   .sc-ion-label-ios-h {\n  cursor: default;\n  opacity: .3;\n  pointer-events: none; }\n\n.item-input.sc-ion-label-ios-h, .item-input   .sc-ion-label-ios-h {\n  -ms-flex: initial;\n  flex: initial;\n  max-width: 200px;\n  pointer-events: none; }\n\n.label-fixed.sc-ion-label-ios-h {\n  -ms-flex: 0 0 100px;\n  flex: 0 0 100px;\n  width: 100px;\n  min-width: 100px;\n  max-width: 200px; }\n\n.label-stacked.sc-ion-label-ios-h, .label-floating.sc-ion-label-ios-h {\n  margin-bottom: 0;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  width: auto;\n  max-width: 100%; }\n\n.item-has-focus.label-floating.sc-ion-label-ios-h, .item-has-focus   .label-floating.sc-ion-label-ios-h, .item-has-placeholder.label-floating.sc-ion-label-ios-h, .item-has-placeholder   .label-floating.sc-ion-label-ios-h, .item-has-value.label-floating.sc-ion-label-ios-h, .item-has-value   .label-floating.sc-ion-label-ios-h {\n  -webkit-transform: translate3d(0,  0,  0) scale(0.8);\n  transform: translate3d(0,  0,  0) scale(0.8); }\n\n.label-no-animate.label-floating.sc-ion-label-ios-h {\n  -webkit-transition: none;\n  transition: none; }\n\n[text-wrap].sc-ion-label-ios-h {\n  font-size: 14px;\n  line-height: 1.5; }\n\n.label-stacked.sc-ion-label-ios-h {\n  margin-bottom: 4px;\n  font-size: 13.6px; }\n\n.label-floating.sc-ion-label-ios-h {\n  margin-bottom: 0;\n  -webkit-transform: translate3d(0,  27px,  0);\n  transform: translate3d(0,  27px,  0);\n  -webkit-transform-origin: left top;\n  transform-origin: left top;\n  -webkit-transition: -webkit-transform 150ms ease-in-out;\n  transition: -webkit-transform 150ms ease-in-out;\n  transition: transform 150ms ease-in-out;\n  transition: transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out; }\n  [dir=rtl].label-floating.sc-ion-label-ios-h {\n    -webkit-transform-origin: right top;\n    transform-origin: right top; }\n\n.sc-ion-label-ios-s  h1  {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 2px;\n  font-size: 24px;\n  font-weight: normal; }\n\n.sc-ion-label-ios-s  h2  {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 2px;\n  font-size: 17px;\n  font-weight: normal; }\n\n.sc-ion-label-ios-s  h3 , .sc-ion-label-ios-s  h4 , .sc-ion-label-ios-s  h5 , .sc-ion-label-ios-s  h6  {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 3px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: normal; }\n\n.sc-ion-label-ios-s  p  {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 2px;\n  font-size: 14px;\n  line-height: normal;\n  text-overflow: inherit;\n  overflow: inherit; }\n\n.sc-ion-label-ios-s > p {\n  color: var(--ion-color-step-400, #999999); }\n\n.sc-ion-label-ios-h.ion-color.sc-ion-label-ios-s > p, .ion-color .sc-ion-label-ios-h.sc-ion-label-ios-s > p {\n  color: inherit; }\n\n.sc-ion-label-ios-s  h2:last-child , .sc-ion-label-ios-s  h3:last-child , .sc-ion-label-ios-s  h4:last-child , .sc-ion-label-ios-s  h5:last-child , .sc-ion-label-ios-s  h6:last-child , .sc-ion-label-ios-s  p:last-child  {\n  margin-bottom: 0; }"; }
    static get styleMode() { return "ios"; }
}

export { Button as IonButton, Card as IonCard, CardContent as IonCardContent, CardHeader as IonCardHeader, CardTitle as IonCardTitle, Item as IonItem, Label as IonLabel };
