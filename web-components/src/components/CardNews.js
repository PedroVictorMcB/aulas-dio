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

        // const titleH1 = document.createElement("h1");   investigar como deixar o texto bold com a tag h1
        // titleH1.textContent = this.getAttribute("title");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newContent = document.createElement("p");
        newContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        // cardLeft.appendChild(titleH1);
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
        const style = document.createElement("style");
        style.textContent = `
            .card {
                width: 45rem;
                /* border: .2rem solid black; */
                box-shadow: 5px 5px 45px 15px black;
                display: flex;
                flex-direction: row;
                background-color: rgba(0, 255, 255, 0.539);
                justify-content: space-between;
            }

            .card-left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: .5rem;
            }

            .card-left  h1 {
                margin-top: .70rem;
                margin-bottom: .15rem;
                box-shadow: 2px 2px 50px 3px white;
                background-color: rgba(255, 255, 255, 0.5);
            }

            .card-left span {
                color: gray;
                opacity: 0.7;
                font-size: 15px;
                padding-left: .15rem;
            }

            .card-left p {
                color: gray;
                opacity: 0.9;
            }

            .card-right img {
                width: 18rem;
                height: 12rem;
                margin: .25rem;
                margin-bottom: 0;
            }
        `;

        return style
    }
}

customElements.define("card-news", CardNews)