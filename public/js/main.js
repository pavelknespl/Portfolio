const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle) {
	navToggle.addEventListener('click', () => {
		if (!navLinks) return;
		const opened = navLinks.classList.toggle('open');
		navToggle.setAttribute('aria-expanded', String(!!opened));
	});
}

document.querySelectorAll('a[href^="#"]').forEach((a) => {
	a.addEventListener('click', (e) => {
		const href = a.getAttribute('href');
		if (href && href.length > 1) {
			e.preventDefault();
			const el = document.querySelector(href);
			if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
			if (window.innerWidth <= 640 && navLinks) {
				navLinks.classList.remove('open');
				if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
			}
		}
	});
});

let projectsData = [
	{
		name: 'Meowl-as-a-Service',
		desc: 'Meowl as a Service (MaaS) — JavaScript service',
		url: 'https://github.com/pavelknespl/Meowl-as-a-Service',
		topics: ['javascript', 'service'],
	},
	{
		name: 'WindBoost',
		desc: 'Minecraft windboost skript',
		url: 'https://github.com/pavelknespl/WindBoost',
		topics: ['minecraft', 'skript'],
	},
];

let skillsData = [
	'Python',
	'JavaScript',
	'C',
	'Lua',
	'Bash',
	'HTML5',
	'CSS3',
	'Node.js',
	'Express',
	'Flask',
	'MySQL',
	'Arduino',
	'Raspberry Pi',
	'Docker',
	'Git',
];

function renderProjects() {
	const grid = document.getElementById('projectsGrid');
	if (!grid || !projectsData) return;
	grid.innerHTML = '';
	projectsData.forEach((p) => {
		const card = document.createElement('article');
		card.className = 'card';
		card.innerHTML = `
			<h3><a href="${p.url}" target="_blank" rel="noopener">${p.name}</a></h3>
			<p>${p.desc || ''}</p>
			<div class="tags">${(p.topics || []).map((t) => `<span class="tag">${t}</span>`).join('')}</div>
		`;
		grid.appendChild(card);
	});
}

function renderSkills() {
	const el = document.getElementById('skillsList');
	if (!el || !skillsData) return;
	el.innerHTML = '';
	skillsData.forEach((s) => {
		const span = document.createElement('div');
		span.className = 'skill';
		span.textContent = s;
		el.appendChild(span);
	});
}

async function loadDataAndRender() {
	try {
		const [pRes, sRes] = await Promise.all([fetch('/api/projects'), fetch('/api/skills')]);
		if (pRes.ok) {
			projectsData = await pRes.json();
		}
		if (sRes.ok) {
			skillsData = await sRes.json();
		}
	} catch (err) {
		console.warn('Could not fetch API data, using local fallbacks', err);
	}
	renderProjects();
	renderSkills();
}

loadDataAndRender();

function adjustScrollPadding() {
	const nav = document.getElementById('navbar');
	const navH = nav ? nav.offsetHeight : 0;
	document.documentElement.style.scrollPaddingTop = `${navH + 8}px`;
}

window.addEventListener('load', adjustScrollPadding);
window.addEventListener('resize', () => {
	setTimeout(adjustScrollPadding, 80);
});

(function () {
	let busy = false;
	const sections = () => Array.from(document.querySelectorAll('.section'));

	function nearestIndex() {
		const rects = sections().map((s) => s.getBoundingClientRect());
		let min = Infinity;
		let idx = 0;
		rects.forEach((r, i) => {
			if (Math.abs(r.top) < min) {
				min = Math.abs(r.top);
				idx = i;
			}
		});
		return idx;
	}

	let targetIndex = null;
	let targetStableTimer = null;
	let snapFailTimer = null;

	function onScrollWatch() {
		if (targetIndex === null) return;
		const idx = nearestIndex();
		if (idx === targetIndex) {
			if (targetStableTimer) clearTimeout(targetStableTimer);
			targetStableTimer = setTimeout(() => {
				busy = false;
				targetIndex = null;
				targetStableTimer = null;
				if (snapFailTimer) {
					clearTimeout(snapFailTimer);
					snapFailTimer = null;
				}
			}, 220);
		} else {
			if (targetStableTimer) {
				clearTimeout(targetStableTimer);
				targetStableTimer = null;
			}
		}
	}

	window.addEventListener('scroll', onScrollWatch, { passive: true });

	window.addEventListener(
		'wheel',
		(e) => {
			if (Math.abs(e.deltaY) < 10) return;
			if (window.innerWidth <= 640) return;
			if (busy) {
				e.preventDefault();
				return;
			}
			const dir = Math.sign(e.deltaY);
			const list = sections();
			const idx = nearestIndex();
			if (dir > 0 && idx < list.length - 1) {
				busy = true;
				const next = list[idx + 1];
				next.scrollIntoView({ behavior: 'smooth', block: 'start' });
				targetIndex = idx + 1;
				if (snapFailTimer) clearTimeout(snapFailTimer);
				snapFailTimer = setTimeout(() => {
					busy = false;
					targetIndex = null;
					snapFailTimer = null;
				}, 900);
				e.preventDefault();
			} else if (dir < 0 && idx > 0) {
				busy = true;
				const prev = list[idx - 1];
				prev.scrollIntoView({ behavior: 'smooth', block: 'start' });
				targetIndex = idx - 1;
				if (snapFailTimer) clearTimeout(snapFailTimer);
				snapFailTimer = setTimeout(() => {
					busy = false;
					targetIndex = null;
					snapFailTimer = null;
				}, 900);
				e.preventDefault();
			}
		},
		{ passive: false }
	);
})();