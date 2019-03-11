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
    static get style() { return ".sc-ion-back-button-ios-h {\n  \n  --background: transparent;\n  --ripple-color: currentColor;\n  --transition: background-color, opacity 100ms linear;\n  --opacity: 1;\n  display: none;\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  text-align: center;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-font-kerning: none;\n  font-kerning: none; }\n\n.ion-color.sc-ion-back-button-ios-h   .button-native.sc-ion-back-button-ios {\n  color: var(--ion-color-base); }\n\n.activated.sc-ion-back-button-ios-h   .button-native.sc-ion-back-button-ios {\n  opacity: .4; }\n\n.can-go-back.sc-ion-back-button-ios-h    > ion-header.sc-ion-back-button-ios, .can-go-back    > ion-header   .sc-ion-back-button-ios-h, .show-back-button.sc-ion-back-button-ios-h {\n  display: block; }\n\n.button-native.sc-ion-back-button-ios {\n  border-radius: var(--border-radius);\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: var(--margin-start);\n  margin-right: var(--margin-end);\n  margin-top: var(--margin-top);\n  margin-bottom: var(--margin-bottom);\n  padding-left: var(--padding-start);\n  padding-right: var(--padding-end);\n  padding-top: var(--padding-top);\n  padding-bottom: var(--padding-bottom);\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  display: block;\n  position: relative;\n  min-width: var(--min-width);\n  min-height: var(--min-height);\n  -webkit-transition: var(--transition);\n  transition: var(--transition);\n  border: 0;\n  outline: none;\n  background: var(--background);\n  line-height: 1;\n  cursor: pointer;\n  opacity: var(--opacity);\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    .button-native.sc-ion-back-button-ios {\n      margin-left: unset;\n      margin-right: unset;\n      -webkit-margin-start: var(--margin-start);\n      margin-inline-start: var(--margin-start);\n      -webkit-margin-end: var(--margin-end);\n      margin-inline-end: var(--margin-end); } }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    .button-native.sc-ion-back-button-ios {\n      padding-left: unset;\n      padding-right: unset;\n      -webkit-padding-start: var(--padding-start);\n      padding-inline-start: var(--padding-start);\n      -webkit-padding-end: var(--padding-end);\n      padding-inline-end: var(--padding-end); } }\n\n.button-inner.sc-ion-back-button-ios {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%; }\n\nion-icon.sc-ion-back-button-ios {\n  padding-left: var(--icon-padding-start);\n  padding-right: var(--icon-padding-end);\n  padding-top: var(--icon-padding-top);\n  padding-bottom: var(--icon-padding-bottom);\n  margin-left: var(--icon-margin-start);\n  margin-right: var(--icon-margin-end);\n  margin-top: var(--icon-margin-top);\n  margin-bottom: var(--icon-margin-bottom);\n  display: inherit;\n  font-size: var(--icon-font-size);\n  font-weight: var(--icon-font-weight);\n  pointer-events: none; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    ion-icon.sc-ion-back-button-ios {\n      padding-left: unset;\n      padding-right: unset;\n      -webkit-padding-start: var(--icon-padding-start);\n      padding-inline-start: var(--icon-padding-start);\n      -webkit-padding-end: var(--icon-padding-end);\n      padding-inline-end: var(--icon-padding-end); } }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    ion-icon.sc-ion-back-button-ios {\n      margin-left: unset;\n      margin-right: unset;\n      -webkit-margin-start: var(--icon-margin-start);\n      margin-inline-start: var(--icon-margin-start);\n      -webkit-margin-end: var(--icon-margin-end);\n      margin-inline-end: var(--icon-margin-end); } }\n\n.sc-ion-back-button-ios-h {\n  --color: var(--ion-color-primary, #3880ff);\n  --margin-top: 0;\n  --margin-end: 0;\n  --margin-bottom: 0;\n  --margin-start: 0;\n  --padding-top: 0;\n  --padding-end: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --min-height: 32px;\n  --min-width: auto;\n  --icon-padding-top: 0;\n  --icon-padding-end: 0;\n  --icon-padding-bottom: 0;\n  --icon-padding-start: 0;\n  --icon-margin-top: 0;\n  --icon-margin-end: -5px;\n  --icon-margin-bottom: 0;\n  --icon-margin-start: -4px;\n  --icon-font-size: 1.85em;\n  font-size: 17px; }\n\n.button-native.sc-ion-back-button-ios {\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  overflow: visible;\n  z-index: 99; }"; }
    static get styleMode() { return "ios"; }
}

