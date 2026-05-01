import React from 'react';
import { SectionHeading } from './SectionHeading';
import { GlassCard } from './GlassCard';
import { Mail, Github, Linkedin, Globe } from 'lucide-react';
export const ContactSection = () => {
  const contacts = [
  {
    icon: <Mail size={24} />,
    label: 'Email',
    value: 'rumethwijethunge456@gmail.com',
    href: 'mailto:rumethwijethunge456@gmail.com'
  },
  {
    icon: <Github size={24} />,
    label: 'GitHub',
    value: 'github.com/rux-xy',
    href: 'https://github.com/rux-xy'
  },
  {
    icon: <Linkedin size={24} />,
    label: 'LinkedIn',
    value: 'rumeth-wijethunge',
    href: 'https://linkedin.com/in/rumeth-wijethunge'
  },
  {
    icon: <Globe size={24} />,
    label: 'Website',
    value: 'rumeth.me',
    href: 'https://rumeth.me'
  }];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading
          title="Get In Touch"
          subtitle="I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!" />
        

        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          {contacts.map((contact, index) =>
          <a
            key={index}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block">
            
              <GlassCard
              delay={index * 0.1}
              hoverEffect
              className="flex flex-col items-center p-8">
              
                <div className="p-4 bg-darkRed/20 rounded-full text-neonRed mb-4">
                  {contact.icon}
                </div>
                <h3 className="text-lg font-medium text-white mb-1">
                  {contact.label}
                </h3>
                <p className="text-sm text-gray-400">{contact.value}</p>
              </GlassCard>
            </a>
          )}
        </div>
      </div>
    </section>);

};