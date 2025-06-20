const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Mock data for projects
const mockProjects = [
  {
    _id: "1",
    title: "E-Commerce Website",
    description: "A full-stack e-commerce platform built with React and Node.js. Features include user authentication, shopping cart, payment integration, and admin dashboard.",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/example/ecommerce",
    featured: true,
    createdAt: new Date()
  },
  {
    _id: "2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates. Users can create projects, assign tasks, set deadlines, and track progress.",
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Vue.js", "Firebase", "Socket.io", "Tailwind CSS"],
    liveUrl: "https://example-taskmanager.com",
    githubUrl: "https://github.com/example/taskmanager",
    featured: true,
    createdAt: new Date()
  },
  {
    _id: "3",
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities. Includes interactive charts and maps.",
    imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    technologies: ["JavaScript", "Chart.js", "OpenWeather API", "CSS3"],
    liveUrl: "https://example-weather.com",
    githubUrl: "https://github.com/example/weather",
    featured: false,
    createdAt: new Date()
  },
  {
    _id: "4",
    title: "Blog Platform",
    description: "A modern blogging platform with content management system. Features include rich text editor, comment system, user profiles, and SEO optimization.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "TypeScript"],
    liveUrl: "https://example-blog.com",
    githubUrl: "https://github.com/example/blog",
    featured: false,
    createdAt: new Date()
  },
  {
    _id: "5",
    title: "Social Media Dashboard",
    description: "An analytics dashboard for social media management. Tracks engagement metrics, schedules posts, and provides insights across multiple platforms.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    technologies: ["React", "D3.js", "Python", "Django", "Redis"],
    liveUrl: "https://example-dashboard.com",
    githubUrl: "https://github.com/example/dashboard",
    featured: true,
    createdAt: new Date()
  },
  {
    _id: "6",
    title: "Mobile Fitness App",
    description: "A React Native fitness tracking app with workout plans, progress tracking, and social features. Includes integration with health APIs.",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    technologies: ["React Native", "Expo", "Firebase", "Redux"],
    liveUrl: "https://example-fitness.com",
    githubUrl: "https://github.com/example/fitness",
    featured: false,
    createdAt: new Date()
  }
];

// Routes
// Get all projects
app.get('/api/projects', (req, res) => {
  try {
    const projects = mockProjects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get featured projects
app.get('/api/projects/featured', (req, res) => {
  try {
    const featuredProjects = mockProjects.filter(project => project.featured);
    res.json(featuredProjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new project
app.post('/api/projects', (req, res) => {
  try {
    const newProject = {
      _id: (mockProjects.length + 1).toString(),
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      technologies: req.body.technologies,
      liveUrl: req.body.liveUrl,
      githubUrl: req.body.githubUrl,
      featured: req.body.featured,
      createdAt: new Date()
    };
    
    mockProjects.push(newProject);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Using mock data (MongoDB not required)');
}); 