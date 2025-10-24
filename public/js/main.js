const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle && navToggle.addEventListener('click', () => {
	const expanded = navToggle.getAttribute('aria-expanded') === 'true';
	navToggle.setAttribute('aria-expanded', String(!expanded));
	if(navLinks.style.display === 'flex') navLinks.style.display = 'none';
	else navLinks.style.display = 'flex';
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
	a.addEventListener('click', (e) => {
		const href = a.getAttribute('href');
		if(href.length > 1){
			e.preventDefault();
			const el = document.querySelector(href);
			if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
			if(window.innerWidth <= 640 && navLinks){navLinks.style.display='none';navToggle.setAttribute('aria-expanded','false')}
		}
	})
});

let projectsData = [
	{name:'Meowl-as-a-Service',desc:'Meowl as a Service (MaaS) — JavaScript service',url:'https://github.com/pavelknespl/Meowl-as-a-Service',topics:['javascript','service']},
	{name:'WindBoost',desc:'Minecraft windboost skript',url:'https://github.com/pavelknespl/WindBoost',topics:['minecraft','skript']}
];

let skillsData = ['Python','JavaScript','C','Lua','Bash','HTML5','CSS3','Node.js','Express','Flask','MySQL','Arduino','Raspberry Pi','Docker','Git'];

function renderProjects(){
	const grid = document.getElementById('projectsGrid');
	if(!grid || !projectsData) return;
	grid.innerHTML = '';
	projectsData.forEach(p=>{
		const card = document.createElement('article');
		card.className='card';
		card.innerHTML = `
			<h3><a href="${p.url}" target="_blank" rel="noopener">${p.name}</a></h3>
			<p>${p.desc || ''}</p>
			<div class="tags">${(p.topics||[]).map(t=>`<span class="tag">${t}</span>`).join('')}</div>
		`;
		grid.appendChild(card);
	})
}

function renderSkills(){
	const el = document.getElementById('skillsList');
	if(!el || !skillsData) return;
	el.innerHTML = '';
	skillsData.forEach(s=>{
		const span = document.createElement('div');
		span.className='skill';
		span.textContent = s;
		el.appendChild(span);
	})
}

async function loadDataAndRender(){
	try{
		const [pRes, sRes] = await Promise.all([
			fetch('/api/projects'),
			fetch('/api/skills')
		]);
		if(pRes.ok){ projectsData = await pRes.json(); }
		if(sRes.ok){ skillsData = await sRes.json(); }
	}catch(err){
		console.warn('Could not fetch API data, using local fallbacks', err);
	}
	renderProjects();
	renderSkills();
}

loadDataAndRender();

function adjustScrollPadding(){
	const nav = document.getElementById('navbar');
	const navH = nav ? nav.offsetHeight : 0;
	document.documentElement.style.scrollPaddingTop = (navH + 8) + 'px';
}

window.addEventListener('load', adjustScrollPadding);
window.addEventListener('resize', () => { setTimeout(adjustScrollPadding, 80); });

(function(){
	let busy = false;
	const sections = () => Array.from(document.querySelectorAll('.section'));
	function nearestIndex(){
		const rects = sections().map(s=>s.getBoundingClientRect());
		let min = Infinity, idx = 0;
		rects.forEach((r,i)=>{ if(Math.abs(r.top) < min){ min = Math.abs(r.top); idx = i }});
		return idx;
	}
	window.addEventListener('wheel', (e)=>{
		if(busy) return;
		const dir = Math.sign(e.deltaY);
		const list = sections();
		const idx = nearestIndex();
		if(dir > 0 && idx < list.length - 1){
			busy = true;
			list[idx+1].scrollIntoView({behavior:'smooth'});
			setTimeout(()=>busy=false,450);
			e.preventDefault();
		} else if(dir < 0 && idx > 0){
			busy = true;
			list[idx-1].scrollIntoView({behavior:'smooth'});
			setTimeout(()=>busy=false,450);
			e.preventDefault();
		}
	}, {passive:false});
})();

(function(){
	const projects = document.getElementById('projects');
	if(!projects) return;
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(e => {
			const visible = e.intersectionRatio >= 0.5;
			if(visible){
				document.documentElement.classList.add('footer-visible');
			} else {
				document.documentElement.classList.remove('footer-visible');
			}
		});
	}, { threshold: [0.5] });
	observer.observe(projects);
})();