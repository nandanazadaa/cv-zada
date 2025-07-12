const { Pool } = require('pg');

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

// Test koneksi
pool.on('connect', () => {
  console.log('✅ Connected to Neon PostgreSQL database');
});

pool.on('error', (err) => {
  console.error('❌ Database connection error:', err);
});

module.exports = pool; 