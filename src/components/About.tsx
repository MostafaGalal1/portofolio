
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          About <span className="text-teal-500">Me</span>
        </h2>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 mb-6">
            I'm a Software Engineer with a passion for building efficient and user-friendly web applications. 
            Currently pursuing my Bachelor's degree in Computer and Systems Engineering at the University of Alexandria, 
            I have experience in full-stack development, with a focus on React, Spring Boot, and database design.
          </p>
          <p className="text-lg text-gray-700">
            I enjoy solving complex problems and creating applications that make a difference. My recent internships at 
            Applied Innovation Center (AIC-MCIT) and Ejada have allowed me to work on real-world projects, optimize performance, 
            and develop new features that enhance user experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-t-4 border-t-teal-500 shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Code className="text-teal-500" size={20} />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h3 className="text-lg font-semibold">
                  University of Alexandria - Faculty of Engineering
                </h3>
                <p className="text-gray-500 text-sm">Sept 2020 – June 2025</p>
                <p className="mt-1">Computer and Systems Department, CGPA: 3.81/4.0</p>
                <p className="mt-3 text-sm text-gray-700">
                  <span className="font-medium">Coursework:</span> Data Structures and Algorithms, Programming Paradigms, 
                  OS, Software Engineering, DB Systems, Networks, Computer Architecture, Pattern Recognition, 
                  Distributed Computing, Data Intensive.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-teal-500 shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="text-teal-500" size={20} />
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h3 className="text-lg font-semibold">
                  Applied Innovation Center (AIC-MCIT)
                </h3>
                <p className="text-gray-500 text-sm">Software Engineer Intern | Aug 2024 – Sept 2024</p>
                <ul className="mt-2 text-sm text-gray-700 list-disc list-inside">
                  <li className="mt-1">Reduced build time of frontend docker container from 14 min 36 sec to 4 min 47 sec, making build 3 times faster.</li>
                  <li className="mt-1">Developed a multi-language translation feature utilizing server-sent events to stream responses for managing translations.</li>
                  <li className="mt-1">Implemented a pulsing real-time record button expanding based on voice intensity similar to Google translate.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold">
                  Ejada
                </h3>
                <p className="text-gray-500 text-sm">Software Engineer Intern | Jun 2024 – Jul 2024</p>
                <ul className="mt-2 text-sm text-gray-700 list-disc list-inside">
                  <li className="mt-1">Completed an 8-week internship with T24, focusing on the architecture and installation of the Transact system.</li>
                  <li className="mt-1">Conducted 4 practical exercises focused on the foundations of banking operations, customization, and API creation.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
