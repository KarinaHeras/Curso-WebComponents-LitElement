 import { html, LitElement } from 'lit-element';


class HolaMundo extends LitElement {
    static get properties() {
        return {
            quien: { type: String}
        }
    }

    
    constructor() {
        super();
    }

    static get styles() {
        return [
            super.styles,
            css``,
        ];
    }

   
    render() {
        return html`
        <p>Hola soy LitElement ${this.quien}</p>
        `;
    }

}

customElements.define('hola-mundo', HolaMundo);
