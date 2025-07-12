

-- Data Skills (Perhatikan category_id, level, dan logo_url)
INSERT INTO skills (id, category_id, name, level, logo_url) VALUES
(1, 1, 'Vue.js', 90, 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg') ON CONFLICT (id) DO UPDATE SET category_id = EXCLUDED.category_id, name = EXCLUDED.name, level = EXCLUDED.level, logo_url = EXCLUDED.logo_url, created_at = CURRENT_TIMESTAMP;
INSERT INTO skills (id, category_id, name, level, logo_url) VALUES
(2, 1, 'JavaScript', 85, 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg') ON CONFLICT (id) DO UPDATE SET category_id = EXCLUDED.category_id, name = EXCLUDED.name, level = EXCLUDED.level, logo_url = EXCLUDED.logo_url, created_at = CURRENT_TIMESTAMP;
INSERT INTO skills (id, category_id, name, level, logo_url) VALUES
(3, 1, 'Tailwind CSS', 95, 'https://www.svgrepo.com/show/374118/tailwind.svg') ON CONFLICT (id) DO UPDATE SET category_id = EXCLUDED.category_id, name = EXCLUDED.name, level = EXCLUDED.level, logo_url = EXCLUDED.logo_url, created_at = CURRENT_TIMESTAMP;
INSERT INTO skills (id, category_id, name, level, logo_url) VALUES
(4, 1, 'HTML5 & CSS3', 95, 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg') ON CONFLICT (id) DO UPDATE SET category_id = EXCLUDED.category_id, name = EXCLUDED.name, level = EXCLUDED.level, logo_url = EXCLUDED.logo_url, created_at = CURRENT_TIMESTAMP;
INSERT INTO skills (id, category_id, name, level, logo_url) VALUES
(5, 2, 'Laravel', 80, 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg') ON CONFLICT (id) DO UPDATE SET category_id = EXCLUDED.category_id, name = EXCLUDED.name, level = EXCLUDED.level, logo_url = EXCLUDED.logo_url, created_at = CURRENT_TIMESTAMP;
INSERT INTO skills (id, category_id, name, level, logo_url) VALUES
(6, 2, 'Express.js', 75, 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg') ON CONFLICT (id) DO UPDATE SET category_id = EXCLUDED.category_id, name = EXCLUDED.name, level = EXCLUDED.level, logo_url = EXCLUDED.logo_url, created_at = CURRENT_TIMESTAMP;
INSERT INTO skills (id, category_id, name, level, logo_url) VALUES
(7, 2, 'Node.js', 78, 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg') ON CONFLICT (id) DO UPDATE SET category_id = EXCLUDED.category_id, name = EXCLUDED.name, level = EXCLUDED.level, logo_url = EXCLUDED.logo_url, created_at = CURRENT_TIMESTAMP;
INSERT INTO skills (id, category_id, name, level, logo_url) VALUES
(8, 2, 'MySQL', 70, 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg') ON CONFLICT (id) DO UPDATE SET category_id = EXCLUDED.category_id, name = EXCLUDED.name, level = EXCLUDED.level, logo_url = EXCLUDED.logo_url, created_at = CURRENT_TIMESTAMP;
INSERT INTO skills (id, category_id, name, level, logo_url) VALUES
(9, 2, 'RESTful API', 85, 'https://img.icons8.com/ios/50/api.png') ON CONFLICT (id) DO UPDATE SET category_id = EXCLUDED.category_id, name = EXCLUDED.name, level = EXCLUDED.level, logo_url = EXCLUDED.logo_url, created_at = CURRENT_TIMESTAMP;
INSERT INTO skills (id, category_id, name, level, logo_url) VALUES
(10, 3, 'Git & GitHub', 90, 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg') ON CONFLICT (id) DO UPDATE SET category_id = EXCLUDED.category_id, name = EXCLUDED.name, level = EXCLUDED.level, logo_url = EXCLUDED.logo_url, created_at = CURRENT_TIMESTAMP;
INSERT INTO skills (id, category_id, name, level, logo_url) VALUES
(11, 3, 'Figma', 85, 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg') ON CONFLICT (id) DO UPDATE SET category_id = EXCLUDED.category_id, name = EXCLUDED.name, level = EXCLUDED.level, logo_url = EXCLUDED.logo_url, created_at = CURRENT_TIMESTAMP;
INSERT INTO skills (id, category_id, name, level, logo_url) VALUES
(12, 3, 'VS Code', 92, 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg') ON CONFLICT (id) DO UPDATE SET category_id = EXCLUDED.category_id, name = EXCLUDED.name, level = EXCLUDED.level, logo_url = EXCLUDED.logo_url, created_at = CURRENT_TIMESTAMP;
INSERT INTO skills (id, category_id, name, level, logo_url) VALUES
(13, 3, 'Docker', 60, 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg') ON CONFLICT (id) DO UPDATE SET category_id = EXCLUDED.category_id, name = EXCLUDED.name, level = EXCLUDED.level, logo_url = EXCLUDED.logo_url, created_at = CURRENT_TIMESTAMP;

-- Data Projects
INSERT INTO projects (id, title, description, image_url, github_url, live_url) VALUES
(1, 'Galderma Indonesia - Cetaphil', 'Dashboard interaktif untuk visualisasi data penjualan dan sales activity.', '/cetaphil.jpg', 'https://github.com/username/project1', 'https://demo-project1.com') ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description, image_url = EXCLUDED.image_url, github_url = EXCLUDED.github_url, live_url = EXCLUDED.live_url, created_at = CURRENT_TIMESTAMP;
INSERT INTO projects (id, title, description, image_url, github_url, live_url) VALUES
(2, 'Cosmic Task Manager (Simember)', 'Aplikasi untuk mengelola tugas harian dengan fitur pengingat dan kategori.', '/simember.PNG', 'https://github.com/username/task-app', 'https://task-app-demo.com') ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description, image_url = EXCLUDED.image_url, github_url = EXCLUDED.github_url, live_url = EXCLUDED.live_url, created_at = CURRENT_TIMESTAMP;
INSERT INTO projects (id, title, description, image_url, github_url, live_url) VALUES
(3, 'Interstellar Marketplace (Vistore.id)', 'Platform e-commerce untuk jual beli digital artifacts dan sumber daya kosmik.', '/vistore.jpg', 'https://github.com/username/vistore', 'https://vistore-demo.com') ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description, image_url = EXCLUDED.image_url, github_url = EXCLUDED.github_url, live_url = EXCLUDED.live_url, created_at = CURRENT_TIMESTAMP;


-- Data Project Technologies (Sesuaikan project_id dengan ID proyek di atas)
-- Hapus data lama agar tidak ada duplikasi jika menjalankan ulang
-- DELETE FROM project_technologies;
INSERT INTO project_technologies (project_id, technology) VALUES
(1, 'Flutter') ON CONFLICT (project_id, technology) DO NOTHING; -- Contoh jika Anda memiliki kombinasi unik
INSERT INTO project_technologies (project_id, technology) VALUES
(1, 'Laravel') ON CONFLICT (project_id, technology) DO NOTHING;
INSERT INTO project_technologies (project_id, technology) VALUES
(1, 'MySQL') ON CONFLICT (project_id, technology) DO NOTHING;

INSERT INTO project_technologies (project_id, technology) VALUES
(2, 'Codeigniter 3') ON CONFLICT (project_id, technology) DO NOTHING;
INSERT INTO project_technologies (project_id, technology) VALUES
(2, 'MySQL') ON CONFLICT (project_id, technology) DO NOTHING;

INSERT INTO project_technologies (project_id, technology) VALUES
(3, 'Vue.js') ON CONFLICT (project_id, technology) DO NOTHING;
INSERT INTO project_technologies (project_id, technology) DO NOTHING VALUES
(3, 'Laravel') ON CONFLICT (project_id, technology) DO NOTHING;
INSERT INTO project_technologies (project_id, technology) VALUES
(3, 'MySQL') ON CONFLICT (project_id, technology) DO NOTHING;

INSERT INTO project_technologies (project_id, technology) VALUES
(4, 'Flutter') ON CONFLICT (project_id, technology) DO NOTHING;
INSERT INTO project_technologies (project_id, technology) VALUES
(4, 'Codeigniter 3') ON CONFLICT (project_id, technology) DO NOTHING;
INSERT INTO project_technologies (project_id, technology) VALUES
(4, 'MySQL') ON CONFLICT (project_id, technology) DO NOTHING;