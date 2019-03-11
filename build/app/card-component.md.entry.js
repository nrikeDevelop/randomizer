const h = window.App.h;

import { b as createColorClasses } from './chunk-7c632336.js';

class CardComponent {
    constructor() {
        this.title = '';
        this.subtitle = '';
        this.text = '';
    }
    render() {
        return (h("ion-card", null,
            h("ion-card-header", null,
                h("ion-card-subtitle", null, this.subtitle),
                h("ion-card-title", null, this.title)),
            h("ion-card-content", null, this.text)));
    }
    static get is() { return "card-component"; }
    static get properties() { return {
        "subtitle": {
            "type": String,
            "attr": "subtitle"
        },
        "text": {
            "type": String,
            "attr": "text"
        },
        "title": {
            "type": String,
            "attr": "title"
        }
    }; }
}

class CardSubtitle {
    hostData() {
        return {
            class: createColorClasses(this.color),
            "role": "heading",
            "aria-level": "3"
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-card-subtitle"; }
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
    static get style() { return ":host {\n  /**\n   * \@prop --color: Color of the card subtitle\n   */\n  display: block;\n  position: relative;\n  color: var(--color); }\n\n:host(.ion-color) {\n  color: var(--ion-color-base); }\n\n:host {\n  --color: var(--ion-color-step-550, #737373);\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  font-size: 14px;\n  font-weight: 500; }"; }
    static get styleMode() { return "md"; }
}

export { CardComponent, CardSubtitle as IonCardSubtitle };
