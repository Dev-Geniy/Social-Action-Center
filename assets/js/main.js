// Burger menu
const burger=document.getElementById("burger");
const navMobile=document.getElementById("navMobile");
burger.onclick=()=>navMobile.classList.toggle("show");

// Service Worker
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('service-worker.js');
}
