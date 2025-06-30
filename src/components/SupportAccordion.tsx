'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItemProps {
  id: string;
  question: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({ id, question, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div id={id} className="border border-gray-200 rounded-lg overflow-hidden scroll-mt-24">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between group"
      >
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors duration-200">
          {question}
        </h3>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <ChevronUp size={20} className="text-gray-500 group-hover:text-primary transition-colors duration-200" />
          ) : (
            <ChevronDown size={20} className="text-gray-500 group-hover:text-primary transition-colors duration-200" />
          )}
        </div>
      </button>
      
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="p-6 bg-white border-t border-gray-200">
          {children}
        </div>
      </div>
    </div>
  );
}

interface SectionAccordionProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function SectionAccordion({ id, title, icon, children, defaultOpen = false }: SectionAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section id={id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden scroll-mt-24">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between group border-b border-gray-200"
      >
        <div className="flex items-center gap-3">
          <div className="text-primary">{icon}</div>
          <h2 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-200">
            {title}
          </h2>
        </div>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp size={24} className="text-gray-500 group-hover:text-primary transition-colors duration-200" />
          ) : (
            <ChevronDown size={24} className="text-gray-500 group-hover:text-primary transition-colors duration-200" />
          )}
        </div>
      </button>
      
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="p-8 space-y-6">
          {children}
        </div>
      </div>
    </section>
  );
}