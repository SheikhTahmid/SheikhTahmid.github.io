document.getElementById("year").textContent=new Date().getFullYear();
const menu=document.querySelector(".menu-btn");
const links=document.querySelector(".nav-links");

menu.addEventListener("click",()=>{
  const isOpen=links.classList.toggle("open");
  menu.setAttribute("aria-expanded",String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>{
  links.classList.remove("open");
  menu.setAttribute("aria-expanded","false");
}));