const menu=document.getElementById("menu"),nav=document.getElementById("nav");
if(menu && nav){
  menu.addEventListener("click",()=>nav.classList.toggle("open"));
  document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
}
const items=document.querySelectorAll(".reveal");
if("IntersectionObserver" in window){
  const io=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}
  }),{threshold:.12});
  items.forEach(e=>io.observe(e));
}else{
  items.forEach(e=>e.classList.add("visible"));
}
