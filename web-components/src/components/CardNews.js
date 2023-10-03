class CardNews extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {
        // O elemento mais externo é sempre chamado de componentRoot
        
        const componentRoot = document.createElement("div"); //Elemento distinto
        componentRoot.setAttribute("class", "card");         //Setando Classes ao elemento

        const cardLeft = document.createElement("div"); //Elemento distinto
        cardLeft.setAttribute("class", "card-left");    //Setando Classes ao elemento

        const cardRight = document.createElement("div"); //Elemento distinto
        cardRight.setAttribute("class", "card-right");   //Setando Classes ao elemento

        componentRoot.appendChild(cardLeft);  // Agregando cardLeft a componentRoot
        componentRoot.appendChild(cardRight); // Agregando cardLeft a componentRoot

        return componentRoot;
    }

    style() {

    }
}

customElements.define("card-news", CardNews)