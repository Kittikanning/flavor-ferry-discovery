
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FoodGrid from '../components/FoodGrid';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Change page title
    document.title = 'Flavor Ferry - Discover Culinary Excellence';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent bg-accent/10 rounded-full mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Embark on a Culinary Journey
              </h2>
              <p className="text-muted-foreground">
                We curate exceptional recipes from around the world, helping you discover
                new flavors and elevate your cooking skills.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  ),
                  title: "Curated Collections",
                  description: "Our team of culinary experts handpicks the finest recipes from around the world, ensuring quality and authenticity in every dish."
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  ),
                  title: "Detailed Instructions",
                  description: "Each recipe comes with step-by-step instructions, making complex dishes accessible to cooks of all skill levels."
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Time Efficiency",
                  description: "We value your time, providing accurate preparation times and cooking shortcuts without compromising on flavor or quality."
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-xl bg-secondary/50 border border-border/50 flex flex-col items-center text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="mb-4 p-3 rounded-full bg-accent/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Food Grid */}
        <FoodGrid />
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-accent/90 to-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Elevate Your Culinary Skills?
              </h2>
              <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
                Join our community of food enthusiasts and gain access to exclusive recipes,
                cooking tips, and personalized recommendations.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-3 font-medium text-base transition-all bg-white text-accent hover:bg-white/90 rounded-full">
                  Start Exploring
                </button>
                <button className="px-8 py-3 font-medium text-base transition-all bg-transparent hover:bg-white/10 text-white border border-white/30 rounded-full">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
