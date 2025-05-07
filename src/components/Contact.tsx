
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, User, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setForm({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Get In <span className="text-teal-500">Touch</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a href="mailto:mostafam.galal82@gmail.com" className="text-gray-900 hover:text-teal-500 transition-colors">
                  mostafam.galal82@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <a href="tel:+201000227906" className="text-gray-900 hover:text-teal-500 transition-colors">
                  +201000227906
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                <User size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Social Profiles</p>
                <div className="flex gap-3 mt-1">
                  <a
                    href="https://github.com/MostafaGalal1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-teal-500 transition-colors"
                  >
                    GitHub
                  </a>
                  <span>•</span>
                  <a
                    href="https://www.linkedin.com/in/MostafaM-Galal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-teal-500 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
