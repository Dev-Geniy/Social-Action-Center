// Плавное появление элементов
const elements=document.querySelectorAll(".fade-up");
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.2});
elements.forEach(el=>observer.observe(el));
