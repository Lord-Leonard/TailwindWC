export class CSTMElement extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }
    render(templateString) {
        this.shadow.innerHTML = templateString;
    }
}
