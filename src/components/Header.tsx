
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-teal-500">MG</a>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {[
              { name: 'About', href: '#about' },
              { name: 'Skills', href: '#skills' },
              { name: 'Projects', href: '#projects' },
              { name: 'Contact', href: '#contact' },
            ].map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  className="text-gray-700 hover:text-teal-500 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-teal-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
