-- Create tables
CREATE TABLE IF NOT EXISTS education (
  id SERIAL PRIMARY KEY,
  period VARCHAR(50) NOT NULL,
  institution VARCHAR(255) NOT NULL,
  major VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS skill_categories (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS skills (
  id SERIAL PRIMARY KEY,
  category_id INTEGER REFERENCES skill_categories(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  level INTEGER CHECK (level >= 0 AND level <= 100),
  logo_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image_url TEXT,
  github_url TEXT,
  live_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS project_technologies (
  id SERIAL PRIMARY KEY,
  project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
  technology VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO education (period, institution, major) VALUES
('2023 - Sekarang', 'Universitas Amikom Yogyakarta', 'S1 - Informatika'),
('2020 - 2023', 'SMKN 7 Samarinda', 'Rekayasa Perangkat Lunak');

INSERT INTO skill_categories (title) VALUES
('Frontend'),
('Backend'),
('Tools & Lainnya');

INSERT INTO skills (category_id, name, level, logo_url) VALUES
(1, 'Vue.js', 90, 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'),
(1, 'JavaScript', 85, 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'),
(1, 'Tailwind CSS', 95, 'https://www.svgrepo.com/show/374118/tailwind.svg'),
(1, 'HTML5 & CSS3', 95, 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'),
(2, 'Express.js', 75, 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'),
(3, 'Git & GitHub', 90, 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'),
(3, 'Figma', 85, 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'),

INSERT INTO projects (title, description, image_url, github_url, live_url) VALUES
('Galderma - Indonesia Cetaphil', 'Dashboard interaktif untuk visualisasi data penjualan dan sales activity.', '/cetaphil.jpg', 'https://github.com/username/project1', 'https://demo-project1.com'),
('Portfolio Website', 'Website portfolio responsive dengan Vue.js dan Tailwind CSS.', '/zada.png', 'https://github.com/nandanazadaa/portfolio', 'https://zada-portfolio-cv.vercel.app'),
('Task Management App', 'Aplikasi manajemen tugas dengan fitur drag and drop.', 'https://placehold.co/500x300/3b82f6/ffffff?text=Task+App', 'https://github.com/username/task-app', 'https://task-app-demo.com');

INSERT INTO project_technologies (project_id, technology) VALUES
(1, 'Vue.js'),
(1, 'Laravel'),
(1, 'MySQL'),
(2, 'Vue.js'),
(2, 'Tailwind CSS'),