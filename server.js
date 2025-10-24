const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

const projects = require('./public/data/projects.json');
const skills = require('./public/data/skills.json');

app.get('/api/projects', (req, res) => {
	res.json(projects);
});

app.get('/api/skills', (req, res) => {
	res.json(skills);
});

app.use((req, res, next) => {
	if (req.method !== 'GET') return next();
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
	console.log(`Server listening on http://localhost:${port}`);
});

