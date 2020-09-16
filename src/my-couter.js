import { html, LitElement } from 'lit-element';


class MyCouter extends LitElement {
    static get properties() {
        return {
            couter: { type: Number}
        }
    }

    
    constructor() {
        super();
        this.couter = 0;
    }

    static get styles() {
        return [
            super.styles,
            css``,
        ];
    }

   
    render() {
        return html`
        <style>
        .x{
            background-color:aquamarine;
        }
        
        </style>
        <div class="x">Llevas ${this.couter} clics!</div>
        <div>
        <button @click="${this.incrementar}">+1</button>
        <button @click="${this.decrementar}">-1</button>
        </div>
        <feedback-element id="feedback"></feedback-element>
        `;
    }
    get feedback(){
        return this.shadowRoot.getElementById('feedback');
    }
    incrementar(){
        this.couter ++;
        if(this.couter == 5){
            this.feedback.open('Has llegado a 5 clics');
        }
    }
    decrementar(){
        this.decrementar --;
        if(this.couter == 0){
            this.feedback.open('Has receteado los clics');
        }
    }
}

customElements.define('my-couter', MyCouter);
