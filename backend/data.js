const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "Vue.js", level: 90, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
            { name: "JavaScript", level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: "Tailwind CSS", level: 95, logo: 'https://www.svgrepo.com/show/374118/tailwind.svg' },
            { name: "HTML5 & CSS3", level: 95, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", level: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            { name: "Express.js", level: 75, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
            { name: "PostgreSQL", level: 70, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        ],
    },
    {
        title: "Tools & Lainnya",
        skills: [
            { name: "Git & GitHub", level: 90, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: "Figma", level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
            { name: "Vite", level: 88, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
        ],
    },
];

const projects = [
    {
        title: 'Galderma - Indonesia Cetaphil',
        image_url: '/cetaphil.jpg', // Changed from 'image' to 'image_url'
        description: 'Dashboard interaktif untuk visualisasi data penjualan dan sales activity.',
        tech: ['Vue.js', 'Laravel', 'MySQL'],
        github: '#',
        live: '#',
    },
    {
        title: 'Simemberjlb.com',
        image_url: '/simember.PNG', // Changed from 'image' to 'image_url'
        description: 'Aplikasi untuk mengelola tugas harian dengan fitur pengingat dan kategori.',
        tech: ['Vue.js', 'Node.js', 'MongoDB'],
        github: '#',
        live: '#',
    },
    {
        title: 'Vistore.id',
        image_url: '/vistore.jpg', // Changed from 'image' to 'image_url'
        description: 'Dashboard interaktif untuk visualisasi data penjualan dan sales activity.',
        tech: ['Vue.js', 'Express.js', 'PostgreSQL'],
        github: '#',
        live: '#',
    },
];

module.exports = { educationHistory, skillCategories, projects };