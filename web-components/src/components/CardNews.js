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

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous"); //criamos um comportamente reativo

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newContent = document.createElement("p");
        newContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newContent);

        const cardRight = document.createElement("div"); //Elemento distinto
        cardRight.setAttribute("class", "card-right");   //Setando Classes ao elemento

        const newsImg = document.createElement("img");
        newsImg.src = (this.getAttribute("photo") || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd45kDVyV7AojsfhZeAQXCT97lrfbjsUlDBufQXl5oUzUWaeTr0ju1AanoZbVSe9LX-OA&usqp=CAU");
        newsImg.alt = "Foto da Notícia";

        cardRight.appendChild(newsImg);

        componentRoot.appendChild(cardLeft);  // Agregando cardLeft a componentRoot
        componentRoot.appendChild(cardRight); // Agregando cardLeft a componentRoot

        return componentRoot;
    }

    style() {

    }
}

customElements.define("card-news", CardNews)