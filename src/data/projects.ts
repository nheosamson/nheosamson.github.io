
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  type: 'photo' | 'video';
  date: string;
}

export const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Urban Geometry",
    description: "A study of architectural patterns and urban landscapes, exploring the intersection of structure and light.",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    type: "photo",
    date: "April 2025"
  },
  {
    id: 2,
    title: "Digital Waves",
    description: "An experimental video project visualizing data patterns as ocean waves, combining my CS background with visual arts.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    type: "video",
    date: "March 2025"
  },
  {
    id: 3,
    title: "Night Fragments",
    description: "Long-exposure photography capturing the essence of night skies and city lights.",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    type: "photo",
    date: "February 2025"
  }
];

export const galleryItems: Project[] = [
  ...featuredProjects,
  {
    id: 4,
    title: "Digital Life",
    description: "A portrait series exploring our relationship with technology.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    type: "photo",
    date: "January 2025"
  },
  {
    id: 5,
    title: "Code Visualized",
    description: "Abstract representation of programming concepts through visual media.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    type: "video",
    date: "December 2024"
  },
  {
    id: 6,
    title: "Tech Workspace",
    description: "Modern workspaces and the technology that powers creativity.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    type: "photo",
    date: "November 2024"
  },
  {
    id: 7,
    title: "Connected",
    description: "Exploring how technology brings people together through shared experiences.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    type: "video",
    date: "October 2024"
  }
];
