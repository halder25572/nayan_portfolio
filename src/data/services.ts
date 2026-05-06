import { Code, Layout, Smartphone, Search, Monitor, Server } from "lucide-react";

export const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Building responsive, high-performance websites using the latest frameworks like Next.js and React.",
    icon: Code,
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces that provide exceptional user experiences.",
    icon: Layout,
    color: "bg-purple-50 text-purple-600",
  },
  {
    id: 3,
    title: "Mobile App Dev",
    description: "Developing cross-platform mobile applications using React Native and Flutter.",
    icon: Smartphone,
    color: "bg-orange-50 text-orange-600",
  },
  {
    id: 4,
    title: "SEO Optimization",
    description: "Improving your website's visibility on search engines to drive organic traffic.",
    icon: Search,
    color: "bg-green-50 text-green-600",
  },
  {
    id: 5,
    title: "Backend Solutions",
    description: "Scalable server-side logic and database architecture for complex applications.",
    icon: Server,
    color: "bg-red-50 text-red-600",
  },
  {
    id: 6,
    title: "Tech Consulting",
    description: "Helping businesses choose the right technology stack for their specific needs.",
    icon: Monitor,
    color: "bg-cyan-50 text-cyan-600",
  },
];
