const express = require('express');
const cors = require('cors');
const db = require('./database/database'); // Your database connection file

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/skills', (req, res) => {
    res.json(skillCategories);
});

app.get('/api/skills', async (req, res) => {
    try {
        const result = await db.query(`
            SELECT
                sc.id,
                sc.title,
                json_agg(json_build_object('name', s.name, 'level', s.level, 'logo', s.logo_url)) AS skills
            FROM
                skill_categories sc
            JOIN
                skills s ON sc.id = s.category_id
            GROUP BY
                sc.id, sc.title
            ORDER BY
                sc.id;
        `);
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching skills:', err);
        res.status(500).json({ error: 'Failed to fetch skills' });
    }
});

// API endpoint to get projects from the database
app.get('/api/projects', async (req, res) => {
    try {
        const result = await db.query(`
            SELECT
                p.id,
                p.title,
                p.description,
                p.image_url,
                p.github_url AS github, -- Alias to match frontend property
                p.live_url AS live,     -- Alias to match frontend property
                ARRAY_AGG(pt.technology) AS tech
            FROM
                projects p
            LEFT JOIN
                project_technologies pt ON p.id = pt.project_id
            GROUP BY
                p.id
            ORDER BY
                p.id;
        `);
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching projects:', err);
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
});

app.listen(port, () => {
    console.log(`Backend server running on http://localhost:${port}`);
});