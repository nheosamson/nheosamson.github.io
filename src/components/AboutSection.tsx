
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground mb-4">
              I'm a recent Computer Science graduate with a passion for visual storytelling through photography and videography. My technical background gives me a unique perspective on capturing and processing digital imagery.
            </p>
            <p className="text-muted-foreground mb-4">
              During my studies, I specialized in computational photography and computer vision, which I now apply to my creative work. I'm particularly interested in the intersection of technology and art, using algorithms and code to enhance my visual projects.
            </p>
            <p className="text-muted-foreground mb-6">
              When I'm not behind the camera or coding, you can find me exploring new hiking trails, experimenting with AI art generation, or working on open-source projects.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Skills</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Photography & Videography</li>
                  <li>• Adobe Creative Suite</li>
                  <li>• React & Web Development</li>
                  <li>• Python & OpenCV</li>
                  <li>• Computer Vision</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Education</h3>
                <p className="text-sm text-muted-foreground">BS Computer Science</p>
                <p className="text-sm text-primary">Class of 2025</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
            <div className="relative bg-muted rounded-xl p-1 rotate-1 hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="Portrait" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
