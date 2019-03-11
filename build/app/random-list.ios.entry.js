const h = window.App.h;

import { b as createColorClasses } from './chunk-7c632336.js';
import { g as debounceEvent, a as findItemLabel } from './chunk-5a5b5816.js';

function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
        return ele != value;
    });
}
class RandomList {
    constructor() {
        this.elements = [];
        this.result = "";
    }
    toList() {
        this.elements = [
            ...this.elements,
            this.value
        ];
    }
    changeElement(event) {
        this.value = event.target.value;
        console.log(this.value);
    }
    deleteElement(name) {
        this.elements = arrayRemove(this.elements, name);
        console.log(this.elements);
    }
    setResult() {
        var randomElement = this.elements[Math.floor(Math.random() * this.elements.length)];
        this.result = randomElement;
    }
    render() {
        return [
            h("ion-header", null,
                h("ion-toolbar", null,
                    h("ion-title", null, "Randomizer"))),
            h("ion-content", null, this.result == "" ? (h("ion-grid", null,
                h("ion-row", null,
                    h("ion-col", null,
                        h("ion-card", null,
                            h("ion-card-header", { color: "secondary" },
                                h("ion-card-title", null, "Add element to list")),
                            h("ion-card-content", null,
                                h("ion-input", { type: "text", value: this.value, onChange: (event) => this.changeElement(event) }),
                                h("ion-button", { color: "primary", onClick: () => { this.toList(); }, expand: "full" }, "Add")))),
                    h("ion-col", null,
                        h("ion-card", null,
                            h("ion-card-header", { color: "secondary" },
                                h("ion-card-title", null, "Elements")),
                            h("br", null),
                            h("ion-card-content", null,
                                h("div", null, this.elements.map((element) => h("ion-item", null,
                                    h("ion-label", null, element),
                                    h("ion-button", { color: "primary", onClick: () => { this.deleteElement(element); }, slot: "end" },
                                        h("ion-icon", { slot: "start", name: "trash" }),
                                        "Delete")))))))),
                h("ion-row", null,
                    h("ion-col", null,
                        h("ion-button", { expand: "full", onClick: () => { this.setResult(); } }, "Randomize"))))) : (h("ion-card", null,
                h("ion-item", null,
                    h("ion-icon", { name: "star" }),
                    h("ion-label", null, "Congratulations!")),
                h("ion-card-content", null,
                    h("h1", null, this.result)))))
        ];
    }
    static get is() { return "random-list"; }
    static get properties() { return {
        "elements": {
            "state": true
        },
        "result": {
            "state": true
        },
        "value": {
            "state": true
        }
    }; }
    static get style() { return ":root {\n\n    --ion-background-color: #ffffff;\n    --ion-background-color-rgb: 255,255,255;\n  \n    --ion-text-color: #000000;\n    --ion-text-color-rgb: 0,0,0;\n  \n    --ion-color-step-50: #f2f2f2;\n    --ion-color-step-100: #e6e6e6;\n    --ion-color-step-150: #d9d9d9;\n    --ion-color-step-200: #cccccc;\n    --ion-color-step-250: #bfbfbf;\n    --ion-color-step-300: #b3b3b3;\n    --ion-color-step-350: #a6a6a6;\n    --ion-color-step-400: #999999;\n    --ion-color-step-450: #8c8c8c;\n    --ion-color-step-500: #808080;\n    --ion-color-step-550: #737373;\n    --ion-color-step-600: #666666;\n    --ion-color-step-650: #595959;\n    --ion-color-step-700: #4d4d4d;\n    --ion-color-step-750: #404040;\n    --ion-color-step-800: #333333;\n    --ion-color-step-850: #262626;\n    --ion-color-step-900: #191919;\n    --ion-color-step-950: #0d0d0d;\n\n    --ion-toolbar-background:#BA3441 ;\n    --ion-toolbar-color:white;\n    --ion-color-primary: #DB5461;\n    --ion-color-secondary: #223843;\n\n\n    \n  \n    --ion-color-primary-rgb: 56,128,255;\n    --ion-color-primary-contrast: #ffffff;\n    --ion-color-primary-contrast-rgb: 255,255,255;\n    --ion-color-primary-shade: #3171e0;\n    --ion-color-primary-tint: #4c8dff;\n  \n    --ion-color-secondary-rgb: 12,209,232;\n    --ion-color-secondary-contrast: #ffffff;\n    --ion-color-secondary-contrast-rgb: 255,255,255;\n    --ion-color-secondary-shade: #0bb8cc;\n    --ion-color-secondary-tint: #24d6ea;\n  \n    --ion-color-tertiary: #7044ff;\n    --ion-color-tertiary-rgb: 112,68,255;\n    --ion-color-tertiary-contrast: #ffffff;\n    --ion-color-tertiary-contrast-rgb: 255,255,255;\n    --ion-color-tertiary-shade: #633ce0;\n    --ion-color-tertiary-tint: #7e57ff;\n  \n    --ion-color-success: #10dc60;\n    --ion-color-success-rgb: 16,220,96;\n    --ion-color-success-contrast: #ffffff;\n    --ion-color-success-contrast-rgb: 255,255,255;\n    --ion-color-success-shade: #0ec254;\n    --ion-color-success-tint: #28e070;\n  \n    --ion-color-warning: #ffce00;\n    --ion-color-warning-rgb: 255,206,0;\n    --ion-color-warning-contrast: #ffffff;\n    --ion-color-warning-contrast-rgb: 255,255,255;\n    --ion-color-warning-shade: #e0b500;\n    --ion-color-warning-tint: #ffd31a;\n  \n    --ion-color-danger: #f04141;\n    --ion-color-danger-rgb: 245,61,61;\n    --ion-color-danger-contrast: #ffffff;\n    --ion-color-danger-contrast-rgb: 255,255,255;\n    --ion-color-danger-shade: #d33939;\n    --ion-color-danger-tint: #f25454;\n  \n    --ion-color-dark: #222428;\n    --ion-color-dark-rgb: 34,34,34;\n    --ion-color-dark-contrast: #ffffff;\n    --ion-color-dark-contrast-rgb: 255,255,255;\n    --ion-color-dark-shade: #1e2023;\n    --ion-color-dark-tint: #383a3e;\n  \n    --ion-color-medium: #989aa2;\n    --ion-color-medium-rgb: 152,154,162;\n    --ion-color-medium-contrast: #ffffff;\n    --ion-color-medium-contrast-rgb: 255,255,255;\n    --ion-color-medium-shade: #86888f;\n    --ion-color-medium-tint: #a2a4ab;\n  \n    --ion-color-light: #f4f5f8;\n    --ion-color-light-rgb: 244,244,244;\n    --ion-color-light-contrast: #000000;\n    --ion-color-light-contrast-rgb: 0,0,0;\n    --ion-color-light-shade: #d7d8da;\n    --ion-color-light-tint: #f5f6f9;\n  }\n\n.bg-color{\n    background-color:red;\n}\n\nion-card{\n    min-width: 200px;\n}\n\n\nion-col{\n    min-width: 200px;\n}"; }
}

