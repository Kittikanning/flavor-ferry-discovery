
import React, { useState } from 'react';
import FoodCard from './FoodCard';

// Food item interface
interface FoodItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  time: string;
}

// Sample food data
const foodItems: FoodItem[] = [
  {
    id: 1,
    title: "Tom Yum Goong",
    description: "A spicy and sour Thai soup made with shrimp, lemongrass, lime leaves, and chili peppers. Perfect for a comforting meal.",
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Thai",
    difficulty: "Medium",
    time: "30 min"
  },
  {
    id: 2,
    title: "Margherita Pizza",
    description: "Classic Italian pizza with tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil.",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Italian",
    difficulty: "Easy",
    time: "25 min"
  },
  {
    id: 3,
    title: "Beef Bulgogi",
    description: "Korean marinated beef dish that's grilled with a mixture of soy sauce, sugar, sesame oil, garlic, and pepper.",
    image: "https://images.unsplash.com/photo-1627662168223-7df99068099a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Korean",
    difficulty: "Medium",
    time: "45 min"
  },
  {
    id: 4,
    title: "Sushi Platter",
    description: "Assorted fresh sushi including nigiri and maki rolls with premium seafood and traditional accompaniments.",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Japanese",
    difficulty: "Hard",
    time: "60 min"
  },
  {
    id: 5,
    title: "Chicken Pad Thai",
    description: "Stir-fried rice noodle dish with chicken, eggs, and tofu, flavored with tamarind pulp, fish sauce, garlic, and chili.",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Thai",
    difficulty: "Medium",
    time: "35 min"
  },
  {
    id: 6,
    title: "Pasta Carbonara",
    description: "An Italian pasta dish made with eggs, hard cheese, cured pork, and black pepper. Simple yet delicious.",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    category: "Italian",
    difficulty: "Easy",
    time: "20 min"
  }
];

// Categories for filtering
const categories = ["All", ...Array.from(new Set(foodItems.map(item => item.category)))];

const FoodGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter food items based on active category and search query
  const filteredItems = foodItems.filter(item => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  return (
    <section id="discover" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent bg-accent/10 rounded-full mb-4">
            Our Collection
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover Culinary Delights
          </h2>
          <p className="text-muted-foreground">
            Explore our handpicked selection of exquisite dishes from around the world,
            crafted to inspire your next culinary adventure.
          </p>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex items-center overflow-x-auto pb-2 md:pb-0 flex-nowrap md:flex-wrap">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 mr-2 text-sm font-medium rounded-full transition-all whitespace-nowrap ${
                    activeCategory === category
                      ? 'bg-accent text-white'
                      : 'bg-secondary hover:bg-secondary/80 text-foreground/70'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full md:w-64 px-4 py-2 pl-10 rounded-full bg-secondary border-border focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <FoodCard 
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                category={item.category}
                difficulty={item.difficulty}
                time={item.time}
                index={index}
              />
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <p className="text-lg text-muted-foreground">No dishes found matching your criteria.</p>
              <button 
                onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                className="mt-4 px-6 py-2 text-sm font-medium bg-accent text-white rounded-full hover:bg-accent/90 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FoodGrid;
