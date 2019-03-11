const h = window.App.h;

import { a as openURL, b as createColorClasses, c as hostContext } from './chunk-7c632336.js';
import { a as findItemLabel, b as renderHiddenInput } from './chunk-5a5b5816.js';

function sayHello() {
    return Math.random() < 0.5 ? 'Hello' : 'Hola';
}

class AppProfile {
    constructor() {
        this.state = false;
    }
    formattedName() {
        if (this.name) {
            return this.name.substr(0, 1).toUpperCase() + this.name.substr(1).toLowerCase();
        }
        return '';
    }
    render() {
        return [
            h("ion-header", null,
                h("ion-toolbar", { color: "primary" },
                    h("ion-buttons", { slot: "start" },
                        h("ion-back-button", { defaultHref: "/" })),
                    h("ion-title", null,
                        "Profile: ",
                        this.name))),
            h("ion-content", { padding: true },
                h("p", null,
                    sayHello(),
                    "! My name is ",
                    this.formattedName(),
                    ". My name was passed in through a route param!"),
                h("ion-item", null,
                    h("ion-label", null,
                        "Setting (",
                        this.state.toString(),
                        ")"),
                    h("ion-toggle", { checked: this.state, onIonChange: ev => (this.state = ev.detail.checked) })))
        ];
    }
    static get is() { return "app-profile"; }
    static get properties() { return {
        "name": {
            "type": String,
            "attr": "name"
        },
        "state": {
            "state": true
        }
    }; }
    static get style() { return ""; }
}