const SIZE_TO_MEDIA = {
    'xs': '(min-width: 0px)',
    'sm': '(min-width: 576px)',
    'md': '(min-width: 768px)',
    'lg': '(min-width: 992px)',
    'xl': '(min-width: 1200px)',
};
function matchBreakpoint(win, breakpoint) {
    if (breakpoint === undefined || breakpoint === '') {
        return true;
    }
    const mediaQuery = SIZE_TO_MEDIA[breakpoint];
    return win.matchMedia(mediaQuery).matches;
}

const win = window;
const SUPPORTS_VARS = !!(win.CSS && win.CSS.supports && win.CSS.supports("--a: 0"));
const BREAKPOINTS = ["", "xs", "sm", "md", "lg", "xl"];
class Col {
    onResize() {
        this.el.forceUpdate();
    }
    getColumns(property) {
        let matched;
        for (const breakpoint of BREAKPOINTS) {
            const matches = matchBreakpoint(this.win, breakpoint);
            const columns = this[property + breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)];
            if (matches && columns !== undefined) {
                matched = columns;
            }
        }
        return matched;
    }
    calculateSize() {
        const columns = this.getColumns("size");
        if (!columns || columns === "") {
            return;
        }
        const colSize = (columns === "auto")
            ? "auto"
            : SUPPORTS_VARS ? `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)`
                : ((columns / 12) * 100) + "%";
        return {
            "flex": `0 0 ${colSize}`,
            "width": `${colSize}`,
            "max-width": `${colSize}`
        };
    }
    calculatePosition(property, modifier) {
        const columns = this.getColumns(property);
        if (!columns) {
            return;
        }
        const amount = SUPPORTS_VARS
            ? `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)`
            : (columns > 0 && columns < 12) ? (columns / 12 * 100) + "%" : "auto";
        return {
            [modifier]: amount
        };
    }
    calculateOffset() {
        const isRTL = document.dir === "rtl";
        return this.calculatePosition("offset", isRTL ? "margin-right" : "margin-left");
    }
    calculatePull() {
        const isRTL = document.dir === "rtl";
        return this.calculatePosition("pull", isRTL ? "left" : "right");
    }
    calculatePush() {
        const isRTL = document.dir === "rtl";
        return this.calculatePosition("push", isRTL ? "right" : "left");
    }
    hostData() {
        return {
            style: Object.assign({}, this.calculateOffset(), this.calculatePull(), this.calculatePush(), this.calculateSize())
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-col"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "el": {
                "elementRef": true
            },
            "offset": {
                "type": String,
                "attr": "offset"
            },
            "offsetLg": {
                "type": String,
                "attr": "offset-lg"
            },
            "offsetMd": {
                "type": String,
                "attr": "offset-md"
            },
            "offsetSm": {
                "type": String,
                "attr": "offset-sm"
            },
            "offsetXl": {
                "type": String,
                "attr": "offset-xl"
            },
            "offsetXs": {
                "type": String,
                "attr": "offset-xs"
            },
            "pull": {
                "type": String,
                "attr": "pull"
            },
            "pullLg": {
                "type": String,
                "attr": "pull-lg"
            },
            "pullMd": {
                "type": String,
                "attr": "pull-md"
            },
            "pullSm": {
                "type": String,
                "attr": "pull-sm"
            },
            "pullXl": {
                "type": String,
                "attr": "pull-xl"
            },
            "pullXs": {
                "type": String,
                "attr": "pull-xs"
            },
            "push": {
                "type": String,
                "attr": "push"
            },
            "pushLg": {
                "type": String,
                "attr": "push-lg"
            },
            "pushMd": {
                "type": String,
                "attr": "push-md"
            },
            "pushSm": {
                "type": String,
                "attr": "push-sm"
            },
            "pushXl": {
                "type": String,
                "attr": "push-xl"
            },
            "pushXs": {
                "type": String,
                "attr": "push-xs"
            },
            "size": {
                "type": String,
                "attr": "size"
            },
            "sizeLg": {
                "type": String,
                "attr": "size-lg"
            },
            "sizeMd": {
                "type": String,
                "attr": "size-md"
            },
            "sizeSm": {
                "type": String,
                "attr": "size-sm"
            },
            "sizeXl": {
                "type": String,
                "attr": "size-xl"
            },
            "sizeXs": {
                "type": String,
                "attr": "size-xs"
            },
            "win": {
                "context": "window"
            }
        };
    }
    static get listeners() {
        return [{
                "name": "window:resize",
                "method": "onResize",
                "passive": true
            }];
    }
    static get style() { return ":host {\n  /**\n   * \@prop --ion-grid-columns: The number of total Columns in the Grid\n   * \@prop --ion-grid-column-padding: Padding for the Column\n   * \@prop --ion-grid-column-padding-xs: Padding for the Column on xs screens and up\n   * \@prop --ion-grid-column-padding-sm: Padding for the Column on sm screens and up\n   * \@prop --ion-grid-column-padding-md: Padding for the Column on md screens and up\n   * \@prop --ion-grid-column-padding-lg: Padding for the Column on lg screens and up\n   * \@prop --ion-grid-column-padding-xl: Padding for the Column on xl screens and up\n   */\n  padding-left: var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));\n  padding-right: var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));\n  padding-top: var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));\n  padding-bottom: var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  position: relative;\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  width: 100%;\n  max-width: 100%;\n  min-height: 1px; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    :host {\n      padding-left: unset;\n      padding-right: unset;\n      -webkit-padding-start: var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));\n      padding-inline-start: var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));\n      -webkit-padding-end: var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));\n      padding-inline-end: var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px)); } }\n  \@media (min-width: 576px) {\n    :host {\n      padding-left: var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));\n      padding-right: var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));\n      padding-top: var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));\n      padding-bottom: var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px)); }\n      \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n        :host {\n          padding-left: unset;\n          padding-right: unset;\n          -webkit-padding-start: var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));\n          padding-inline-start: var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));\n          -webkit-padding-end: var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));\n          padding-inline-end: var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px)); } } }\n  \@media (min-width: 768px) {\n    :host {\n      padding-left: var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));\n      padding-right: var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));\n      padding-top: var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));\n      padding-bottom: var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px)); }\n      \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n        :host {\n          padding-left: unset;\n          padding-right: unset;\n          -webkit-padding-start: var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));\n          padding-inline-start: var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));\n          -webkit-padding-end: var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));\n          padding-inline-end: var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px)); } } }\n  \@media (min-width: 992px) {\n    :host {\n      padding-left: var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));\n      padding-right: var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));\n      padding-top: var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));\n      padding-bottom: var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px)); }\n      \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n        :host {\n          padding-left: unset;\n          padding-right: unset;\n          -webkit-padding-start: var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));\n          padding-inline-start: var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));\n          -webkit-padding-end: var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));\n          padding-inline-end: var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px)); } } }\n  \@media (min-width: 1200px) {\n    :host {\n      padding-left: var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));\n      padding-right: var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));\n      padding-top: var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));\n      padding-bottom: var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px)); }\n      \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n        :host {\n          padding-left: unset;\n          padding-right: unset;\n          -webkit-padding-start: var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));\n          padding-inline-start: var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));\n          -webkit-padding-end: var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));\n          padding-inline-end: var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px)); } } }"; }
}

