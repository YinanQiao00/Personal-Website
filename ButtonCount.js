 class ButtonCount extends HTMLElement {
        constructor() {
        super();
        //creat html button to have a clickable button inside customized element
        let buttonElem = document.createElement('button');
        buttonElem.innerHTML = 'Times Clicked : ';
        //creat output element to hold the number of clicks
        let count = document.createElement('output');
        count.textContent = '0';
        //append out put element to the button so that count display on the button
        buttonElem.append(count);
        //Add the count when button was clicked
        buttonElem.addEventListener('click', () => {
        let totalCount = Number(count.textContent);
        count.textContent = (totalCount + 1).toString();
        });
        //turn shadow root on
        this.attachShadow({ mode: 'open' });
        //append element to shadow root
        this.shadowRoot.append(buttonElem);
    }
}
    // Define the custom element in the registry
    customElements.define('button-count', ButtonCount);