class BackButton {
    async onClick(ev) {
        const nav = this.el.closest("ion-nav");
        ev.preventDefault();
        if (nav && await nav.canGoBack()) {
            return nav.pop({ skipIfBusy: true });
        }
        return openURL(this.win, this.defaultHref, ev, "back");
    }
    hostData() {
        const showBackButton = this.defaultHref !== undefined;
        return {
            class: Object.assign({}, createColorClasses(this.color), { "button": true, "ion-activatable": true, "show-back-button": showBackButton })
        };
    }
    render() {
        const defaultBackButtonText = this.mode === "ios" ? "Back" : null;
        const backButtonIcon = this.icon != null ? this.icon : this.config.get("backButtonIcon", "arrow-back");
        const backButtonText = this.text != null ? this.text : this.config.get("backButtonText", defaultBackButtonText);
        return (h("button", { type: "button", class: "button-native" }, h("span", { class: "button-inner" }, backButtonIcon && h("ion-icon", { icon: backButtonIcon, lazy: false }), backButtonText && h("span", { class: "button-text" }, backButtonText)), this.mode === "md" && h("ion-ripple-effect", { type: "unbounded" })));
    }
    static get is() { return "ion-back-button"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "color": {
                "type": String,
                "attr": "color"
            },
            "config": {
                "context": "config"
            },
            "defaultHref": {
                "type": String,
                "attr": "default-href"
            },
            "el": {
                "elementRef": true
            },
            "icon": {
                "type": String,
                "attr": "icon"
            },
            "mode": {
                "type": String,
                "attr": "mode"
            },
            "text": {
                "type": String,
                "attr": "text"
            },
            "win": {
                "context": "window"
            }
        };
    }
    static get listeners() {
        return [{
                "name": "click",
                "method": "onClick"
            }];
    }
    static get style() { return ".sc-ion-back-button-md-h {\n  \n  --background: transparent;\n  --ripple-color: currentColor;\n  --transition: background-color, opacity 100ms linear;\n  --opacity: 1;\n  display: none;\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  text-align: center;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-font-kerning: none;\n  font-kerning: none; }\n\n.ion-color.sc-ion-back-button-md-h   .button-native.sc-ion-back-button-md {\n  color: var(--ion-color-base); }\n\n.activated.sc-ion-back-button-md-h   .button-native.sc-ion-back-button-md {\n  opacity: .4; }\n\n.can-go-back.sc-ion-back-button-md-h    > ion-header.sc-ion-back-button-md, .can-go-back    > ion-header   .sc-ion-back-button-md-h, .show-back-button.sc-ion-back-button-md-h {\n  display: block; }\n\n.button-native.sc-ion-back-button-md {\n  border-radius: var(--border-radius);\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: var(--margin-start);\n  margin-right: var(--margin-end);\n  margin-top: var(--margin-top);\n  margin-bottom: var(--margin-bottom);\n  padding-left: var(--padding-start);\n  padding-right: var(--padding-end);\n  padding-top: var(--padding-top);\n  padding-bottom: var(--padding-bottom);\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  display: block;\n  position: relative;\n  min-width: var(--min-width);\n  min-height: var(--min-height);\n  -webkit-transition: var(--transition);\n  transition: var(--transition);\n  border: 0;\n  outline: none;\n  background: var(--background);\n  line-height: 1;\n  cursor: pointer;\n  opacity: var(--opacity);\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    .button-native.sc-ion-back-button-md {\n      margin-left: unset;\n      margin-right: unset;\n      -webkit-margin-start: var(--margin-start);\n      margin-inline-start: var(--margin-start);\n      -webkit-margin-end: var(--margin-end);\n      margin-inline-end: var(--margin-end); } }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    .button-native.sc-ion-back-button-md {\n      padding-left: unset;\n      padding-right: unset;\n      -webkit-padding-start: var(--padding-start);\n      padding-inline-start: var(--padding-start);\n      -webkit-padding-end: var(--padding-end);\n      padding-inline-end: var(--padding-end); } }\n\n.button-inner.sc-ion-back-button-md {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%; }\n\nion-icon.sc-ion-back-button-md {\n  padding-left: var(--icon-padding-start);\n  padding-right: var(--icon-padding-end);\n  padding-top: var(--icon-padding-top);\n  padding-bottom: var(--icon-padding-bottom);\n  margin-left: var(--icon-margin-start);\n  margin-right: var(--icon-margin-end);\n  margin-top: var(--icon-margin-top);\n  margin-bottom: var(--icon-margin-bottom);\n  display: inherit;\n  font-size: var(--icon-font-size);\n  font-weight: var(--icon-font-weight);\n  pointer-events: none; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    ion-icon.sc-ion-back-button-md {\n      padding-left: unset;\n      padding-right: unset;\n      -webkit-padding-start: var(--icon-padding-start);\n      padding-inline-start: var(--icon-padding-start);\n      -webkit-padding-end: var(--icon-padding-end);\n      padding-inline-end: var(--icon-padding-end); } }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    ion-icon.sc-ion-back-button-md {\n      margin-left: unset;\n      margin-right: unset;\n      -webkit-margin-start: var(--icon-margin-start);\n      margin-inline-start: var(--icon-margin-start);\n      -webkit-margin-end: var(--icon-margin-end);\n      margin-inline-end: var(--icon-margin-end); } }\n\n.sc-ion-back-button-md-h {\n  --color: currentColor;\n  --margin-top: 1px;\n  --margin-end: 6px;\n  --margin-bottom: 0;\n  --margin-start: 0;\n  --padding-top: 0;\n  --padding-end: 5px;\n  --padding-bottom: 0;\n  --padding-start: 5px;\n  --min-height: 32px;\n  --min-width: 44px;\n  --icon-padding-end: .3em;\n  --icon-padding-start: .3em;\n  --icon-margin-top: 0;\n  --icon-margin-end: 6px;\n  --icon-margin-bottom: 0;\n  --icon-margin-start: 6px;\n  --icon-font-size: 24px;\n  --icon-font-weight: normal;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase; }\n\n.button-native.sc-ion-back-button-md {\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\nion-icon.sc-ion-back-button-md {\n  line-height: .67;\n  text-align: start; }"; }
    static get styleMode() { return "md"; }
}

