
const DATA = window.WEXFORD_DATA;
const $=(q,r=document)=>r.querySelector(q), $$=(q,r=document)=>[...r.querySelectorAll(q)];

// If any photo fails to load (bad path, missing file after upload, etc.)
// hide the broken-image icon instead of showing an ugly placeholder;
// the tile keeps its dark background so the layout stays intact.
document.addEventListener("error",(e)=>{
  const t=e.target;
  if(t.tagName==="IMG" && !t.classList.contains("img-broken")){
    t.classList.add("img-broken");
  }
},true);

const savedTheme = localStorage.getItem("wexford-theme");
if(savedTheme) document.documentElement.dataset.theme=savedTheme;
function syncThemeIcon(){
  $("#modeToggle").textContent = document.documentElement.dataset.theme==="dark" ? "☀️" : "🌙";
}
syncThemeIcon();
$("#modeToggle").addEventListener("click",()=>{
  const next=document.documentElement.dataset.theme==="dark" ? "light":"dark";
  document.documentElement.dataset.theme=next; localStorage.setItem("wexford-theme",next); syncThemeIcon();
});
window.addEventListener("scroll",()=>$(".navbar").classList.toggle("scrolled",scrollY>35));
$(".menu").addEventListener("click",()=>$(".navlinks").classList.toggle("open"));

function initials(name){return name.split(/\s+/).map(x=>x[0]).join("").slice(0,2)}
function renderPeople(group="Leadership"){
  const grid=$("#peopleGrid"); grid.innerHTML="";
  DATA.people.filter(p=>group==="All"||p.group===group).forEach(p=>{
    const el=document.createElement("article"); el.className="person";
    const src=p.embeddedImage || `${p.slug}.jpeg`;
    el.innerHTML=`<div class="portrait"><span>${initials(p.name)}</span><img src="${src}" alt="${p.name}" onerror="this.remove()"></div><h3>${p.name}</h3><p>${p.role}</p>`;
    grid.appendChild(el);
  });
}
renderPeople();
$$("[data-people]").forEach(b=>b.addEventListener("click",()=>{
  $$("[data-people]").forEach(x=>x.classList.remove("active")); b.classList.add("active"); renderPeople(b.dataset.people);
}));

function renderClubs(){
  const grid=$("#clubGrid");
  DATA.clubs.forEach(c=>{
    const el=document.createElement("article"); el.className="club";
    const visual=(c.embeddedImage||c.image)?`<img src="${c.embeddedImage || c.image}" alt="${c.name}">`:`<span>✦</span>`;
    el.innerHTML=`<div class="club-visual">${visual}</div><div class="body"><small>${c.category}</small><h3>${c.name}</h3></div>`;
    grid.appendChild(el);
  })
}
renderClubs();

const content={
  gabriel:`<div class="eyebrow">Literature · Professor Grayson</div><h2 class="serif">Returned Assignment</h2><div class="paper"><p>“…the <span class="red"><s>sex</s> six</span> central themes of the text…”</p><p class="red">Proofread before submitting.</p><p>— G. Grayson</p><div class="grade">D</div></div>`,
  rupert:`<div class="eyebrow">Mathematics · Professor Redford</div><h2 class="serif">Something left on your desk</h2><div class="note-card"><p><b>Mathematics already demands your head.</b></p><p>Eat the chocolate.</p><p>— R. Redford</p></div>`,
  lester:`<div class="eyebrow">Philosophy · Professor Brown</div><h2 class="serif">A book that explains too much</h2><div class="book"><p>Your mother has remarried.</p><p>Her husband is your Philosophy professor.</p><p><b>Lester Brown.</b></p></div>`,
  chase:`<div class="eyebrow">International Financial Relations · Professor Goldwyn</div><h2 class="serif">11:47 PM</h2><div class="phone"><div class="phone-head">Professor Goldwyn</div><div class="bubble">We have nothing to talk about.</div><div class="delivered">Delivered</div></div>`
};
$$(".object").forEach(o=>o.addEventListener("click",()=>{$("#modalBody").innerHTML=content[o.dataset.object];$("#modal").classList.add("open")}));
$("#closeModal").addEventListener("click",()=>$("#modal").classList.remove("open"));
$("#modal").addEventListener("click",e=>{if(e.target.id==="modal")$("#modal").classList.remove("open")});