class Buttons {
    static get is() { return "ion-buttons"; }
    static get encapsulation() { return "scoped"; }
    static get style() { return ".sc-ion-buttons-ios-h {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  z-index: 99; }\n\n.sc-ion-buttons-ios-s  ion-button  {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  --box-shadow: none;\n  --overflow: visible;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-left: 2px;\n  margin-right: 2px; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    .sc-ion-buttons-ios-s  ion-button  {\n      margin-left: unset;\n      margin-right: unset;\n      -webkit-margin-start: 2px;\n      margin-inline-start: 2px;\n      -webkit-margin-end: 2px;\n      margin-inline-end: 2px; } }\n\n.sc-ion-buttons-ios-s  ion-button  {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 5px;\n  --padding-end: 5px;\n  height: 32px;\n  font-size: 17px;\n  font-weight: 400; }\n\n.sc-ion-buttons-ios-s  ion-button:not(.button-round)  {\n  --border-radius: 4px; }\n\n.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button  {\n  --color: initial;\n  --color-activated: initial; }\n\n\@media (any-hover: hover) {\n  .sc-ion-buttons-ios-s  .button-solid-ios:hover  {\n    opacity: .4; } }\n\n.sc-ion-buttons-ios-s  ion-icon[slot=\"start\"]  {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-right: 0.3em;\n  font-size: 24px;\n  line-height: .67; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    .sc-ion-buttons-ios-s  ion-icon[slot=\"start\"]  {\n      margin-right: unset;\n      -webkit-margin-end: 0.3em;\n      margin-inline-end: 0.3em; } }\n\n.sc-ion-buttons-ios-s  ion-icon[slot=\"end\"]  {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-left: 0.4em;\n  font-size: 24px;\n  line-height: .67; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    .sc-ion-buttons-ios-s  ion-icon[slot=\"end\"]  {\n      margin-left: unset;\n      -webkit-margin-start: 0.4em;\n      margin-inline-start: 0.4em; } }\n\n.sc-ion-buttons-ios-s  ion-icon[slot=\"icon-only\"]  {\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 31px;\n  line-height: .67; }"; }
    static get styleMode() { return "ios"; }
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
    static get style() { return ":host {\n  /**\n   * \@prop --background: Background of the toggle\n   * \@prop --background-checked: Background of the toggle when checked\n   * \@prop --handle-background: Background of the toggle handle\n   * \@prop --handle-background-checked: Background of the toggle handle when checked\n   */\n  /* stylelint-disable-next-line declaration-no-important */\n  -webkit-box-sizing: content-box !important;\n  box-sizing: content-box !important;\n  display: inline-block;\n  outline: none;\n  contain: content;\n  cursor: pointer;\n  -ms-touch-action: none;\n  touch-action: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 2; }\n\n:host(.ion-focused) input {\n  border: 2px solid #5e9ed6; }\n\n:host(.toggle-disabled) {\n  pointer-events: none; }\n\nbutton {\n  left: 0;\n  top: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none; }\n  :host-context([dir=rtl]) button {\n    right: 0; }\n  button::-moz-focus-inner {\n    border: 0; }\n\n:host {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n  --background-checked: var(--ion-color-primary, #3880ff);\n  --handle-background: var(--ion-item-background, var(--ion-background-color, #fff));\n  --handle-background-checked: var(--ion-item-background, var(--ion-background-color, #fff));\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n  position: relative;\n  width: 51px;\n  height: 32px;\n  contain: strict; }\n\n:host(.ion-color.toggle-checked) .toggle-icon {\n  background: var(--ion-color-base); }\n\n:host(.ion-color.toggle-checked) .toggle-inner {\n  background: var(--ion-color-contrast); }\n\n.toggle-icon {\n  border-radius: 16px;\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  -webkit-transition: background-color 300ms;\n  transition: background-color 300ms;\n  background-color: var(--ion-color-step-50, #f2f2f2);\n  overflow: hidden;\n  pointer-events: none; }\n\n.toggle-icon::before {\n  left: 2px;\n  right: 2px;\n  top: 2px;\n  bottom: 2px;\n  border-radius: 16px;\n  position: absolute;\n  -webkit-transform: scale3d(1, 1, 1);\n  transform: scale3d(1, 1, 1);\n  -webkit-transition: -webkit-transform 300ms;\n  transition: -webkit-transform 300ms;\n  transition: transform 300ms;\n  transition: transform 300ms, -webkit-transform 300ms;\n  background: var(--background);\n  content: \"\"; }\n\n.toggle-inner {\n  left: 2px;\n  top: 2px;\n  border-radius: 14px;\n  position: absolute;\n  width: 28px;\n  height: 28px;\n  -webkit-transition: width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms, -webkit-transform 300ms;\n  transition: width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms, -webkit-transform 300ms;\n  transition: transform 300ms, width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms;\n  transition: transform 300ms, width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms, -webkit-transform 300ms;\n  background: var(--handle-background);\n  -webkit-box-shadow: 0 3px 12px rgba(0, 0, 0, 0.16), 0 3px 1px rgba(0, 0, 0, 0.1);\n  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.16), 0 3px 1px rgba(0, 0, 0, 0.1);\n  will-change: transform;\n  contain: strict; }\n  :host-context([dir=rtl]) .toggle-inner {\n    right: 2px; }\n\n:host(.toggle-checked) .toggle-icon {\n  background: var(--background-checked); }\n\n:host(.toggle-activated) .toggle-icon::before,\n:host(.toggle-checked) .toggle-icon::before {\n  -webkit-transform: scale3d(0, 0, 0);\n  transform: scale3d(0, 0, 0); }\n\n:host(.toggle-checked) .toggle-inner {\n  -webkit-transform: translate3d(19px,  0,  0);\n  transform: translate3d(19px,  0,  0);\n  background: var(--handle-background-checked); }\n  :host([dir=rtl].toggle-checked) .toggle-inner {\n    -webkit-transform: translate3d(calc(-1 * 19px),  0,  0);\n    transform: translate3d(calc(-1 * 19px),  0,  0); }\n\n:host(.toggle-activated.toggle-checked) .toggle-inner::before {\n  -webkit-transform: scale3d(0, 0, 0);\n  transform: scale3d(0, 0, 0); }\n\n:host(.toggle-activated) .toggle-inner {\n  width: 34px; }\n\n:host(.toggle-activated.toggle-checked) .toggle-inner {\n  left: -4px; }\n  :host([dir=rtl].toggle-activated.toggle-checked) .toggle-inner {\n    right: -4px; }\n\n:host(.toggle-disabled) {\n  opacity: 0.3; }\n\n:host(.in-item[slot]) {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 16px;\n  padding-right: 8px;\n  padding-top: 6px;\n  padding-bottom: 5px; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    :host(.in-item[slot]) {\n      padding-left: unset;\n      padding-right: unset;\n      -webkit-padding-start: 16px;\n      padding-inline-start: 16px;\n      -webkit-padding-end: 8px;\n      padding-inline-end: 8px; } }\n\n:host(.in-item[slot=\"start\"]) {\n  padding-left: 0;\n  padding-right: 16px;\n  padding-top: 6px;\n  padding-bottom: 5px; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    :host(.in-item[slot=\"start\"]) {\n      padding-left: unset;\n      padding-right: unset;\n      -webkit-padding-start: 0;\n      padding-inline-start: 0;\n      -webkit-padding-end: 16px;\n      padding-inline-end: 16px; } }"; }
    static get styleMode() { return "ios"; }
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
