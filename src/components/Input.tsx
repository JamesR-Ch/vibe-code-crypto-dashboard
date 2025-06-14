import React from 'react';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  maxLength?: number;
  type?: string;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  onKeyDown,
  placeholder,
  className = '',
  maxLength,
  type = 'text'
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      maxLength={maxLength}
      className={`
        w-full px-4 sm:px-6 py-3 sm:py-4 
        bg-white/80 backdrop-blur-sm 
        border-2 border-purple-200/50 
        rounded-xl sm:rounded-2xl text-gray-800 placeholder-gray-500
        text-sm sm:text-base
        focus:outline-none focus:ring-4 focus:ring-purple-200/50 
        focus:border-purple-300 focus:bg-white/90
        transition-all duration-200 ease-out
        shadow-md hover:shadow-lg hover:bg-white/85
        transform-gpu will-change-transform
        ${className}
      `}
    />
  );
};