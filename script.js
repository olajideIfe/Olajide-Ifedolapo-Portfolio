

/* PARTICLES */
const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];
for(let i=0;i<60;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*3,
dx:(Math.random()-0.5)*0.5,
dy:(Math.random()-0.5)*0.5
});
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="rgba(255,255,255,0.5)";

particles.forEach(p=>{
ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fill();

p.x+=p.dx;
p.y+=p.dy;

if(p.x<0||p.x>canvas.width)p.dx*=-1;
if(p.y<0||p.y>canvas.height)p.dy*=-1;
});

requestAnimationFrame(draw);
}
draw();

/* NAV ACTIVE */
const links=document.querySelectorAll(".nav-link");
const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{
let current="";
sections.forEach(sec=>{
if(window.scrollY>=sec.offsetTop-200){
current=sec.id;
}
});
links.forEach(link=>{
link.classList.remove("active");
if(link.getAttribute("href")==="#"+current){
link.classList.add("active");
}
});
});

/* SCROLL ANIMATION */
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

document.querySelectorAll(".fade-up,.slide-in")
.forEach(el=>observer.observe(el));

/* MODAL */
function openModal(project) {
      document.getElementById('modal-' + project).classList.remove('hidden');
    }
    function closeModal(project) {
      document.getElementById('modal-' + project).classList.add('hidden');
    }