import React from 'react';
import { Mail, Linkedin, Instagram, Facebook } from 'lucide-react';

const ContactPage = () => {
  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', username: '@mweon', url: 'https://www.linkedin.com/in/mweon/', color: 'hover:text-blue-600' },
    { icon: Instagram, label: 'Instagram', username: '@michelleweon', url: 'https://www.instagram.com/michelleweon/', color: 'hover:text-pink-600' },
    { icon: Facebook, label: 'Facebook', username: '@michweon', url: 'https://www.facebook.com/michweon/', color: 'hover:text-blue-500' },
    { icon: Mail, label: 'Email', username: 'mweon@college.harvard.edu', url: 'mailto:mweon@college.harvard.edu', color: 'hover:text-red-500' }
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
      <div className="grid gap-6">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-4 p-4 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm transition-colors ${social.color}`}
          >
            <social.icon className="w-6 h-6" />
            <div>
              <p className="font-medium text-gray-800">{social.label}</p>
              <p className="text-gray-600">{social.username}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
