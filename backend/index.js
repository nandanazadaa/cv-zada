const express = require("express");
const cors = require("cors");
require('dotenv').config();
const { Pool } = require('pg');

const app = express();

app.use(cors());
app.use(express.json());

// Konfigurasi koneksi database Neon
const pool = new Pool({
  host: process.env.PGHOST || 'ep-falling-morning-a1qebgkb-pooler.ap-southeast-1.aws.neon.tech',
  database: process.env.PGDATABASE || 'neondb',
  user: process.env.PGUSER || 'neondb_owner',
  password: process.env.PGPASSWORD || 'npg_htjWr1Hdp7lT',
  ssl: {
    rejectUnauthorized: false, // Mengizinkan self-signed certs (untuk dev)
    sslmode: process.env.PGSSLMODE || 'require' // Pastikan ini 'require' atau 'verify-full' untuk produksi
  },
  // Hapus sslmode di luar objek ssl jika sudah ada di dalamnya
  // sslmode: process.env.PGSSLMODE || 'require'
});

// Test database connection
app.get("/api/test", async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({
      message: 'Database connected successfully!',
      timestamp: result.rows[0].now
    });
  } catch (error) {
    console.error('Database connection failed:', error);
    res.status(500).json({ error: 'Database connection failed', details: error.message });
  }
});

// Get education data from database
app.get("/api/education", async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM education ORDER BY id DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching education:', error);
    res.status(500).json({ error: 'Failed to fetch education data', details: error.message });
  }
});

// Get skills data from database (grouped by categories)
app.get("/api/skills", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        sc.id as category_id,
        sc.title as category_title,
        s.id as skill_id,
        s.name as skill_name,
        s.level as skill_level,
        s.logo_url as skill_logo
      FROM skill_categories sc
      LEFT JOIN skills s ON sc.id = s.category_id
      ORDER BY sc.id, s.id
    `);

    // Group skills by category
    const skillCategories = [];
    const categoryMap = new Map();

    result.rows.forEach(row => {
      if (!categoryMap.has(row.category_id)) {
        const category = {
          id: row.category_id,
          title: row.category_title,
          skills: []
        };
        categoryMap.set(row.category_id, category);
        skillCategories.push(category);
      }

      // Only push skill if it exists (LEFT JOIN might return null for skills if category has none)
      if (row.skill_id !== null) { // Check for null skill_id explicitly
        categoryMap.get(row.category_id).skills.push({
          id: row.skill_id,
          name: row.skill_name,
          level: row.skill_level,
          logo: row.skill_logo
        });
      }
    });

    res.json(skillCategories);
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({ error: 'Failed to fetch skills data', details: error.message });
  }
});

// Get projects data from database
app.get("/api/projects", async (req, res) => {
  try {
    const projectsResult = await pool.query('SELECT * FROM projects ORDER BY id ASC'); // Order by ID to ensure consistent order
    const projects = projectsResult.rows;

    console.log('Projects from database (before tech fetch):', projects); // Debug log

    // Get technologies for each project
    for (let project of projects) {
      const techResult = await pool.query(
        'SELECT technology FROM project_technologies WHERE project_id = $1 ORDER BY technology ASC', // Order tech for consistency
        [project.id]
      );
      project.tech = techResult.rows.map(row => row.technology);
      console.log(`Technologies for project ${project.id} (${project.title}):`, project.tech); // Detailed debug log
    }

    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Failed to fetch projects data', details: error.message });
  }
});

// For local testing (optional, not used by Vercel serverless functions)
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// Export for Vercel
module.exports = app;