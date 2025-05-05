
import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background to-background z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-gradient">Capturing Digital Beauty</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-foreground/80">
          Where computer science and visual storytelling converge. 
          Recent CS graduate with a passion for photography and videography.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#gallery" 
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90"
          >
            View Gallery
          </a>
          <a 
            href="#about" 
            className="px-8 py-3 rounded-full bg-muted text-foreground font-medium transition-colors hover:bg-muted/80"
          >
            About Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
