import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  badge,
  align = "center",
  className,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "mb-12 space-y-4",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary text-xs font-bold uppercase tracking-wider">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
        {title.split(" ").map((word, i) => (
          <span key={i} className={i === title.split(" ").length - 1 ? "text-primary" : ""}>
            {word}{" "}
          </span>
        ))}
      </h2>
      {subtitle && (
        <p className="max-w-2xl mx-auto text-lg text-gray-500 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
