class Header extends HTMLElement{
connectedCallback(){
this.innerHTML=`
<header>
<div class="logo">СЦД</div>
<nav class="nav-links">
<a href="about.html">Про нас</a>
<a href="activity.html">Діяльність</a>
<a href="projects.html">Проєкти</a>
<a href="help.html">Потрібна допомога</a>
<a href="team.html">Стати частиною команди</a>
</nav>
<div class="burger" id="burger">
<div></div><div></div><div></div>
</div>
<nav class="nav-mobile" id="navMobile">
<a href="about.html">Про нас</a>
<a href="activity.html">Діяльність</a>
<a href="projects.html">Проєкти</a>
<a href="help.html">Потрібна допомога</a>
<a href="team.html">Стати частиною команди</a>
</nav>
</header>`;
}
}
customElements.define('header-component',Header);
