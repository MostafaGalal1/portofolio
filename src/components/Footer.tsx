
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-teal-400">Mostafa Galal</h3>
              <p className="text-gray-400 mb-4">
                Software Engineer & Full Stack Developer with a passion for building efficient and user-friendly applications.
              </p>
              <p className="text-gray-500 text-sm">
                © {currentYear} • All Rights Reserved
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Links</h3>
              <ul className="space-y-2">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Contact', href: '#contact' },
                ].map(link => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://github.com/MostafaGalal1" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/MostafaM-Galal" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:mostafam.galal82@gmail.com" 
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+201000227906" 
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    Phone
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
