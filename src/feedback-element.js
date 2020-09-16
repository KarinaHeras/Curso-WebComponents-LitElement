{import {LitElement, html} from 'lit-element';


class FeedbackELement extends LitElement {
    static get properties() {
        return {
            msg: { type: String},
            opened: {type: Boolean},

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
        <style>
        div{
            position: fixed;
            bottom:0px;
            overflow: hidden;
            height: 0;
            display:flex;
            align-items: center;
            justify-content:center;
            background-color:aqua;
            color: white;
            transition: all 0.7s ease-in;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 1px;

        }

        opened{
            height:100px;
            font-size: 2 rem;

        }
        </style>
        <div class="${this.opened ? 'opened' : ''}">
        ${this.msg}
        </div>
        `;
    }
    open(mensaje){
        this.msg = mensaje;
        this.opened = true;

        setTimeout(() => this.opened = false, 3000);
    }

}

customElements.define('feedback-element', FeedbackELement);}