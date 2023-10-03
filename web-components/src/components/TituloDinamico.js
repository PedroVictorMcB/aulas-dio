class TituloDinamico extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});

        // base do component <h1>Pedro</h1>
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo");

        // Estilizar o component
        const style = document.createElement("style");
        style.textContent = `
            h1 {
                color: red;
                // font-weight: 900;
                text-decoration: solid;
                -webkit-text-stroke: 1px black;
            }
        `
        // enviar o component para a shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define("titulo-dinamico", TituloDinamico);