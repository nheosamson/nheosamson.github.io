
import React from "react";
import { featuredProjects } from "@/data/projects";
import { Camera, Play, ArrowRight } from "lucide-react";

const FeaturedProject = () => {
  return (
    <section id="featured" className="py-20 px-4 bg-muted">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Projects</h2>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Highlights from my portfolio blending technical expertise with creative vision.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div key={project.id} className="bg-card rounded-xl overflow-hidden hover-scale card-glow">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute top-4 right-4 bg-background/50 backdrop-blur-sm p-2 rounded-full">
                  {project.type === "photo" ? (
                    <Camera size={20} className="text-primary" />
                  ) : (
                    <Play size={20} className="text-secondary" />
                  )}
                </div>
                {index === 0 && (
                  <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 text-xs font-medium rounded-full">
                    Latest Work
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{project.date}</span>
                  <button className="text-primary flex items-center gap-1 text-sm hover:underline">
                    View details <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