class Buttons {
    static get is() { return "ion-buttons"; }
    static get encapsulation() { return "scoped"; }
    static get style() { return ".sc-ion-buttons-md-h {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  z-index: 99; }\n\n.sc-ion-buttons-md-s  ion-button  {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  --box-shadow: none;\n  --overflow: visible;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-left: 2px;\n  margin-right: 2px; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    .sc-ion-buttons-md-s  ion-button  {\n      margin-left: unset;\n      margin-right: unset;\n      -webkit-margin-start: 2px;\n      margin-inline-start: 2px;\n      -webkit-margin-end: 2px;\n      margin-inline-end: 2px; } }\n\n.sc-ion-buttons-md-s  ion-button  {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --box-shadow: none;\n  height: 32px;\n  font-size: 14px;\n  font-weight: 500; }\n\n.sc-ion-buttons-md-s  ion-button:not(.button-round)  {\n  --border-radius: 2px; }\n\n.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button  {\n  --color: initial;\n  --color-activated: initial;\n  --color-focused: initial;\n  --background-focused: rgba(var(--ion-color-primary-contrast-rgb, 255, 255, 255), 0.1); }\n\n.sc-ion-buttons-md-s  .button-solid  {\n  --color: var(--ion-toolbar-background, var(--ion-background-color, #fff));\n  --color-activated: var(--ion-toolbar-background, var(--ion-background-color, #fff));\n  --background: var(--ion-toolbar-color, var(--ion-text-color, #424242));\n  --background-activated: var(--ion-toolbar-color, var(--ion-text-color, #424242)); }\n\n.sc-ion-buttons-md-s  .button-outline  {\n  --color: initial;\n  --color-activated: currentColor;\n  --background: transparent;\n  --background-activated: transparent;\n  --border-color: currentColor; }\n\n.sc-ion-buttons-md-s  .button-clear  {\n  --color: initial;\n  --color-activated: currentColor;\n  --background: transparent; }\n\n.sc-ion-buttons-md-s  ion-icon[slot=\"start\"]  {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-right: 0.3em;\n  font-size: 1.4em; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    .sc-ion-buttons-md-s  ion-icon[slot=\"start\"]  {\n      margin-right: unset;\n      -webkit-margin-end: 0.3em;\n      margin-inline-end: 0.3em; } }\n\n.sc-ion-buttons-md-s  ion-icon[slot=\"end\"]  {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-left: 0.4em;\n  font-size: 1.4em; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    .sc-ion-buttons-md-s  ion-icon[slot=\"end\"]  {\n      margin-left: unset;\n      -webkit-margin-start: 0.4em;\n      margin-inline-start: 0.4em; } }\n\n.sc-ion-buttons-md-s  ion-icon[slot=\"icon-only\"]  {\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 1.8em; }"; }
    static get styleMode() { return "md"; }
}

function hapticAvailable() {
    const engine = window.TapticEngine;
    return !!engine;
}
function hapticSelection() {
    const engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
}
function hapticSelectionStart() {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
}
function hapticSelectionChanged() {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
}
function hapticSelectionEnd() {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
}
function hapticNotification(options) {
    const engine = window.TapticEngine;
    if (engine) {
        engine.notification(options);
    }
}
function hapticImpact(options) {
    const engine = window.TapticEngine;
    if (engine) {
        engine.impact(options);
    }
}

