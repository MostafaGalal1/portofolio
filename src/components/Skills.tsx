
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SkillCategory: React.FC<{
  title: string;
  skills: string[];
}> = ({ title, skills }) => (
  <Card className="shadow-sm hover:shadow-md transition-shadow">
    <CardContent className="p-6">
      <h3 className="text-lg font-semibold mb-4 text-teal-600">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </CardContent>
  </Card>
);

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "C", "Java", "JavaScript", "TypeScript", "Python", "Scala", "SQL", "GO", "R", "Prolog"]
    },
    {
      title: "Frontend",
      skills: ["React", "Angular", "HTML5", "CSS3", "Tailwind CSS", "TypeScript"]
    },
    {
      title: "Backend",
      skills: ["Spring Boot", "Hibernate", "Node.js", "Express", "FastAPI"]
    },
    {
      title: "Databases",
      skills: ["SQL", "MongoDB", "H2", "Microsoft SQL Server"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "Kubernetes", "Kaniko", "Git", "Linux", "Jira", "Kafka", "Elastic Search", "Kibana"]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          My <span className="text-teal-500">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