class Grid {
    constructor() {
        this.fixed = false;
    }
    hostData() {
        return {
            class: {
                "grid-fixed": this.fixed
            }
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-grid"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "fixed": {
                "type": Boolean,
                "attr": "fixed"
            }
        };
    }
    static get style() { return ":host {\n  /**\n   * \@prop --ion-grid-padding: Padding for the Grid\n   * \@prop --ion-grid-padding-xs: Padding for the Grid on xs screens\n   * \@prop --ion-grid-padding-sm: Padding for the Grid on sm screens\n   * \@prop --ion-grid-padding-md: Padding for the Grid on md screens\n   * \@prop --ion-grid-padding-lg: Padding for the Grid on lg screens\n   * \@prop --ion-grid-padding-xl: Padding for the Grid on xl screens\n   *\n   * \@prop --ion-grid-width: Width of the fixed Grid\n   * \@prop --ion-grid-width-xs: Width of the fixed Grid on xs screens\n   * \@prop --ion-grid-width-sm: Width of the fixed Grid on sm screens\n   * \@prop --ion-grid-width-md: Width of the fixed Grid on md screens\n   * \@prop --ion-grid-width-lg: Width of the fixed Grid on lg screens\n   * \@prop --ion-grid-width-xl: Width of the fixed Grid on xl screens\n   */\n  padding-left: var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));\n  padding-right: var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));\n  padding-top: var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));\n  padding-bottom: var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));\n  margin-left: auto;\n  margin-right: auto;\n  display: block; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    :host {\n      padding-left: unset;\n      padding-right: unset;\n      -webkit-padding-start: var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));\n      padding-inline-start: var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));\n      -webkit-padding-end: var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));\n      padding-inline-end: var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px)); } }\n  \@media (min-width: 576px) {\n    :host {\n      padding-left: var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));\n      padding-right: var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));\n      padding-top: var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));\n      padding-bottom: var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px)); }\n      \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n        :host {\n          padding-left: unset;\n          padding-right: unset;\n          -webkit-padding-start: var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));\n          padding-inline-start: var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));\n          -webkit-padding-end: var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));\n          padding-inline-end: var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px)); } } }\n  \@media (min-width: 768px) {\n    :host {\n      padding-left: var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));\n      padding-right: var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));\n      padding-top: var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));\n      padding-bottom: var(--ion-grid-padding-md, var(--ion-grid-padding, 5px)); }\n      \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n        :host {\n          padding-left: unset;\n          padding-right: unset;\n          -webkit-padding-start: var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));\n          padding-inline-start: var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));\n          -webkit-padding-end: var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));\n          padding-inline-end: var(--ion-grid-padding-md, var(--ion-grid-padding, 5px)); } } }\n  \@media (min-width: 992px) {\n    :host {\n      padding-left: var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));\n      padding-right: var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));\n      padding-top: var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));\n      padding-bottom: var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px)); }\n      \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n        :host {\n          padding-left: unset;\n          padding-right: unset;\n          -webkit-padding-start: var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));\n          padding-inline-start: var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));\n          -webkit-padding-end: var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));\n          padding-inline-end: var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px)); } } }\n  \@media (min-width: 1200px) {\n    :host {\n      padding-left: var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));\n      padding-right: var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));\n      padding-top: var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));\n      padding-bottom: var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px)); }\n      \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n        :host {\n          padding-left: unset;\n          padding-right: unset;\n          -webkit-padding-start: var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));\n          padding-inline-start: var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));\n          -webkit-padding-end: var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));\n          padding-inline-end: var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px)); } } }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    :host {\n      margin-left: unset;\n      margin-right: unset;\n      -webkit-margin-start: auto;\n      margin-inline-start: auto;\n      -webkit-margin-end: auto;\n      margin-inline-end: auto; } }\n\n:host(.grid-fixed) {\n  width: var(--ion-grid-width-xs, var(--ion-grid-width, 100%));\n  max-width: 100%; }\n  \@media (min-width: 576px) {\n    :host(.grid-fixed) {\n      width: var(--ion-grid-width-sm, var(--ion-grid-width, 540px)); } }\n  \@media (min-width: 768px) {\n    :host(.grid-fixed) {\n      width: var(--ion-grid-width-md, var(--ion-grid-width, 720px)); } }\n  \@media (min-width: 992px) {\n    :host(.grid-fixed) {\n      width: var(--ion-grid-width-lg, var(--ion-grid-width, 960px)); } }\n  \@media (min-width: 1200px) {\n    :host(.grid-fixed) {\n      width: var(--ion-grid-width-xl, var(--ion-grid-width, 1140px)); } }\n\n:host([no-padding]) {\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0; }\n\n:host([no-padding]) ::slotted(ion-col) {\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0; }"; }
}

