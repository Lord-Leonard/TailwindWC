export class CSTMElement extends HTMLElement {
    public shadow: ShadowRoot;
    
    constructor() {
        super();

        this.shadow = this.attachShadow({mode: "open"});
    }

    render(templateString: string) {
        this.shadow.innerHTML = templateString
    }
}