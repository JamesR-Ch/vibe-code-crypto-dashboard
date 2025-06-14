import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: string;
}

const variantClasses = {
  primary: 'from-purple-300 to-pink-300 hover:from-purple-400 hover:to-pink-400 text-purple-900 disabled:from-gray-300 disabled:to-gray-400',
  secondary: 'from-blue-300 to-cyan-300 hover:from-blue-400 hover:to-cyan-400 text-blue-900 disabled:from-gray-300 disabled:to-gray-400',
  success: 'from-green-300 to-emerald-300 hover:from-green-400 hover:to-emerald-400 text-green-900 disabled:from-gray-300 disabled:to-gray-400',
  warning: 'from-yellow-300 to-orange-300 hover:from-yellow-400 hover:to-orange-400 text-orange-900 disabled:from-gray-300 disabled:to-gray-400',
  danger: 'from-red-300 to-pink-300 hover:from-red-400 hover:to-pink-400 text-red-900 disabled:from-gray-300 disabled:to-gray-400'
};

const sizeClasses = {
  sm: 'px-3 sm:px-4 py-2 text-xs sm:text-sm',
  md: 'px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base',
  lg: 'px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg'
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'md',
  className = '',
  icon
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-gradient-to-r ${variantClasses[variant]} 
        ${sizeClasses[size]}
        font-semibold rounded-xl sm:rounded-2xl shadow-md
        transition-all duration-150 ease-out transform-gpu
        hover:scale-[1.02] hover:shadow-lg hover:-translate-y-0.5
        active:scale-[0.98] active:translate-y-0
        disabled:scale-100 disabled:opacity-50 disabled:cursor-not-allowed
        disabled:hover:translate-y-0 disabled:hover:shadow-md
        focus:outline-none focus:ring-4 focus:ring-purple-200/50
        will-change-transform
        ${className}
      `}
    >
      <span className="flex items-center justify-center gap-1 sm:gap-2">
        {icon && <span className="text-lg sm:text-xl">{icon}</span>}
        {children}
      </span>
    </button>
  );
};