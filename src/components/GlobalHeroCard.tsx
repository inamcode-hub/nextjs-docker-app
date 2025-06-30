import React from 'react';
import { ReactNode } from 'react';

interface GlobalHeroCardProps {
  children: ReactNode;
  className?: string;
}

export const GlobalHeroCard: React.FC<GlobalHeroCardProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`relative bg-gradient-to-br from-primary via-primary-dark to-secondary rounded-3xl p-8 md:p-16 mb-12 overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform rotate-12 translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="relative z-10 text-center text-white">
        {children}
      </div>
    </div>
  );
};

interface GlobalHeroCardBadgeProps {
  children: ReactNode;
  icon: ReactNode;
  className?: string;
}

export const GlobalHeroCardBadge: React.FC<GlobalHeroCardBadgeProps> = ({
  children,
  icon,
  className = '',
}) => {
  return (
    <div className={`inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6 ${className}`}>
      {icon}
      <span className="text-sm font-semibold">{children}</span>
    </div>
  );
};

interface GlobalHeroCardTitleProps {
  children: ReactNode;
  highlightText?: ReactNode;
  className?: string;
}

export const GlobalHeroCardTitle: React.FC<GlobalHeroCardTitleProps> = ({
  children,
  highlightText,
  className = '',
}) => {
  return (
    <h2 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${className}`}>
      {children}
      {highlightText && <span className="text-secondary-1"> {highlightText}</span>}
    </h2>
  );
};

interface GlobalHeroCardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export const GlobalHeroCardDescription: React.FC<GlobalHeroCardDescriptionProps> = ({
  children,
  className = '',
}) => {
  return (
    <p className={`text-xl text-white/90 max-w-3xl mx-auto leading-relaxed ${className}`}>
      {children}
    </p>
  );
};