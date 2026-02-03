class Footer extends HTMLElement{
connectedCallback(){
this.innerHTML=`
<footer>
© 2026 Суспільний Центр Дії
</footer>`;
}
}
customElements.define('footer-component',Footer);