class Input {
    constructor() {
        this.inputId = `ion-input-${inputIds++}`;
        this.didBlurAfterEdit = false;
        this.hasFocus = false;
        this.autocapitalize = "off";
        this.autocomplete = "off";
        this.autocorrect = "off";
        this.autofocus = false;
        this.clearInput = false;
        this.debounce = 0;
        this.disabled = false;
        this.name = this.inputId;
        this.readonly = false;
        this.required = false;
        this.spellcheck = false;
        this.type = "text";
        this.value = "";
        this.onInput = (ev) => {
            const input = ev.target;
            if (input) {
                this.value = input.value || "";
            }
            this.ionInput.emit(ev);
        };
        this.onBlur = () => {
            this.hasFocus = false;
            this.focusChanged();
            this.emitStyle();
            this.ionBlur.emit();
        };
        this.onFocus = () => {
            this.hasFocus = true;
            this.focusChanged();
            this.emitStyle();
            this.ionFocus.emit();
        };
        this.onKeydown = () => {
            if (this.clearOnEdit) {
                if (this.didBlurAfterEdit && this.hasValue()) {
                    this.clearTextInput();
                }
                this.didBlurAfterEdit = false;
            }
        };
        this.clearTextInput = () => {
            this.value = "";
        };
    }
    debounceChanged() {
        this.ionChange = debounceEvent(this.ionChange, this.debounce);
    }
    disabledChanged() {
        this.emitStyle();
    }
    valueChanged() {
        this.emitStyle();
        this.ionChange.emit({ value: this.value });
    }
    componentWillLoad() {
        if (this.clearOnEdit === undefined && this.type === "password") {
            this.clearOnEdit = true;
        }
        this.emitStyle();
    }
    componentDidLoad() {
        this.debounceChanged();
        this.ionInputDidLoad.emit();
    }
    componentDidUnload() {
        this.ionInputDidUnload.emit();
    }
    setFocus() {
        if (this.nativeInput) {
            this.nativeInput.focus();
        }
    }
    getInputElement() {
        return Promise.resolve(this.nativeInput);
    }
    getValue() {
        return this.value || "";
    }
    emitStyle() {
        this.ionStyle.emit({
            "interactive": true,
            "input": true,
            "has-placeholder": this.placeholder != null,
            "has-value": this.hasValue(),
            "has-focus": this.hasFocus,
            "interactive-disabled": this.disabled,
        });
    }
    focusChanged() {
        if (this.clearOnEdit && !this.hasFocus && this.hasValue()) {
            this.didBlurAfterEdit = true;
        }
    }
    hasValue() {
        return this.getValue().length > 0;
    }
    hostData() {
        return {
            "aria-disabled": this.disabled ? "true" : null,
            class: Object.assign({}, createColorClasses(this.color), { "has-value": this.hasValue(), "has-focus": this.hasFocus })
        };
    }
    render() {
        const value = this.getValue();
        const labelId = this.inputId + "-lbl";
        const label = findItemLabel(this.el);
        if (label) {
            label.id = labelId;
        }
        return [
            h("input", { class: "native-input", ref: input => this.nativeInput = input, "aria-labelledby": labelId, disabled: this.disabled, accept: this.accept, autoCapitalize: this.autocapitalize, autoComplete: this.autocomplete, autoCorrect: this.autocorrect, autoFocus: this.autofocus, inputMode: this.inputmode, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, multiple: this.multiple, name: this.name, pattern: this.pattern, placeholder: this.placeholder || "", readOnly: this.readonly, required: this.required, spellCheck: this.spellcheck, step: this.step, size: this.size, type: this.type, value: value, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeydown }),
            (this.clearInput && !this.readonly && !this.disabled) && h("button", { type: "button", class: "input-clear-icon", tabindex: "-1", onTouchStart: this.clearTextInput, onMouseDown: this.clearTextInput })
        ];
    }
    static get is() { return "ion-input"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "accept": {
                "type": String,
                "attr": "accept"
            },
            "autocapitalize": {
                "type": String,
                "attr": "autocapitalize"
            },
            "autocomplete": {
                "type": String,
                "attr": "autocomplete"
            },
            "autocorrect": {
                "type": String,
                "attr": "autocorrect"
            },
            "autofocus": {
                "type": Boolean,
                "attr": "autofocus"
            },
            "clearInput": {
                "type": Boolean,
                "attr": "clear-input"
            },
            "clearOnEdit": {
                "type": Boolean,
                "attr": "clear-on-edit",
                "mutable": true
            },
            "color": {
                "type": String,
                "attr": "color"
            },
            "debounce": {
                "type": Number,
                "attr": "debounce",
                "watchCallbacks": ["debounceChanged"]
            },
            "disabled": {
                "type": Boolean,
                "attr": "disabled",
                "watchCallbacks": ["disabledChanged"]
            },
            "el": {
                "elementRef": true
            },
            "getInputElement": {
                "method": true
            },
            "hasFocus": {
                "state": true
            },
            "inputmode": {
                "type": String,
                "attr": "inputmode"
            },
            "max": {
                "type": String,
                "attr": "max"
            },
            "maxlength": {
                "type": Number,
                "attr": "maxlength"
            },
            "min": {
                "type": String,
                "attr": "min"
            },
            "minlength": {
                "type": Number,
                "attr": "minlength"
            },
            "mode": {
                "type": String,
                "attr": "mode"
            },
            "multiple": {
                "type": Boolean,
                "attr": "multiple"
            },
            "name": {
                "type": String,
                "attr": "name"
            },
            "pattern": {
                "type": String,
                "attr": "pattern"
            },
            "placeholder": {
                "type": String,
                "attr": "placeholder"
            },
            "readonly": {
                "type": Boolean,
                "attr": "readonly"
            },
            "required": {
                "type": Boolean,
                "attr": "required"
            },
            "setFocus": {
                "method": true
            },
            "size": {
                "type": Number,
                "attr": "size"
            },
            "spellcheck": {
                "type": Boolean,
                "attr": "spellcheck"
            },
            "step": {
                "type": String,
                "attr": "step"
            },
            "type": {
                "type": String,
                "attr": "type"
            },
            "value": {
                "type": String,
                "attr": "value",
                "mutable": true,
                "watchCallbacks": ["valueChanged"]
            }
        };
    }
    static get events() {
        return [{
                "name": "ionInput",
                "method": "ionInput",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionChange",
                "method": "ionChange",
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
                "name": "ionFocus",
                "method": "ionFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionInputDidLoad",
                "method": "ionInputDidLoad",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionInputDidUnload",
                "method": "ionInputDidUnload",
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
    static get style() { return ".sc-ion-input-ios-h {\n  \n  --placeholder-color: initial;\n  --placeholder-font-style: initial;\n  --placeholder-font-weight: initial;\n  --placeholder-opacity: .5;\n  --padding-top: 0;\n  --padding-end: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --background: transparent;\n  --color: initial;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-align: center;\n  align-items: center;\n  width: 100%;\n  \n  padding: 0 !important;\n  background: var(--background);\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  z-index: 2; }\n\nion-item.sc-ion-input-ios-h:not(.item-label), ion-item:not(.item-label)   .sc-ion-input-ios-h {\n  --padding-start: 0; }\n\n.ion-color.sc-ion-input-ios-h {\n  color: var(--ion-color-base); }\n\n.native-input.sc-ion-input-ios {\n  border-radius: var(--border-radius);\n  padding-left: var(--padding-start);\n  padding-right: var(--padding-end);\n  padding-top: var(--padding-top);\n  padding-bottom: var(--padding-bottom);\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  display: inline-block;\n  -ms-flex: 1;\n  flex: 1;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  border: 0;\n  outline: none;\n  background: transparent;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n  \@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n    .native-input.sc-ion-input-ios {\n      padding-left: unset;\n      padding-right: unset;\n      -webkit-padding-start: var(--padding-start);\n      padding-inline-start: var(--padding-start);\n      -webkit-padding-end: var(--padding-end);\n      padding-inline-end: var(--padding-end); } }\n  .native-input.sc-ion-input-ios::-webkit-input-placeholder {\n    color: var(--placeholder-color);\n    font-family: inherit;\n    font-style: var(--placeholder-font-style);\n    font-weight: var(--placeholder-font-weight);\n    opacity: var(--placeholder-opacity); }\n  .native-input.sc-ion-input-ios:-ms-input-placeholder {\n    color: var(--placeholder-color);\n    font-family: inherit;\n    font-style: var(--placeholder-font-style);\n    font-weight: var(--placeholder-font-weight);\n    opacity: var(--placeholder-opacity); }\n  .native-input.sc-ion-input-ios::-ms-input-placeholder {\n    color: var(--placeholder-color);\n    font-family: inherit;\n    font-style: var(--placeholder-font-style);\n    font-weight: var(--placeholder-font-weight);\n    opacity: var(--placeholder-opacity); }\n  .native-input.sc-ion-input-ios::placeholder {\n    color: var(--placeholder-color);\n    font-family: inherit;\n    font-style: var(--placeholder-font-style);\n    font-weight: var(--placeholder-font-weight);\n    opacity: var(--placeholder-opacity); }\n  .native-input.sc-ion-input-ios:-webkit-autofill {\n    background-color: transparent; }\n  .native-input.sc-ion-input-ios:invalid {\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n  .native-input.sc-ion-input-ios::-ms-clear {\n    display: none; }\n\n.native-input[disabled].sc-ion-input-ios {\n  opacity: .4; }\n\n.cloned-input.sc-ion-input-ios {\n  left: 0;\n  top: 0;\n  position: absolute;\n  pointer-events: none; }\n  [dir=rtl].sc-ion-input-ios-h   .cloned-input.sc-ion-input-ios, [dir=rtl]   .sc-ion-input-ios-h   .cloned-input.sc-ion-input-ios {\n    right: 0; }\n\n.input-clear-icon.sc-ion-input-ios {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  background-position: center;\n  border: 0;\n  outline: none;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  visibility: hidden;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n.has-focus.has-value.sc-ion-input-ios-h   .input-clear-icon.sc-ion-input-ios {\n  visibility: visible; }\n\n.has-focus.sc-ion-input-ios-h {\n  pointer-events: none; }\n\n.has-focus.sc-ion-input-ios-h   input.sc-ion-input-ios, .has-focus.sc-ion-input-ios-h   a.sc-ion-input-ios, .has-focus.sc-ion-input-ios-h   button.sc-ion-input-ios {\n  pointer-events: auto; }\n\n.sc-ion-input-ios-h {\n  --padding-top: 10px;\n  --padding-end: 8px;\n  --padding-bottom: 10px;\n  --padding-start: 0;\n  font-size: inherit; }\n\n.item-label-stacked.sc-ion-input-ios-h, .item-label-stacked   .sc-ion-input-ios-h, .item-label-floating.sc-ion-input-ios-h, .item-label-floating   .sc-ion-input-ios-h {\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  --padding-start: 0px; }\n\n.input-clear-icon.sc-ion-input-ios {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-color-step-600,%20%23666666)'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");\n  width: 30px;\n  height: 30px;\n  background-size: 18px; }"; }
    static get styleMode() { return "ios"; }
}
let inputIds = 0;

class Row {
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-row"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ":host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }"; }
}

export { RandomList, Col as IonCol, Grid as IonGrid, Input as IonInput, Row as IonRow };
