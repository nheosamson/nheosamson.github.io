
import React from "react";
import { galleryItems } from "@/data/projects";
import { Play, Camera } from "lucide-react";

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Gallery</h2>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          A selection of my recent photography and videography work exploring the intersection of technology and visual art.
        </p>
        
        <div className="overflow-x-auto scrollbar-hide pb-6">
          <div className="flex space-x-6" style={{ width: "max-content" }}>
            {galleryItems.map((item) => (
              <div 
                key={item.id} 
                className="w-72 md:w-80 flex-shrink-0 rounded-xl overflow-hidden hover-scale card-glow"
              >
                <div className="relative h-48 md:h-52">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-4">
                    <div className="flex items-center justify-between w-full">
                      <h3 className="text-lg font-medium">{item.title}</h3>
                      <span className="bg-background/50 backdrop-blur-sm p-1.5 rounded-full">
                        {item.type === "photo" ? (
                          <Camera size={16} />
                        ) : (
                          <Play size={16} />
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-card">
                  <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                  <p className="text-xs text-muted-foreground mt-2">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-6">
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i} 
                className={`h-1 w-8 rounded-full ${i === 0 ? "bg-primary" : "bg-muted-foreground/30"}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
