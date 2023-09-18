import {CSTMElement} from './CSTMElement.js'

class Wizard extends CSTMElement {
    constructor() {
        super();

this.classList.add("flex")

        this.render(/*html*/`
            <link rel="stylesheet" href="/dist/output.css">

            <h1 class="text-3xl">test</h1>
        `)
    }
}

customElements.define("cstm-wizard", Wizard);