class Toggle {
    constructor() {
        this.inputId = `ion-tg-${toggleIds++}`;
        this.lastDrag = 0;
        this.activated = false;
        this.name = this.inputId;
        this.checked = false;
        this.disabled = false;
        this.value = "on";
        this.onFocus = () => {
            this.ionFocus.emit();
        };
        this.onBlur = () => {
            this.ionBlur.emit();
        };
    }
    checkedChanged(isChecked) {
        this.ionChange.emit({
            checked: isChecked,
            value: this.value
        });
    }
    disabledChanged() {
        this.emitStyle();
        if (this.gesture) {
            this.gesture.setDisabled(this.disabled);
        }
    }
    componentWillLoad() {
        this.emitStyle();
    }
    async componentDidLoad() {
        this.gesture = (await import('./chunk-f56eaea8.js')).createGesture({
            el: this.el,
            queue: this.queue,
            gestureName: "toggle",
            gesturePriority: 100,
            threshold: 5,
            passive: false,
            onStart: () => this.onStart(),
            onMove: ev => this.onMove(ev),
            onEnd: ev => this.onEnd(ev),
        });
        this.disabledChanged();
    }
    componentDidUnload() {
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
    }
    onClick() {
        if (this.lastDrag + 300 < Date.now()) {
            this.checked = !this.checked;
        }
    }
    emitStyle() {
        this.ionStyle.emit({
            "interactive-disabled": this.disabled,
        });
    }
    onStart() {
        this.activated = true;
        this.setFocus();
    }
    onMove(detail) {
        if (shouldToggle(this.checked, detail.deltaX, -10)) {
            this.checked = !this.checked;
            hapticSelection();
        }
    }
    onEnd(ev) {
        this.activated = false;
        this.lastDrag = Date.now();
        ev.event.preventDefault();
        ev.event.stopImmediatePropagation();
    }
    getValue() {
        return this.value || "";
    }
    setFocus() {
        if (this.buttonEl) {
            this.buttonEl.focus();
        }
    }
    hostData() {
        const { inputId, disabled, checked, activated, color, el } = this;
        const labelId = inputId + "-lbl";
        const label = findItemLabel(el);
        if (label) {
            label.id = labelId;
        }
        return {
            "role": "checkbox",
            "aria-disabled": disabled ? "true" : null,
            "aria-checked": `${checked}`,
            "aria-labelledby": labelId,
            class: Object.assign({}, createColorClasses(color), { "in-item": hostContext("ion-item", el), "toggle-activated": activated, "toggle-checked": checked, "toggle-disabled": disabled, "interactive": true })
        };
    }
    render() {
        const value = this.getValue();
        renderHiddenInput(true, this.el, this.name, (this.checked ? value : ""), this.disabled);
        return [
            h("div", { class: "toggle-icon" }, h("div", { class: "toggle-inner" })),
            h("button", { type: "button", onFocus: this.onFocus, onBlur: this.onBlur, disabled: this.disabled, ref: el => this.buttonEl = el })
        ];
    }
    static get is() { return "ion-toggle"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "activated": {
                "state": true
            },
            "checked": {
                "type": Boolean,
                "attr": "checked",
                "mutable": true,
                "watchCallbacks": ["checkedChanged"]
            },
            "color": {
                "type": String,
                "attr": "color"
            },
            "disabled": {
                "type": Boolean,
                "attr": "disabled",
                "watchCallbacks": ["disabledChanged"]
            },
            "el": {
                "elementRef": true
            },
            "mode": {
                "type": String,
                "attr": "mode"
            },
            "name": {
                "type": String,
                "attr": "name"
            },
            "queue": {
                "context": "queue"
            },
            "value": {
                "type": String,
                "attr": "value"
            }
        };
    }
    static get events() {
        return [{
                "name": "ionChange",
                "method": "ionChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
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
            }, {
                "name": "ionStyle",
                "method": "ionStyle",
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
    static get style() { return ":host {\n  /**\n   * \@prop --background: Background of the toggle\n   * \@prop --background-checked: Background of the toggle when checked\n   * \@prop --handle-background: Background of the toggle handle\n   * \@prop --handle-background-checked: Background of the toggle handle when checked\n   */\n  /* stylelint-disable-next-line declaration-no-important */\n  -webkit-box-sizing: content-box !important;\n  box-sizing: content-box !important;\n  display: inline-block;\n  outline: none;\n  contain: content;\n  cursor: pointer;\n  -ms-touch-action: none;\n  touch-action: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 2; }\n\n:host(.ion-focused) input {\n  border: 2px solid #5e9ed6; }\n\n:host(.toggle-disabled) {\n  pointer-events: none; }\n\nbutton {\n  left: 0;\n  top: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none; }\n  :host-context([dir=rtl]) button {\n    right: 0; }\n  button::-moz-focus-inner {\n    border: 0; }\n\n:host {\n  --background: var(--ion-color-medium-tint, #a2a4ab);\n  --background-checked: rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.5);\n  --handle-background: var(--ion-background-color, #fff);\n  --handle-background-checked: var(--ion-color-primary, #3880ff);\n  padding-left: 12px;\n  padding-right: 12px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n  position: relative;\n  width: 36px;\n  height: 14px;\n  contain: strict; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    :host {\n      padding-left: unset;\n      padding-right: unset;\n      -webkit-padding-start: 12px;\n      padding-inline-start: 12px;\n      -webkit-padding-end: 12px;\n      padding-inline-end: 12px; } }\n\n:host(.ion-color.toggle-checked) .toggle-icon {\n  background: rgba(var(--ion-color-base-rgb), 0.5); }\n\n:host(.ion-color.toggle-checked) .toggle-inner {\n  background: var(--ion-color-base); }\n\n.toggle-icon {\n  border-radius: 14px;\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  -webkit-transition: background-color 160ms;\n  transition: background-color 160ms;\n  background: var(--background);\n  pointer-events: none; }\n\n.toggle-inner {\n  left: 0;\n  top: -3px;\n  border-radius: 50%;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  -webkit-transition-duration: 160ms;\n  transition-duration: 160ms;\n  -webkit-transition-property: background-color, -webkit-transform;\n  transition-property: background-color, -webkit-transform;\n  transition-property: transform, background-color;\n  transition-property: transform, background-color, -webkit-transform;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  background: var(--handle-background);\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  will-change: transform, background-color;\n  contain: strict; }\n  :host-context([dir=rtl]) .toggle-inner {\n    right: 0; }\n\n:host(.toggle-checked) .toggle-icon {\n  background: var(--background-checked); }\n\n:host(.toggle-checked) .toggle-inner {\n  -webkit-transform: translate3d(16px,  0,  0);\n  transform: translate3d(16px,  0,  0);\n  background: var(--handle-background-checked); }\n  :host([dir=rtl].toggle-checked) .toggle-inner {\n    -webkit-transform: translate3d(calc(-1 * 16px),  0,  0);\n    transform: translate3d(calc(-1 * 16px),  0,  0); }\n\n:host(.toggle-disabled) {\n  opacity: 0.3; }\n\n:host(.in-item[slot]) {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 16px;\n  padding-right: 0;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  cursor: pointer; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    :host(.in-item[slot]) {\n      padding-left: unset;\n      padding-right: unset;\n      -webkit-padding-start: 16px;\n      padding-inline-start: 16px;\n      -webkit-padding-end: 0;\n      padding-inline-end: 0; } }\n\n:host(.in-item[slot=\"start\"]) {\n  padding-left: 2px;\n  padding-right: 18px;\n  padding-top: 12px;\n  padding-bottom: 12px; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    :host(.in-item[slot=\"start\"]) {\n      padding-left: unset;\n      padding-right: unset;\n      -webkit-padding-start: 2px;\n      padding-inline-start: 2px;\n      -webkit-padding-end: 18px;\n      padding-inline-end: 18px; } }"; }
    static get styleMode() { return "md"; }
}
function shouldToggle(checked, deltaX, margin) {
    const isRTL = document.dir === "rtl";
    if (checked) {
        return (!isRTL && (margin > deltaX)) ||
            (isRTL && (-margin < deltaX));
    }
    else {
        return (!isRTL && (-margin < deltaX)) ||
            (isRTL && (margin > deltaX));
    }
}
let toggleIds = 0;

export { AppProfile, BackButton as IonBackButton, Buttons as IonButtons, Toggle as IonToggle };
