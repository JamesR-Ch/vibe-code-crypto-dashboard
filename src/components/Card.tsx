import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: 'purple' | 'blue' | 'pink' | 'green' | 'orange';
}

const gradientClasses = {
  purple: 'from-purple-100/80 to-lavender-100/80 border-purple-200/50',
  blue: 'from-blue-100/80 to-sky-100/80 border-blue-200/50',
  pink: 'from-pink-100/80 to-rose-100/80 border-pink-200/50',
  green: 'from-green-100/80 to-emerald-100/80 border-green-200/50',
  orange: 'from-orange-100/80 to-amber-100/80 border-orange-200/50'
};

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  gradient = 'purple' 
}) => {
  return (
    <div className={`
      bg-gradient-to-br ${gradientClasses[gradient]} 
      backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-lg border 
      p-4 sm:p-6 md:p-8 transition-all duration-200 ease-out
      hover:shadow-xl hover:scale-[1.01] 
      hover:-translate-y-1 hover:bg-white/20
      transform-gpu will-change-transform
      ${className}
    `}>
      {children}
    </div>
  );
};