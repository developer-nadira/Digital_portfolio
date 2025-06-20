const mongoose = require('mongoose');
const Project = require('./models/Project');

// Sample project data
const sampleProjects = [
  {
    title: "E-Commerce Website",
    description: "A full-stack e-commerce platform built with React and Node.js. Features include user authentication, shopping cart, payment integration, and admin dashboard.",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/example/ecommerce",
    featured: true
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates. Users can create projects, assign tasks, set deadlines, and track progress.",
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Vue.js", "Firebase", "Socket.io", "Tailwind CSS"],
    liveUrl: "https://example-taskmanager.com",
    githubUrl: "https://github.com/example/taskmanager",
    featured: true
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities. Includes interactive charts and maps.",
    imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    technologies: ["JavaScript", "Chart.js", "OpenWeather API", "CSS3"],
    liveUrl: "https://example-weather.com",
    githubUrl: "https://github.com/example/weather",
    featured: false
  },
  {
    title: "Blog Platform",
    description: "A modern blogging platform with content management system. Features include rich text editor, comment system, user profiles, and SEO optimization.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "TypeScript"],
    liveUrl: "https://example-blog.com",
    githubUrl: "https://github.com/example/blog",
    featured: false
  },
  {
    title: "Social Media Dashboard",
    description: "An analytics dashboard for social media management. Tracks engagement metrics, schedules posts, and provides insights across multiple platforms.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    technologies: ["React", "D3.js", "Python", "Django", "Redis"],
    liveUrl: "https://example-dashboard.com",
    githubUrl: "https://github.com/example/dashboard",
    featured: true
  },
  {
    title: "Mobile Fitness App",
    description: "A React Native fitness tracking app with workout plans, progress tracking, and social features. Includes integration with health APIs.",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    technologies: ["React Native", "Expo", "Firebase", "Redux"],
    liveUrl: "https://example-fitness.com",
    githubUrl: "https://github.com/example/fitness",
    featured: false
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/portfolio_db');
    console.log('Connected to MongoDB');

    // Clear existing projects
    await Project.deleteMany({});
    console.log('Cleared existing projects');

    // Insert sample projects
    await Project.insertMany(sampleProjects);
    console.log('Sample projects inserted successfully');

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase(); 