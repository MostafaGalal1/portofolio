
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Globe } from 'lucide-react';

type ProjectProps = {
  title: string;
  description: string;
  tools: string[];
  github: string;
  demo?: string;
  image?: string;
};

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  tools,
  github,
  demo,
  image
}) => {
  return (
    <Card className="overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="h-48 bg-gray-200 relative">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gradient-to-r from-teal-500 to-teal-600 text-white text-lg font-medium">
            {title}
          </div>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <div className="flex flex-wrap gap-2 mt-2">
            {tools.map((tool, index) => (
              <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">
                {tool}
              </span>
            ))}
          </div>
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-700 text-sm">
          {description}
        </p>
      </CardContent>
      
      <CardFooter className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1" asChild>
          <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Github size={16} />
            Code
          </a>
        </Button>
        
        {demo && (
          <Button variant="default" size="sm" className="flex-1 bg-teal-500 hover:bg-teal-600" asChild>
            <a href={demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Globe size={16} />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const Projects: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      title: "Doctorkom",
      description: "A digital healthcare appointment platform that enhances accessibility by allowing patients to schedule appointments. Configured CI/CD workflows, designed the database schema, and developed RESTful endpoints.",
      tools: ["React", "Spring Boot", "Hibernate", "SQL"],
      github: "https://github.com/membaby/Doctorkom",
      demo: "https://doctorkom.example.com",
    },
    {
      title: "SharePlace",
      description: "A website to navigate and share places you visit with people around the world. Designed front-end and implemented custom React hooks and components. Built the backend using MongoDB for fast data retrieval.",
      tools: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/MostafaGalal1/SharePlace",
      demo: "https://shareplace.example.com",
    },
    {
      title: "Secpar",
      description: "A Python tool for scraping code submissions from platforms like Codeforces, Vjudge and CSES. Achieved 1,500 scraped submissions in under 8 minutes with automatic code storing and README generation.",
      tools: ["Python", "PyPI"],
      github: "https://github.com/MostafaGalal1/Secpar",
    },
    {
      title: "Pigeanon",
      description: "Web-based email application with features for sending emails, saving contacts, prioritizing, and organizing emails. Designed the front-end with Angular and TypeScript using components and services.",
      tools: ["Angular", "Spring Boot", "SQL"],
      github: "https://github.com/MostafaGalal1/Pigeonon",
      demo: "https://pigeanon.example.com",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          My <span className="text-teal-500">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
