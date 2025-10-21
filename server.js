const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Static site
app.use(express.static(path.join(__dirname, 'public')));

// Load data from JSON files maintained in public/data
const projects = require('./public/data/projects.json');
const skills = require('./public/data/skills.json');

// API routes
app.get('/api/projects', (req, res) => {
	res.json(projects);
});

app.get('/api/skills', (req, res) => {
	res.json(skills);
});

// SPA fallback: for any GET request not handled by static files, serve index.html
// Use a simple middleware instead of app.get('*', ...) to avoid path parsing issues
app.use((req, res, next) => {
	if (req.method !== 'GET') return next();
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

if (require.main === module) {
	app.listen(port, () => {
		console.log(`Server listening on http://localhost:${port}`);
	});
} else {
	module.exports = app;
}
