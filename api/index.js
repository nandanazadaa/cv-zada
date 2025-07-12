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
    rejectUnauthorized: false,
    sslmode: process.env.PGSSLMODE || 'require'
  },
  sslmode: process.env.PGSSLMODE || 'require'
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
    res.status(500).json({ error: 'Database connection failed' });
  }
});

// Get education data from database
app.get("/api/education", async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM education ORDER BY id DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching education:', error);
    res.status(500).json({ error: 'Failed to fetch education data' });
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
      
      if (row.skill_id) {
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
    res.status(500).json({ error: 'Failed to fetch skills data' });
  }
});

// Get projects data from database
app.get("/api/projects", async (req, res) => {
  try {
    const projectsResult = await pool.query('SELECT * FROM projects ORDER BY id DESC');
    const projects = projectsResult.rows;
    
    console.log('Projects from database:', projects); // Debug log
    
    // Get technologies for each project
    for (let project of projects) {
      const techResult = await pool.query(
        'SELECT technology FROM project_technologies WHERE project_id = $1',
        [project.id]
      );
      project.tech = techResult.rows.map(row => row.technology);
    }
    
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Failed to fetch projects data' });
  }
});

// Export for Vercel
module.exports = app; 