
import React, { useState } from 'react';

interface FoodCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  time: string;
  index: number;
}

const FoodCard: React.FC<FoodCardProps> = ({ 
  title, 
  description, 
  image, 
  category, 
  difficulty, 
  time,
  index
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Generate difficulty color
  const difficultyColor = () => {
    switch(difficulty) {
      case 'Easy': return 'bg-green-500';
      case 'Medium': return 'bg-yellow-500';
      case 'Hard': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };
  
  // Staggered animation delay based on index
  const animationDelay = `${index * 0.1}s`;
  
  return (
    <div 
      className="group relative h-full rounded-xl overflow-hidden card-hover animate-fade-in"
      style={{ animationDelay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
      
      {/* Image with shine effect */}
      <div className="relative h-72 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-image-shine"></div>
        )}
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/20 backdrop-blur-sm text-white">
              {category}
            </span>
            <div className="flex items-center space-x-2">
              <span className={`w-2 h-2 rounded-full ${difficultyColor()}`}></span>
              <span className="text-xs text-white/90">{difficulty}</span>
              <span className="text-xs text-white/70">•</span>
              <span className="text-xs text-white/90">{time}</span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-sm text-white/80 line-clamp-2 group-hover:line-clamp-3 transition-all duration-300">
            {description}
          </p>
          
          <div className="pt-2 transform opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <button className="text-sm font-medium text-accent hover:text-white transition-colors duration-200 flex items-center gap-1">
              View Recipe
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
