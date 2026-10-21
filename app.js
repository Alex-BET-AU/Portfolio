'use strict';
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
let data,activeKind='Alle';
const diagram={green:'▣',blue:'⚙',amber:'∿',red:'⌁'};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
async function start(){try{const r=await fetch('content.json');if(!r.ok)throw Error('HTTP '+r.status);data=await r.json()}catch(e){$('#projectGrid').innerHTML='<p>content.json konnte nicht geladen werden. Bitte die Website über einen lokalen Webserver oder GitHub Pages öffnen.</p>';return}renderProfile();renderFilters();renderProjects();renderSkills();renderTimeline();}
function renderProfile(){const p=data.profile||{};$('#location').textContent=p.location||'';$('#plateLocation').textContent=p.location||'';$('#contactLocation').textContent=p.location||'';$('#languages').textContent=p.languages||'';$('#availabilityText').textContent=[p.availability||'Offen für Werkstudentenstellen',p.availabilityDetails].filter(Boolean).join(' · ');$('#heroPitch').textContent=p.pitch||'';$('#aboutCopy').innerHTML=(p.about||[]).map(x=>`<p>${esc(x)}</p>`).join('')+'<a href="#contact" class="text-link">Gemeinsam Technik weiterdenken ↗</a>';
const links=[['emailLink',p.email?'mailto:'+p.email:''],['mailLink',p.email?'mailto:'+p.email:''],['githubLink',p.github],['linkedinLink',p.linkedin]];for(const [id,url] of links){const el=$('#'+id);if(!el)continue;if(!url){el.hidden=true;continue}el.hidden=false;el.href=url;if(!url.startsWith('mailto:')){el.target='_blank';el.rel='noopener noreferrer'}}$('#emailText').textContent=p.email||'';$('#resumeLink').hidden=!p.resume;if(p.resume)$('#resumeLink').href=p.resume;
const d=$$('.nameplate dl dt');const vals=$$('.nameplate dl dd');if(d.length&&vals.length){const typed=Object.fromEntries(p.nameplate||[]);vals[0].textContent=typed['Ausbildung']||'Informationstechnischer Assistent';vals[1].textContent=typed['Hochschule']||'TH Georg Agricola';vals[2].textContent=typed['Schwerpunkte']||'Automatisierungstechnik';vals[3].textContent=p.languages||'';vals[4].textContent=p.location||'';}}
function renderTimeline(){const timeline=$('#timeline');timeline.innerHTML=(data.education||[]).map(e=>`<article><b>${esc(e.status)} · ${esc(e.type)}</b><h3>${esc(e.title)}</h3><strong>${esc(e.institution)}</strong><p>${esc(e.description)}</p></article>`).join('');}
function renderFilters(){const cats=[...new Set(data.projects.map(p=>p.category))];$('#category').innerHTML='<option>Alle Fachgebiete</option>'+cats.map(c=>`<option>${esc(c)}</option>`).join('');$$('#kindTabs button').forEach(b=>{const n=b.dataset.kind==='Alle'?data.projects.length:data.projects.filter(p=>p.kind===b.dataset.kind).length;b.querySelector('b').textContent=n;});}
function renderProjects(){const cat=$('#category').value;const list=data.projects.filter(p=>(activeKind==='Alle'||p.kind===activeKind)&&(cat==='Alle Fachgebiete'||p.category===cat));$('#projectGrid').innerHTML=list.map(p=>{const cover=p.media.find(x=>x.type==='image')||p.media.find(x=>x.type==='video');const n=p.media.filter(x=>x.type==='video').length;const media=cover?cover.type==='image'?`<img loading="lazy" src="${encodeURI(cover.src)}" alt="${esc(p.title)}">`:`<video preload="metadata" muted playsinline src="${encodeURI(cover.src)}"></video>`:`<span>${diagram[p.color]||'⌁'}</span>`;return `<button class="card color-${esc(p.color)}" data-id="${esc(p.id)}"><div class="card-art art-${esc(p.color)}">${media}<code>AA / ${String(data.projects.indexOf(p)+1).padStart(2,'0')}</code><small>${esc(p.kind)}</small>${n?`<b class="media-indicator">▶ ${n} Video${n>1?'s':''}</b>`:''}</div><div class="card-body"><label>● ${esc(p.category)}</label><h3>${esc(p.title)}</h3><p>${esc(p.subtitle)}</p><footer>${p.tags.slice(0,2).map(t=>`<i>${esc(t)}</i>`).join('')}<b>↗</b></footer></div></button>`}).join('');$$('.card').forEach(c=>c.onclick=()=>openProject(data.projects.find(p=>p.id===c.dataset.id)));}
function openProject(p){if(!p)return;const specs=(p.specs||[]).map(s=>`<dt>${esc(s.label)}</dt><dd>${esc(s.value)}</dd>`).join('');const media=(p.media||[]).map(x=>`<figure>${x.type==='video'?`<video controls playsinline preload="metadata" src="${encodeURI(x.src)}"></video>`:`<img class="zoom-image" src="${encodeURI(x.src)}" alt="${esc(x.caption||p.title)}" data-src="${esc(x.src)}" data-caption="${esc(x.caption||'')}">`}<figcaption>${esc(x.caption||p.title)}</figcaption></figure>`).join('');const link=p.link?.href?`<a class="external-link" href="${esc(p.link.href)}" target="_blank" rel="noopener noreferrer">${esc(p.link.text||'Weitere Informationen')} ↗</a>`:'';$('#dialogContent').innerHTML=`<span class="dialog-label">${esc(p.kind)} · ${esc(p.category)} · ${esc(p.year||'')}</span><h2>${esc(p.title)}</h2><p class="dialog-content-description">${esc(p.description)}</p>${link}<h4>Technisches Profil</h4><dl class="specs">${specs}</dl><div class="dialog-tags">${p.tags.map(t=>`<i>${esc(t)}</i>`).join('')}</div>${media?`<h4>Dokumentation & Aufnahmen</h4><div class="media-gallery">${media}</div>`:''}`;$('#details').showModal();$$('.zoom-image').forEach(img=>img.onclick=()=>{ $('#lightboxImg').src=img.dataset.src;$('#lightboxCaption').textContent=img.dataset.caption;$('#lightbox').showModal();});}
function renderSkills(){
  $('#skillGrid').innerHTML=(data.skills||[]).map((s,i)=>
    `<article class="skill sk"><code>/${String(i+1).padStart(2,'0')}</code><h3>${esc(s.group)}</h3><div class="pills">${s.items.map(x=>`<span class="tag">${esc(x)}</span>`).join('')}</div></article>`
  ).join('');
}
$$('#kindTabs button').forEach(b=>b.onclick=()=>{$$('#kindTabs button').forEach(x=>x.classList.remove('active'));b.classList.add('active');activeKind=b.dataset.kind;renderProjects()});$('#category').onchange=renderProjects;$('#closeDialog').onclick=()=>$('#details').close();$('#details').onclick=e=>{if(e.target===$('#details'))$('#details').close()};$('#closeLightbox').onclick=()=>$('#lightbox').close();$('#lightbox').onclick=e=>{if(e.target===$('#lightbox'))$('#lightbox').close()};$('#menuBtn').onclick=()=>$('#nav').classList.toggle('open');$$('#nav a').forEach(a=>a.onclick=()=>$('#nav').classList.remove('open'));
function onScroll(){const m=document.documentElement.scrollHeight-innerHeight,v=m?Math.max(0,Math.min(1,scrollY/m)):0;$('#voltage').innerHTML=(v*24).toFixed(1)+'<sup>V</sup>';$('#voltageBar').style.width=(v*100)+'%';document.documentElement.style.setProperty('--scroll',v)}window.addEventListener('scroll',onScroll,{passive:true});start();onScroll();
// Unsichtbaren Zusatztext aus content.json laden
let kopierZusatz = "";

fetch("./content.json")
  .then(response => response.json())
  .then(data => {
    kopierZusatz = data.profile?.kopierZusatz || "";
  })
  .catch(error => console.error("Fehler beim Laden:", error));

// Zusatztext beim Kopieren automatisch anhängen
document.addEventListener("copy", function(event) {
  const markierterText = window.getSelection().toString();

  if (!markierterText.trim() || !kopierZusatz) return;

  const gesamterText = markierterText + "\n\n" + kopierZusatz;

  event.clipboardData.setData("text/plain", gesamterText);
  event.preventDefault();
});