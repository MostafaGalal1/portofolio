
import React from 'react';
import { Github, Mail, Linkedin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 min-h-[90vh] flex items-center">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl mb-6 animate-fade-in">
            Mostafa Mohamed <span className="text-teal-500">Galal</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in animate-delay-200">
            Software Engineer & Full Stack Developer
          </p>
          <div className="flex justify-center gap-4 mb-10 animate-fade-in animate-delay-300">
            <a 
              href="https://github.com/MostafaGalal1" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-600 hover:text-teal-500 transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:mostafam.galal82@gmail.com" 
              aria-label="Email"
              className="text-gray-600 hover:text-teal-500 transition-colors"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/MostafaM-Galal" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-teal-500 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://mostafagalal1.github.io"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Personal Website"
              className="text-gray-600 hover:text-teal-500 transition-colors"
            >
              <Globe size={24} />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animate-delay-400">
            <Button 
              variant="default" 
              size="lg"
              className="bg-teal-500 hover:bg-teal-600 text-white"
              asChild
            >
              <a href="#projects">View My Projects</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-teal-500 text-teal-500 hover:bg-teal-50"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
